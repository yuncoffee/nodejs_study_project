//const value = require('./lecture2A');
//const odd = value.odd;
//const evem = value.even; 

//console.log(value);
// 위에 있는 코드를 밑에 처럼 축약 가능

const {odd, even} = require('./lecture2A');

function checkOddorEven(number){
    if (number % 2)
    {
        return odd;
    }
    else
    {
        return even; 
    }
}

module.exports = checkOddorEven;

// 여러개를 동시에 내보낼떄는
/*
module.exports = {
    checkOddorEven,
    odd,
    even,
};
*/