# 라우터 분리하기

## express - 11

### router 분리하는방법

module export로 분리가능

``` typescript
//app
import indexRouter from "./routes"
import userRouter from "./routes/user"

app.use("/", indexRouter)
app.use("/user", userRouter)

```

``` typescript

// routes/index.ts

import express from "express"

const router = express.Router()

// GET / 라우터
export default router.get("/", (req, res) => {
    res.send("Hello, Express")
})


```

``` typescript

// routes/user.ts

import express from "express"

const router = express.Router()

// GET /user 라우터
export default router.get("/", (req, res) => {
    res.send("Hello, User")
})


```

### req,res 객체

<!-- 추후 정리 -->

```

req.app // app 객체 접근, routing 가능 ex) req.app.get("/user")

```
