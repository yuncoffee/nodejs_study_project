const {odd, even} = require('./lecture2A'); // 구조분해 할당할때는 속성명이랑 변수명이랑 똑같아야함.
const checkNumber = require('./lecture2B'); // 얘는 그냥 변수라 이름을 마음대로 지어도됨.

function checkStringOddEven(str){
    if(str.length % 2)
    {
        return odd;
    }else{
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddEven('hello'));