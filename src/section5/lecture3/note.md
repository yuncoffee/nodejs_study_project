# 미들웨어 사용하기

## express -3

### middleware(미들웨어)

공통적으로 사용하고 싶은 모듈이 있을 경우 사용

``` typescript

// middleware 사용방법
app.use((req, res, next) => {
    console.log("모든 요청에 실행하고 싶다.")
    next() // 미들웨어에서 요청 실행 후 다음 동작 실행
})

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})

// "모든 요청에 실행하고 싶다."
// index.html 가져옴

app.get("/about", (req, res) => {
    res.send("about hello express")
})

// "모든 요청에 실행하고 싶다."
// about hello express 

```

### 라우트 매개변수(route parameter)

동적 라우팅 처리

`:string` 경로로 받아서 `req.params.string` 으로 사용

``` typescript

app.get("/category/:name", (req, res) => {
    res.send(`about hello  ${req.params.name}`)
})

app.get("*", (req, res) => {
    res.send(`hello~`)
})


```

실행이 순서대로 된다. 라우트 매개변수 처리 시 주의해야된다.

따라서 라우팅 처리 이후 마지막에 작성해주는게 좋다. (범위가 넓을수록 밑으로)
