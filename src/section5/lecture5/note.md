# next 활용법

## express - 5

### 미들웨어 응답

- 웹 서버 - senFile 주로 전달
- api 서버 - json 주로 전달

``` typescript

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html")) // 파일 전달
    res.json({ hello: "coffee" }) // json 처리 후 응답
    res.render()
    
})

```

### 에러 처리

next인수에서 에러가 발생했을 경우

``` typescript

app.use(
    (req, res, next) => {
        console.log("모든 요청에 실행하고 싶다.")

        next()
    },
    (req, res, next) => {
        try {
            console.log("에러 발생!")
        } catch (error) {
            next(error)
        }
    }
)

```

### route

분기처리 시 사용

``` typescript

app.get("/", (req, res, next) => {
    res.sendFile(join(__dirname, "index.html")) // 파일 전달

    next('route")
}, (req, res)=>{
    console.log("실행안됨")
})

app.get("/", (req, res) => {
    console.log("실행됨")
})

```
