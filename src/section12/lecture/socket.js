// const WebSocket = require("ws")

// module.exports = (server) => {
//     const wss = new WebSocket.Server({ server })

//     wss.on("connection", (ws, req) => {
//         // 웹소켓 연결 시
//         const ip =
//             req.headers["x-forwarded-for"] || req.connection.remoteAddress
//         console.log("새로운 클라이언트 접속", ip)
//         ws.on("message", (message) => {
//             // 클라이언트로부터 메시지
//             console.log(message.toString())
//         })
//         ws.on("error", (error) => {
//             // 에러 시
//             console.error(error)
//         })
//         ws.on("close", () => {
//             // 연결 종료 시
//             console.log("클라이언트 접속 해제", ip)
//             clearInterval(ws.interval)
//         })

//         ws.interval = setInterval(() => {
//             // 3초마다 클라이언트로 메시지 전송
//             if (ws.readyState === ws.OPEN) {
//                 ws.send("서버에서 클라이언트로 메시지를 보냅니다.")
//                 ws.send("hello! it's me!")
//             }
//         }, 3000)
//     })
// }

const SocketIO = require("socket.io")

module.exports = (server) => {
    const io = SocketIO(server, { path: "/socket.io" })

    io.on("connection", (socket) => {
        // 웹소켓 연결 시
        const req = socket.request
        const ip =
            req.headers["x-forwarded-for"] || req.connection.remoteAddress
        console.log("새로운 클라이언트 접속!", ip, socket.id, req.ip)
        socket.on("disconnect", () => {
            // 연결 종료 시
            console.log("클라이언트 접속 해제", ip, socket.id)
            clearInterval(socket.interval)
        })
        socket.on("error", (error) => {
            // 에러 시
            console.error(error)
        })
        socket.on("reply", (data) => {
            // 클라이언트로부터 메시지
            console.log(data)
        })
        socket.interval = setInterval(() => {
            // 3초마다 클라이언트로 메시지 전송
            socket.emit("news", "Hello Socket.IO")
        }, 3000)
    })
}
