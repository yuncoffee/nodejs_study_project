var sayNode = function(){
    console.log('Node');
};
var es = 'ES';

const newobject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};

newobject.sayNode(); // Node
newobject.sayJS(); // JS
console.log(newobject.ES6);

