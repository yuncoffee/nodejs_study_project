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
