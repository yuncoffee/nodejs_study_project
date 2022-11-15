const http = require('http');
const fs = require('fs').promises; // 파일 관련 모듈 호출. 

// asunc 할 때는 항상 try catch로 에러 처리 꼭!!
const server = http.createServer(async(req, res) => {
    try {
        res.writeHead(200, { 'Contect-Type': 'text/html; charset=utf-8'}); // 보낸게 html인지 문자열인지 알려주는 코드 charset=utf-8은 한국어라는 소리.
        const data = await fs.readFile('./server2.html');  // server2.html 파일을 읽어서 data 넣어서 전송.
        res.end(data);
    } catch (error) {
        console.eeror(error); // 에러 기록
        res.writeHead(200, { 'Contect-Type': 'text/plain; charset=utf-8'}); // 일반 문자열인걸 알려줌.
        res.end(err.message); // 에러가 나면 에러메세지가 일로 전송.?
    }
})
    .listen(8080);

server.on('listening', () => {             
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {            
    console.log(error);
});
