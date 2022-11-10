// exports와 this

console.log(__filename)
// /Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture4/index.ts
console.log(__dirname)
// /Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture4

console.log(this) // {}
console.log(this === module.exports) // true
console.log(this === exports) // true
console.log(this === globalThis) // false
function a() {
    // error TS2683: 'this' implicitly has type 'any' because it does not have a type annotation.
    // console.log(this)
}

const b = () => {
    // error TS7041: The containing arrow function captures the global value of 'this'.
    // console.log(this)
}

a()
b()
