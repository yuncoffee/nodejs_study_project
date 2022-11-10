# exports와 this

## node 내장 객체 - 2

js 말고 노드가 제공하는 기본 기능들이 있음

### _filename, __dirname

파일 시스템 접근, 파일 시스템 만든걸 후회했댄다 해킹에 위협이 있어서

`path`와 조합해서 자주 쓰인다.

``` typescript

 // 현재 파일 경로
__filename

// 현재 폴더(디렉토리) 경로
__dirname

```

### moudle, exports, require

#### module

``` typescript

const odd = "홀수"
const even = "짝수"

// 객체 형식을 일치시키셈 그래야 참조 관계가 됨
// 동시 사용하지마셈
//  exports === module.exports === {}

// 똑같음
module.exports = {
  odd, even
}
=== 
exports.odd = odd
exports.even = even


```

#### this

- 전역에서 `this` 사용 시 빈 객체임
- 놀랍게도 파일 내의 전역 this는 global이 아니고 module.exports(exports)다. `좀 충격`
- Ts의 일반함수(선언식, arrow)에서 this 사용 시 error가 뜸.

``` typescript

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

```
