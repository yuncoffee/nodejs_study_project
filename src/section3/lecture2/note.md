# fs로 HTML 읽어 제공하기

## server - 2

파일 시스템을 활용해서 응답에 맞는 html을 전달해 줄 수 있다.

``` typescript

import { readFile } from "fs/promises"
import { createServer } from "http"

const server2 = createServer(async (req, res) => {
    try {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        const html = await readFile("./index.html")
        console.log(html)
        res.end(html)
    } catch (error: any) {
        console.error(error)
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        console.log(error)
        res.end(error.message)
    }
}).listen(8081, () => {
    console.log("8081 서버 대기중!!!")
})
server2.on("listening", () => {
    console.log("8081 서버 대기중!!!")
})

server2.on("error", (error) => {
    console.log("err:", error)
})

// 8080 서버 대기중
// 8080 서버 대기중!!!
// 8081 서버 대기중!!!
// 8081 서버 대기중!!!
// <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0a 20 20 20 20 3c 68 65 61 64 3e 0a 20 20 20 20 20 20 ... 312 more bytes>
// <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0a 20 20 20 20 3c 68 65 61 64 3e 0a 20 20 20 20 20 20 ... 312 more bytes>


```

### HTTP 상태 코드

200, 500같은 숫자는 HTTP의 상태 코드다.

- 2XX : 성공을 알리는 상태 코드. 200(성공), 201(작성됨)
- 3XX : 리다이렉션(다른 페이지로 이동)을 알리는 상태 코드. 301(영구 이동), 302(임시 이동), 304(수정되지 않음) : 캐시사용
- 4XX : 요청 오류. 400(잘못된 요청), 401(권한 없음), 403(금지됨), 404(찾을 수 없음)
- 5XX : 서버 오류. 500(내부 서버 오류), 502(불량 게이트웨이), 503(서비스를 사용할 수 없음)

### 여러 개 서버 띄우기

한 파일에서 띄우는 포트만 달리해서 서버를 두개 띄울 수도 잇음. 근데 굳이?

<img src="./스크린샷%202022-11-16%20오후%209.23.46.png" />
