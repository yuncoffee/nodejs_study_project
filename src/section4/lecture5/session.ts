import { readFile } from "fs/promises"
import { createServer } from "http"
import url from "url"
import qs from "querystring"

const parseCookies = (cookie = "") =>
    cookie
        .split(";")
        .map((v) => v.split("="))
        .reduce((acc: any, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v)
            return acc
        }, {})

const session: any = {}

createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie)
    if (req.url?.startsWith("/login")) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { query } = url.parse(req.url!) as any
        const { name } = qs.parse(query) as any
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 5)
        const uniqueInt = Date.now()
        session[uniqueInt] = {
            name,
            expires,
        }
        res.writeHead(302, {
            Location: "/",
            "Set-Cookie": `session=${uniqueInt}; Expires=${expires.toDateString()}; HttpOnly; Path=/`,
        })
        res.end()
        // 세션쿠키가 존재하고, 만료 기간이 지나지 않았다면
    } else if (
        cookies.session && 
        session[cookies.session].expires > new Date()
    ) {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
        res.end(`${session[cookies.session].name}님 안녕하세요`)
    } else {
        try {
            const data = await readFile("./cookie2.html")
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            res.end(data)
        } catch (err: any) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
            res.end(err.message)
        }
    }
}).listen(8085, () => {
    console.log("8085번 포트에서 서버 대기 중입니다!")
})
