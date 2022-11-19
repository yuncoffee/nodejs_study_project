# child_process

## 노드 내장 모듈 - 5

### exec

cmd 명령어 사용

``` typescript

import { exec } from "child_process"

const process = exec("ls") // 명령어 실행

// data
process.stdout?.on("data", function (data) {
    console.log(data.toString())
})

// error
process.stderr?.on("data", function (data) {
    console.error(data.toString())
})

// exec.ts
// note.md



```

### spawn

다른 파일(ex python) 실행 (좀 신기)
노드로 멀티 스레딩은 구리니까 활용해서 다른 언어로 활용해서 사용.

``` python
# test.py
print("hello world!")

```

``` typescript

import { spawn } from "child_process"

const process = spawn("python", ["test.py"])

// data
process.stdout?.on("data", function (data) {
    console.log(data.toString())
})

// error
process.stderr?.on("data", function (data) {
    console.error(data.toString())
})

// hello world!


```
