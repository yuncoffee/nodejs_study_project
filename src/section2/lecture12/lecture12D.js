// 비동기를 유지하면서 효율적으로.
/*
const fs = require('fs');

fs.readFile('./readme.txt',(err, data) => {
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
    fs.readFile('./readme.txt',(err, data) => {
        if(err){
            throw err;
        }
        console.log('2번',data.toString());
        fs.readFile('./readme.txt',(err, data) => {
            if(err){
                throw err;
            }
            console.log('3번',data.toString());
            fs.readFile('./readme.txt',(err, data) => {
                if(err){
                    throw err;
                }
                console.log('4번',data.toString());
                fs.readFile('./readme.txt',(err, data) => {
                    if(err){
                        throw err;
                    }
                    console.log('5번',data.toString());
})})})})}); // 개 지저분함.
*/
/*
// promises 사용해서 깔끔하게.
const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data) => {
        console.log('1번',data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('2번',data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('3번',data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('4번',data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('5번',data.toString());
        return fs.readFile('./readme.txt');
    })
    .catch((err) => {
        throw err;
    });
*/

// async await 을 사용해서 더 깔끔.

const fs = require('fs').promises;

async function main(){
    let data =  await fs.readFile('./readme.txt')
    console.log('1번', data.toString());
    data =  await fs.readFile('./readme.txt')
    console.log('2번', data.toString());
    data =  await fs.readFile('./readme.txt')
    console.log('3번', data.toString());
    data =  await fs.readFile('./readme.txt')
    console.log('4번', data.toString());
    data =  await fs.readFile('./readme.txt')
    console.log('5번', data.toString());
}
main();




