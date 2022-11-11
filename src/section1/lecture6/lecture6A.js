const example = { a:123, b:{c:135, d:146}}

const{a,b:{d}} = example       // const a = example.a;     const d = example.a.b.d;
console.log(a); // 123
console.log(d); // 145


