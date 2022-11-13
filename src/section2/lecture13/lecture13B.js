const fs = require('fs');
const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16}); // 16씩 읽어오는거

const data = []; // chunk 담을 배열 
readStream.on('data', (chunk) =>{
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});
readStream.on('end', () => {
    console.log('end', Buffer.concat(data).toString()); // 끝나면 다시 합치는거.
});
readStream.on('error', (err) => {
    console.log('error:', err);
});


