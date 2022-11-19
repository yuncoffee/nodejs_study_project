import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import session from "express-session"
import dotenv from "dotenv"
dotenv.config()
import indexRouter from "./routes"
import userRouter from "./routes/user"
import nunjucks from "nunjucks"
const app = express()
app.set("port", process.env.PORT || 3000)
app.set("view engine", "html")
nunjucks.configure("src/views", {
    express: app,
    watch: true,
})
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

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    next(error)
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: any, res: any, next: any) => {
    res.locals.message = err.message
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {}
    res.status(err.status || 500)
    res.render("error")
})

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중")
})
