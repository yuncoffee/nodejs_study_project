// 메모리 체크

const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);


// 이러면 서버 메모리가 부족해서 터짐 버퍼메모리.