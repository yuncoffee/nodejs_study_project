# multer

## express - 9

### multer 미들웨어

form 태그의 submit 시 enctype이 multipart/form-data인 경우 귀찮다

``` typescript

    const upload = multer({
    // 데이터 저장하는 곳
    storage: multer.diskStorage({
        // 저장할 곳 설정
        destination(req, file, done) {
            done(null, "uploads/")
        },
        // 파일명 추출
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext)
        },
    }),
    // 파일 제한
    limits: { fileSize: 5 * 1024 * 1024 },
})

```

``` typescript

app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, "multipart.html"))
})
// 특정 router에서만 사용하고 싶어서
// single 한개의 파일만 업로드
app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file) // 업로드 된 정보들
    res.send("ok")
})

```
