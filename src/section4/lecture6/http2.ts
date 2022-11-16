import { readFileSync } from "fs"
import { createSecureServer } from "http2"

createSecureServer(
    {
        cert: readFileSync("도메인 인증서 경로"),
        key: readFileSync("도메인 비밀키 경로"),
        ca: [
            readFileSync("상위 인증서 경로"),
            readFileSync("상위 인증서 경로"),
        ],
    },
    (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.write("<h1>Hello Node!</h1>")
        res.end("<p>Hello Server!</p>")
    }
).listen(443, () => {
    console.log("443번 포트에서 서버 대기 중입니다!")
})
