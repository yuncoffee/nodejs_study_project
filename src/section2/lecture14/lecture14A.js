// 큰 파일 만들기.

const fs = require('fs');
const file = fs.createWriteStream("./big.txt");

for(let i = 0 ; i <= 10_100_100; i++){
    file.write('큰 파일을 생성\n');
}
file.end();
