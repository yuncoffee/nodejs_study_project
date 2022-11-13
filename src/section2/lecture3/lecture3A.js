const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key:'value',
        },
    },
};

console.log('전체 시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.log('에러 메세지는 console.error에 담아주세요');

console.table([{ name: 'duck', birth:1995}, {name:'deok', birth:1995}]);

console.dir(obj, {colors:false, depth:2});
console.dir(obj, {colors:true, depth:1});

console.time('시간 측정');
for(let i = 0; i<1000000; i++)
{

}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}
function a(){
    b();
}
a();

console.timeEnd('전체 시간');