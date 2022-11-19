import { createServer } from "http"

const server = createServer((req, res) => {
    res.write("<h1>hello node!</h1>")
    res.write("<h1>hello server!</h1>")
    res.end("<h1>hello coffee!</h1>")
}).listen(8080, () => {
    console.log("8080 서버 대기중")
})
server.on("listening", () => {
    console.log("8080 서버 대기중!!")
})

server.on("error", (error) => {
    console.log("err:", error)
})
