import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import session from "express-session"
import dotenv from "dotenv"
import path from "path"
dotenv.config()
import indexRouter from "./routes"
import userRouter from "./routes/user"

const app = express()
app.set("port", process.env.PORT || 3000)
app.set("/src/views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(morgan("dev"))
// app.use("/", express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET as string,
        cookie: {
            httpOnly: true,
            secure: false,
        },
        name: "session-cookie",
    })
)

app.use("/", indexRouter)
app.use("/user", userRouter)

app.use((req, res) => {
    res.status(404).send("Not Found")
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err)
    res.status(500).send(err.message)
})

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중")
})
