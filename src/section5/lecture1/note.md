# express 서버 사용해보기

## Express - 1

### 어떤 패키지를 써야할까

필요한거 써야겠지만, 기본적으로는

- 다운로드 많은(많이 쓰는)
- 패키지 업데이트가 최신인(자주 업데이트 되는)

### express 실행해보기

express는 HTTP 서버 구현을 편하게 도와주는  nodejs 프레임워크다.

``` typescript

// app.ts

import express from "express"

const app = express()

app.set("port", process.env.PORT || 3000) // 변수와 같은 개념


// `/` 경로로 요청 시 응답
app.get("/", (req, res) => {
    res.send("hello express")
})

app.post("/", (req, res) => {
    res.send("hello express")
})


// `/about` 경로로 요청 시 응답
app.get("/about", (req, res) => {
    res.send("about hello express")
})

// 서버 구독
app.listen(app.get("port"), () => {
    console.log("express server start")
})

```
