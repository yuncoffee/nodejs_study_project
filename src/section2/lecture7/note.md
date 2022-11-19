# os와 path

## 노드 내장 모듈 - 1

### os

브라우저와 달리 노드는 os 모듈에 정보가 담겨 있어 정보를 가져올 수 있음

``` typescript

import os from "os" // require("os") 대체

console.log("운영체제 정보---------")

console.log("os.arch() : ", os.arch())
console.log("os.platform() : ", os.platform())
console.log("os.type() : ", os.type())
console.log("os.uptime() : ", os.uptime())
console.log("os.hostname() : ", os.hostname())
console.log("os.release() : ", os.release())

console.log("운영체제 경로---------")

console.log("os.homedir() : ", os.homedir())
console.log("os.tmpdir() : ", os.tmpdir())

console.log("운영체제 경로---------")

console.log("os.cpus() : ", os.cpus())
console.log("os.cpus().length : ", os.cpus().length)

console.log("메모리 경로---------")
console.log("os.freemem() : ", os.freemem())
console.log("os.totalmem() : ", os.totalmem())

```

``` console
운영체제 정보---------
os.arch() :  x64
os.platform() :  darwin
os.type() :  Darwin
os.uptime() :  182070
os.hostname() :  coffeegom.local
os.release() :  20.6.0
운영체제 경로---------
os.homedir() :  /Users/coffeegom
os.tmpdir() :  /var/folders/5y/xxpgvglx3qd46wsmcwyr_vq40000gn/T
운영체제 경로---------
os.cpus() :  [
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 4351910, nice: 0, sys: 2796950, idle: 37309850, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34530, nice: 0, sys: 57910, idle: 44356190, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 3611070, nice: 0, sys: 1981200, idle: 38856390, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 33750, nice: 0, sys: 50870, idle: 44364010, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 2689540, nice: 0, sys: 1383350, idle: 40375770, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34040, nice: 0, sys: 45780, idle: 44368810, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 2223060, nice: 0, sys: 1126210, idle: 41099390, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34610, nice: 0, sys: 41900, idle: 44372120, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 1783200, nice: 0, sys: 894820, idle: 41770640, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34280, nice: 0, sys: 38480, idle: 44375870, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 1428760, nice: 0, sys: 695810, idle: 42324080, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34050, nice: 0, sys: 35410, idle: 44379160, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 1094180, nice: 0, sys: 514140, idle: 42840320, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 33190, nice: 0, sys: 32100, idle: 44383330, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 733670, nice: 0, sys: 311000, idle: 43403970, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 32170, nice: 0, sys: 28410, idle: 44388030, irq: 0 }
  }
]
os.cpus().length :  16
메모리 경로---------
os.freemem() :  173637632
os.totalmem() :  17179869184
```

`os.cpus()` 자주사용

노드가 기본적으로 싱글스레드니까 서버를 여러개 띄울 때 활용

cpu의 스레드와 node의 스레드는 좀 다름;

하드웨어의 스레드 갯수가 노드에서 코어 갯수

### path

경로처리할 떄 사용
운영체제마다 경로처리가 다른데 path 모듈이 알아서 해줌 개꿀

``` typescript

import path from "path"
import { addEmitHelper } from "typescript"

const fileName = __filename

console.log("path.sep : ", path.sep)
console.log("path.delimiter : ", path.delimiter)
console.log("------------------")
console.log("path.dirname() : ", path.dirname(fileName)) // 위치
console.log("path.extname() : ", path.extname(fileName)) // 확장자
console.log("path.basename() : ", path.basename(fileName)) // 파일명
console.log(
    "path.basename - extname() : ",
    path.basename(fileName, path.extname(fileName))
) // 파일명 중 확장자 뺀 거
console.log("------------------")
console.log("path.parse() : ", path.parse(fileName)) // 주요 정보 객체
console.log(
    "path.format() : ",
    path.format({
        root: "/",
        dir: "/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7",
        base: "path.ts",
        ext: ".ts",
        name: "path",
    })
) // 주요 정보로 path 변환
console.log(
    "path.normalize() : ",
    path.normalize(
        "/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7/path.ts"
    )
) // ??
console.log("------------------")
console.log("path.isAbsolute(/Users) : ", path.isAbsolute("/Users")) // 절대경로확인
console.log("------------------")
console.log(
    "path.relative() : ",
    path.relative(
        "/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7/path.ts",
        "/Users"
    )
) // path끼리의 관계 결과

console.log("path.join() : ", path.join(__dirname, "..", "..", "/path")) // path 경로 결합? (절대경로 무시)
console.log("path.resolve() : ", path.resolve(__dirname, "..", "..", "path")) // path 경로 결합 (절대경로 우선)

```

``` console

path.sep :  /
path.delimiter :  :
------------------
path.dirname() :  /Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7
path.extname() :  .ts
path.basename() :  path.ts
path.basename - extname() :  path
------------------
path.parse() :  {
  root: '/',
  dir: '/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7',
  base: 'path.ts',
  ext: '.ts',
  name: 'path'
}
path.format() :  /Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7/path.ts
path.normalize() :  /Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7/path.ts
------------------
path.isAbsolute(/Users) :  true
------------------
path.relative() :  ../../../../../../../..
path.join() :  /Users/coffeegom/Desktop/project/nodejs_study_project/src/path
path.resolve() :  /path

```
