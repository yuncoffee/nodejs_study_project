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
        // 쿠키 없음
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
