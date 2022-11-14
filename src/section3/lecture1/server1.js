// 비동기 코드이기에 에러처리 해줘야함.

const http = require('http'); // node가 제공하는 htttp서버 만들수 있는 'http' 모듈 사용

// 서버 만드는 코드
// 만든 서버에 요청이 오면 함수가 실행됨.
// 함수에서 응답을 어떻게 보내줄지 정함. 응답 거부도 가능함 ( 그 판단은 알아서 만들어야함 )
const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>'); // html 태크처럼 보내줄 수 있다. wirte를 계속 써 내려갈수 있다.
    res.write('<p>Hello server</p>');
    res.end('<P>Hello duck</P>');
})
    .listen(8080);

server.on('listening', () => {              // 응답 콜백
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {             // error 콜백
    console.log(error);
});


// localhost:8080으로 접속.
// 서버 실행중에 코드 수정했으면, 저장하고 다시 실행 해야됨.
