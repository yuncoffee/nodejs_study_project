# 스레드풀과 커스텀 이벤트

## 노드 내장 모듈 - 9

### threadpool

기본 4개씩 돌리긴 함.

스레드를 더 돌리고 싶으면?

`UV_THREADPOOL_SIZE=n` 명령어 ㄲ -> n개로 스레드풀 갯수 변경

``` typescript

import { pbkdf2 } from "crypto"
import process from "process"

const pass = "pass"

const salt = "salt"

const start = Date.now()

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("1", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("2", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("3", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("4", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("5", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("6", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("7", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("8", Date.now() - start)
})

// process.env.UV_THREADPOOL_SIZE = `4` (default)

// 3 2009
// 1 2033
// 4 2039
// 2 2075

// 5 4459
// 6 4477
// 7 4544
// 8 4579

// process.env.UV_THREADPOOL_SIZE = `8`

// 3 1834
// 2 1851
// 7 1853
// 6 1896
// 1 1907
// 8 1973
// 4 1973
// 5 1988


// process.env.UV_THREADPOOL_SIZE = `2`

// 1 1627
// 2 1650

// 3 3308
// 4 3309

// 5 4955
// 6 4983

// 7 6650
// 8 6673

```

### 커스텀 이벤트

이벤트 등록 및 호출할 수 이씀
상태변화 등에서 활용하면 좋겠다.

``` typescript

import EventEmitter from "events"

const myEvent = new EventEmitter()

myEvent.addListener("event1", () => {
    console.log("event1 실행")
})

myEvent.on("event2", () => {
    console.log("event2 실행")
})

myEvent.on("event2", () => {
    console.log("event2 추가 실행")
})

myEvent.once("event3", () => {
    console.log("event3 실행")
})

myEvent.emit("event1")
myEvent.emit("event2")
myEvent.emit("event3")
myEvent.emit("event3") // 실행 안됨

myEvent.on("event4", () => {
    console.log("event3 실행")
})

myEvent.removeAllListeners("event4")

myEvent.emit("event4") // 실행안됨

const listener = () => {
    console.log("event5 실행")
}

myEvent.on("event5", listener)
myEvent.removeListener("event5", listener)
myEvent.emit("event5") // 실행안됨

// event1 실행
// event2 실행
// event2 추가 실행
// event3 실행


```
