import express from "express"

const router = express.Router()

// GET / 라우터
export default router.get("/", (req, res) => {
    res.send("Hello, Express")
})
