// 파일 생성 후 읽기

const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력')
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });
