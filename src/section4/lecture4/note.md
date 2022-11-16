# 쿠키 이해하기

## server - 4

클라이언트에서 보내는 요청에는 누가 요청을 보내는지 모른다는 단점이 있음.
로그인이 필요하다.
거기에 활용하는게 쿠키, 세션임

### 쿠키

키 = 값의 상
ex) name = coffee
매 요청마다 서버에 동봉해서 보냄
서버는 쿠키를 읽어 누구인지 파악함

### 쿠키 직접 구현

```typescript
import { createServer } from "http"

createServer((req, res) => {
    console.log(req.url, req.headers.cookie)
    res.writeHead(200, { "Set-Cookie": "mycookie=coffee!" })
    res.end("Hello Cookie")
}).listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!")
})

```

<img src="./스크린샷%202022-11-16%20오후%2010.45.05.png" />

### 헤더와 본문

http req,res는 헤더와 본문(body)를 가짐

- 헤더는 요청 또는 응답에 대한 정보
- 본문은 주고받는 실제 데이터
- 쿠키는 부가적인 정보 (헤더에 저장)

### 쿠키 설정

로그인 시 쿠키 사용을 많이 하는데, 안전장치(옵션)가 많음.

- expires : 유효기간
- path : 유효범위
- domain : 쿠키가 전송될 도메인 특정
- HttpOnly : http만 접근가능
- secure : HTTPS에서만 접근가능
- SameSite : path랑 일치하는지

``` typescript

import { createServer } from "http"
import url from "url"
import qs from "querystring"
import { readFile } from "fs/promises"

const parseCookies = (cookie = "") =>
    cookie
        .split(";")
        .map((v) => v.split("="))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce((acc: any, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v)
            return acc
        }, {})

createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie) // { mycookie: 'test' }
    // 주소가 /login으로 시작하는 경우
    if (req.url?.startsWith("/login")) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { query } = url.parse(req.url!)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
        const { name } = qs.parse(query!) as any
        const expires = new Date() // 만료기한 설정을 위한 date
        // 쿠키 유효 시간을 현재시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5)
        //redirect
        res.writeHead(302, {
            Location: "/",
            "Set-Cookie": `name=${encodeURIComponent(
                name
            )}; Expires=${expires.toDateString()}; HttpOnly; Path=/`,
        })
        // 만료기간을 안 넣을 시 세션쿠키로 됨.
        res.end()
        // name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end(`${cookies.name}님 안녕하세요`)
    } else {
        try {
            const data = await readFile("./cookie2.html")
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            res.end(data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
            res.end(err.message)
        }
    }
}).listen(8084, () => {
    console.log("8084번 포트에서 서버 대기 중입니다!")
})


```

<img src="./스크린샷%202022-11-16%20오후%2011.01.01.png" />
