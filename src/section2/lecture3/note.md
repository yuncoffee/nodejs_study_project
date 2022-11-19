# global과 콘솔, 타이머

## node 내장 객체 - 1

js 말고 노드가 제공하는 기본 기능들이 있음

ex) module, export, global ...

### global

global = globalThis = window

``` node
    <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 1620.0049439985305,
      nodeStart: 49.161981999874115,
      v8Start: 75.97010499984026,
      bootstrapComplete: 168.21735199913383,
      environment: 117.84096900001168,
      loopStart: 1428.3596079982817,
      loopExit: -1,
      idleTime: 0.495622
    },
    timeOrigin: 1668086179316.855
  },
  fetch: [AsyncFunction: fetch],
  exports: {}
}
```

global은 전역 객체라 생략 가능 ㅇㅇ
근데 전역으로 공유되서 찾기 힘드니까 전역으로 쓰는거 지양하자.

---

### console

브라우저의 console이랑 비슷함

``` typescript

// 라벨 사이의 시간 측정
console.time("label")
// task
console.timeEnd("label")

// 에러 콘솔
console.error("error")

// 일반 콘솔
console.log("msg")

// 테이블 콘솔
console.table([1,2,3])

// 객체를 콘솔에 표시
const _obj = {a : 1, b : "2"}
console.dir(_obj, {color: true, depth: 1}) //console.dir(obj, options)

```

### 타이머

callback을 background로 보내는 비동기 함수들

동작 예) 코드 실행 -> `background` -> `task queue` -> `call stack`

특수한 경우(파일 시스템 접근, 네트워킹 같은 I/O 작업의 callback 안에서 타이머 호출)
setImmediate는 setTimeout보다 먼저 실행됨

그러나 항상 먼저 실행되는 건 아님

**비동기처리를 하고싶은 경우라면 setTimeout(callback, 0) 대신  setImmediate(callback) 사용을 권장.**

``` typescript

// setTimeout(callback, ms) // ms 후 실행
const timeout = setTimeout(()=>{
    console.log("1.5초 후 실행")
}, 1500)
// setInterval(callback, ms) // ms 마다 반복

// setImmediate(callback) // 즉시 실행

// clearTimeout, clearInterval, clearImmediate
clearTimeout(timeout) // 타이머 취소
```
