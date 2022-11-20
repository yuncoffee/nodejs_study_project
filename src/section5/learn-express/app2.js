const exp = require('constants');
const cookieParser = require('cookie-parser');
const express = require('express'); // express 가져오기
const morgan = require('morgan');
const path = require('path'); // 경로처리하는 모듈 가져오기
const { nextTick } = require('process');
const app = express(); // express로 부터 app을 가져옴.

app.set('port', process.env.PORT || 3000); 

app.use(morgan('combined')); // 요청과 응답을 기록하는 라우터.
app.use(cookieParser('honeyduck'));
app.use(express.json()); // 클라이언트에서 json data 를 보냈을 때 그 json data를 파싱해서 req.body로 넣어줌.
app.use(express.urlencoded({ extended: true})); // ture : qs, false quertsring
app.use(express.static());


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  
});

app.post('/', (req,res) => {
    res.send('hello express');
});

app.get('/category/nade', (req,res) => {         
    res.send('hello Node');
});

app.get('/category/:name', (req,res) => {         
    res.send(`hello ${req.params.name}`);
});

app.get('/about', (req,res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(404).send('404처리 미들웨어') 
})

app.use((err, req, res, next) => { 
    console.error(err);
    res.send('에러 처리 미들웨어')
})

app.listen(app.get('port'), () => {            
    console.log('익스프레스 서버 실행')
});



// http 서버를 쓰고 있는 express를 가져와서 쓰는거.
// app. 를 써서 더 이상 if문으로 도배 안해도됨.
// app 에다가 메서드를 붙혀주는 방법으로 구별됨. 