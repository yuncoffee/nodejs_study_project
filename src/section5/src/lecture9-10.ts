import express, { NextFunction } from "express"
import { join } from "path"

import morgan from "morgan"

import cookieParser from "cookie-parser"
import session from "express-session"

declare module "express-session" {
    export interface SessionData {
        user: string
    }
}

const app = express()

app.set("port", process.env.PORT || 3000) // 변수와 같은 개념

app.use(morgan("dev"))
// app.use("/", express.static(join(__dirname, "public-sample")))
app.use(cookieParser("coffeepassword"))
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: "coffeepassword",
        cookie: {
            httpOnly: true,
        },
        // name: "connect.sid", // default
        name: "cookie-test",
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", (req, res, next) => {
    if (req.session.id) {
        express.static(join(__dirname, "public-sample"))(req, res, next)
    } else {
        next()
    }
})

app.use(
    (req, res, next) => {
        // 일반적인 쿠키 조회
        // req.cookies
        // 쿠키 추가
        // res.cookie("name", encodeURIComponent("name"), {
        //     expires: new Date(),
        //     httpOnly: true,
        //     path: "/",
        // })
        // 서명된 쿠키 조회
        // req.signedCookies("name", encodeURIComponent("name"), {
        //     expires: new Date(),
        //     httpOnly: true,
        //     path: "/",
        // })
        // 쿠키 삭제
        // res.clearCookie("name", {
        //     httpOnly: true,
        //     path: "/",
        // })
        console.log("모든 요청에 실행하고 싶다.")

        next()
    }
    // (req, res, next) => {
    //     try {
    //         console.log("에러 발생 동작")
    //     } catch (error) {
    //         next(error)
    //     }
    // }
)

app.use(
    "/about",
    (req, res, next) => {
        console.log("/about 에서만 요청에 실행하고 싶다. - 1")
        next()
    },
    (rqe, res, next) => {
        console.log("/about 에서만 요청에 실행하고 싶다. - 2")
        next()
    }
    // (rqe, res, next) => {
    //     throw new Error("에러발생!!")
    // }
)

app.get(
    "/",
    (req, res, next) => {
        req.session.user = "test"
        console.log(req.session)
        // res.sendFile(join(__dirname, "index.html")) // 파일 전달
        res.send("about hello!")
    },
    (req, res) => {
        console.log("실행안됨")
    }
)

app.get("/", (req, res) => {
    console.log("실행됨")
})

app.get("/about", (req, res) => {
    res.send("about hello express")
    // res.sendFile(join(__dirname, "index.html"))
    // res,json({hello : "coffee"})
})

app.get("/category/:name", (req, res) => {
    res.send(`about hello  ${req.params.name}`)
})

// app.get("*", (req, res) => {
//     res.send(`잘못되게 들어온 것같은데~ 404는 안뜬`)
// })

app.use((req, res) => {
    res.status(500).send("404군뇽") // 사기칠 수 있다. 보안관련 처리를 위해 바꿀 수 있다.
})

// error 미들웨어, 반드시 매개변수 4개 작성
// app.use((err: Error, req: any, res: any, next: NextFunction) => {
//     console.error(err)
//     res.send("당신 에러!")
// })

app.listen(app.get("port"), () => {
    console.log("express server start")
})
