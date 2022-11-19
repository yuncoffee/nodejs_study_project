const express = require('express'); // express 가져오기
const path = require('path'); // 경로처리하는 모듈 가져오기
const app = express(); // express로 부터 app을 가져옴.

app.set('port', process.env.PORT || 3000); 
// 서버에다가 변수를 심는거. port 변수에 3000 넣는다. 
// process.env.PORT 입력하지 않으면 3000 
// 포트를 바꾸고 싶으면 SET PORT = xxx 이렇게 하면 위험함 한번 하면 계속 이걸로 됨. 할수도 있다는거만 알도록.
// app.get('/', (req,res) => {
//     res.send('hello express');
// });


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // html 파일을 서빙 
});

app.post('/', (req,res) => {
    res.send('hello express');
});

app.get('/about', (req,res) => {
    res.send('hello express');
});

app.listen(app.get('port'), () => {               // 콜백           3000 대신 위에 선언했기 떄문에 app.get('port') 으로 바꿀수 있음. 
    console.log('익스프레스 서버 실행')
});


// http 서버를 쓰고 있는 express를 가져와서 쓰는거.
// app. 를 써서 더 이상 if문으로 도배 안해도됨.
// app 에다가 메서드를 붙혀주는 방법으로 구별됨. 