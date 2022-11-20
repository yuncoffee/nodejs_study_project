const express = require('express'); // express 가져오기
const path = require('path'); // 경로처리하는 모듈 가져오기
const { nextTick } = require('process');
const app = express(); // express로 부터 app을 가져옴.

app.set('port', process.env.PORT || 3000); 
// 서버에다가 변수를 심는거. port 변수에 3000 넣는다. 
// process.env.PORT 입력하지 않으면 3000 
// 포트를 바꾸고 싶으면 SET PORT = xxx 이렇게 하면 위험함 한번 하면 계속 이걸로 됨. 할수도 있다는거만 알도록.
// app.get('/', (req,res) => {
//     res.send('hello express');
// });


// use가 안에 있는 함수들을 동작히켜주는거임.
// (req,res) 앞에 ex)  /about 하면 해당하는 모든 코드에 하는거임.
// 미들웨어 연달하 하는거도 가능
app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요1111');                    // app.use  ==> 모든 코드에서 다 실행됨 . 서버에 요청을 보낼때마다 실행.
    next(); // 미들웨어는 next(); 해줘야 그 다음으로 넘어갈 수 있음 . 없으면 여기서 끝.
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // html 파일을 서빙 
});

app.post('/', (req,res) => {
    res.send('hello express');
});

app.get('/category/nade', (req,res) => {         // 대신 category에 다른 하나를 따로 할 경우는 route parameter를 이용한 get 함수 위에 있어야함
    res.send('hello Node');
});

app.get('/category/:name', (req,res) => {         // 같은 category/ 이후에 여러가지가 들어가는 경우는 route parameter를 이용해서 하나로 처리.
    res.send(`hello ${req.params.name}`);
});

app.get('/about', (req,res) => {
    res.send('hello express');
});

// app.get('*', (req,res)=>{             // 모든 get 요청에 다 처리하는 함수. 얘가 가장 위에 있으면 이거 실행되고 끝
//     res.send('hello wildcard');       // 그러기 때문에 사용하면 아마 맨 밑에 해야하는듯.
// });
app.use((req, res, next) => {
    res.status(404).send('404처리 미들웨어') // 위에 res send 에는 202 스테이터스가 생략 되어있음. 수정해서 다른 코드로 할수 있음.
})

app.use((err, req, res, next) => {  // 에러 미들웨어. 안에 매개변수는 4개 꼭 넣어줘야댐.
    console.error(err);
    res.send('에러 처리 미들웨어')
})

app.listen(app.get('port'), () => {               // 콜백           3000 대신 위에 선언했기 떄문에 app.get('port') 으로 바꿀수 있음. 
    console.log('익스프레스 서버 실행')
});



// http 서버를 쓰고 있는 express를 가져와서 쓰는거.
// app. 를 써서 더 이상 if문으로 도배 안해도됨.
// app 에다가 메서드를 붙혀주는 방법으로 구별됨. 