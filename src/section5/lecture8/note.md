# express-session 미들웨어

## express - 8

### 미들웨어 간 데이터 전달하기

현재 요청이 처리되는 동안 미들웨어 간 데이터 공유 가능,

다른 미들웨어아 겹치지 않도록 주의

``` typescript
//  전역 미들웨어 데이터 공유
app.set("port", process.env.PORT || 3000)

// 요청 처리 동안 미들웨어 데이터 공유
app.use((req, res, next)=>{
    req.data = '데이터 넣기'
    next()
}, (req, res, next) => {
    console.log(req.data) // "데이터 받기"
    next()
})

```

### 미들웨어 확장법

미들웨어 작성 시 추가 로직 활용 가능

``` typescript

app.use("/", (req, res, next) => {
    if (req.session.id) {
        express.static(join(__dirname, "public-sample"))(req, res, next)
    } else {
        next()
    }
})

```
