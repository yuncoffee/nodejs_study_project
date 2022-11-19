# REST API 만들기

## server - 3

### REST API

REST = Representational State Transfer

서버의 자원을 정의하고 자원에 대한 주소를 지정하는 방법

서버에서 요청을 보낼 때는 주소를 통해 요청의 내용을 표현

### HTTP 요청 메서드

- GET : 서버 자원을 가져오고자 할 때 사용, 데이터 서버 보낼 때 쿼리스트링 사용
- POST : 서버에 자원을 새로 등록하고자 할 때 사용
- PUT : 서버의 자원을 요청에 들어 있는 자원으로 치환 ex) 전체 수정
- PATCH : 서버 자원의 일부만 수정하고자 할 떄 사용 ex) 부분 수정
- DELETE : 서버의 자원 삭제
- OPTIONS : 요청을 하기 전에 통신 옵션을 설명하기 위해 사용

### HTTP 프로토콜

``` typescript
    
// rest.ts

import { readFile } from "fs/promises"
import { createServer } from "http"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const users: any = {} // 데이터 저장용

createServer(async (req, res) => {
    try {
        if (req.method === "GET") { // get 요청왔을 때
            if (req.url === "/") { // /(index) 요청왔을 떄
                const data = await readFile("./index.html") // html 읽는다
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8", // res header 설정 해준다
                })
                return res.end(data) // get 요청에 대한 response
            } else if (req.url === "/about") { // /about 요청왔을 때
                const data = await readFile("./about.html") // html 읽는다
                res.writeHead(200, { //header 설정
                    "Content-Type": "text/html; charset=utf-8",
                })
                return res.end(data) // 전달
            } else if (req.url === "/users") { ///user 요청왔을 때
                res.writeHead(200, { //header 설정
                    "Content-Type": "application/json; charset=utf-8",
                })
                return res.end(JSON.stringify(users)) //users 문자열로 바꿔서 response
            }
            // /도 /about도 /users도 아니면
            try {
                const data = await readFile(`.${req.url}`) // 요청한 url로 파일 한번 읽어봄
                return res.end(data) // 있으면 전달
            } catch (err) {
                // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
            }
        } else if (req.method === "POST") { // post 요청왔을 때
            if (req.url === "/user") { ///user 요청왔을 때
                let body = ""
                // 요청의 body를 stream 형식으로 받음
                req.on("data", (data) => { 
                    body += data
                })
                // 요청의 body를 다 받은 후 실행됨
                return req.on("end", () => {
                    console.log("POST 본문(Body):", body)
                    const { name } = JSON.parse(body)
                    const id = Date.now()
                    users[id] = name
                    res.writeHead(201, {
                        "Content-Type": "text/plain; charset=utf-8",
                    })
                    res.end("ok")
                })
            }
        } else if (req.method === "PUT") {  // put 요청왔을 때
            if (req.url && req.url.startsWith("/user/")) {
                const key = req.url.split("/")[2]
                let body = ""
                req.on("data", (data) => { // 데이터 스트림
                    body += data
                })
                return req.on("end", () => { // 스트림 끝남 
                    console.log("PUT 본문(Body):", body)
                    users[key] = JSON.parse(body).name // 데이터 -> JSON 변환
                    res.writeHead(200, {
                        "Content-Type": "text/plain; charset=utf-8",
                    })
                    return res.end("ok")
                })
            }
        } else if (req.method === "DELETE") { // delete 요청왔을 때
            if (req.url && req.url.startsWith("/user/")) {
                const key = req.url.split("/")[2] 
                delete users[key] // 유저 삭제
                res.writeHead(200, {
                    "Content-Type": "text/plain; charset=utf-8",
                })
                return res.end("ok")
            }
        }
        res.writeHead(404) // 요청 처리 못했을 때
        return res.end("NOT FOUND") // 404 NOT FOUDN 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.error(err)
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
        res.end(err.message)
    }
}).listen(8082, () => {
    console.log("8082번 포트에서 서버 대기 중입니다")
})


```

서버 실행 테스트 결과

<img src="./스크린샷%202022-11-16%20오후%2010.14.18.png" />
