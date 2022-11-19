# morgan, bodyParse, cookieParser

## express - 6

### morgan

요청 / 응답 로깅

``` typescript
import express, { NextFunction } from "express"
import morgan from "morgan"

app.use(morgan("dev"))
// GET /favicon.ico 500 1.957 ms - 9

app.use(morgan("combined"))
// ::1 - - [19/Nov/2022:07:32:30 +0000] "GET / HTTP/1.1" 200 407 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
```

### cookie-parser

``` typescript

import cookieParser from "cookie-parser"
app.use(cookieParser())

app.use(
    (req, res, next) => {
        // 일반적인 쿠키 조회
        req.cookies
        // 쿠키 추가
        res.cookie("name", encodeURIComponent("name"), {
            expires: new Date(),
            httpOnly: true,
            path: "/",
        })
        // 서명된 쿠키 조회
        req.signedCookies("name", encodeURIComponent("name"), {
            expires: new Date(),
            httpOnly: true,
            path: "/",
        })
        // 쿠키 삭제
        res.clearCookie("name", {
            httpOnly: true,
            path: "/",
        })
        console.log("모든 요청에 실행하고 싶다.")

        next()
    }

)

```

### body-parser 대체

express 내부 모듈로 변경되었음

``` typescript

app.use(express.json()) // json 파싱 후 -> req.body로 넣어줌
app.use(express.urlencoded({ extended: true })) // form data 파싱 후 - > req.body로 넣어줌

```
