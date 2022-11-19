# 미들웨어 특성 이해하기

## express - 4

### middleware(미들웨어)

함수가 미들웨어다. app.use는 미들웨어 사용을 위한 함수

``` typescript

// 모든 요청 전 
app.use((req, res, next) => {
    console.log("모든 요청에 실행하고 싶다.")
    next()
})
// 모든 요청에 실행하고 싶다.

// /about 요청 시만
app.use(
    "/about",
    (req, res, next) => {
        console.log("/about 에서만 요청에 실행하고 싶다. - 1")
        next()
    }
)

// /about 요청 시 이어서
app.use(
    "/about",
    (req, res, next) => {
        console.log("/about 에서만 요청에 실행하고 싶다. - 1")
        next()
    },
    (rqe, res, next) => {
        console.log("/about 에서만 요청에 실행하고 싶다. - 2")
        next()
    },
    (rqe, res, next) => {
        console.log("/about 에서만 요청에 실행하고 싶다. - 3")
        next()
    }
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
    },
    (rqe, res, next) => {
        throw new Error("에러발생!!")
    }
)

// /about 에서만 요청에 실행하고 싶다. - 1
// /about 에서만 요청에 실행하고 싶다. - 2
// Error: 에러발생!!
//     at /Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/src/app.ts:25:15
//     at Layer.handle [as handle_request] (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/layer.js:95:5)
//     at trim_prefix (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:328:13)
//     at /Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:286:9
//     at Function.process_params (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:346:12)
//     at next (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:280:10)
//     at /Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/src/app.ts:22:9
//     at Layer.handle [as handle_request] (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/layer.js:95:5)
//     at trim_prefix (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:328:13)
//     at /Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:286:9

```

### error middleware

``` typescript

// error 미들웨어, 반드시 매개변수 4개 작성
app.use((err, req, res, next)=>{
    console.log(err) // 서버 콘솔에는 에러를
    res.send("무슨 문제가 있어요") // 응답에는 에러는 가려소 보내기
})

```

### error status

보안이슈 때문에 status를 숨기는 경우도 있다..

``` typescript

app.use((req, res) => {
    res.status(500).send("404군뇽") // 사기칠 수 있다. 보안관련 처리를 위해 바꿀 수 있다. 응답 줄 때 500으로 전달
    res.status(200).send("404군뇽")
})

```

### send 처리

하나의 라우터에서 여러 요청을 날렸을 경우

응답은 요청 한번에 응답 한번이다. 트리쉐이킹과 관련되지 않을까.

``` typescript

app.get("/about", (req, res) => {
    res.send("about hello express")
    res.sendFile(join(__dirname, "index.html"))
})

// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//     at new NodeError (node:internal/errors:388:5)
//     at ServerResponse.setHeader (node:_http_outgoing:603:11)
//     at ServerResponse.header (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/response.js:794:10)
//     at ServerResponse.send (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/response.js:174:12)
//     at /Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/src/app.ts:58:9
//     at Layer.handle_error (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/layer.js:71:5)
//     at trim_prefix (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:326:13)
//     at /Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:286:9
//     at Function.process_params (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:346:12)
//     at next (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section5/node_modules/express/lib/router/index.js:280:10)

```
