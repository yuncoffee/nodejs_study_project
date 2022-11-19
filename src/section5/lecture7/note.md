# static 미들웨어

## express - 7

대부분의 미들웨어는 실행 후 `next()`를 실행한다. 따라서 미들웨어 간 순서가 중요함

### static

정적 파일 제공 시  경로 바꿀 때 유용함

``` typescript

// localhost:3000/index.html -> __dirname/public/index.html
// app.use("요청경로", express.static("실제 경로"))
app.use("/", express.static(join(__dirname, "public")))

```
