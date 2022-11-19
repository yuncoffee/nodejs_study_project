# file_system

## 노드 내장 모듈 - 6

### readFile

노드는 파일시스템을 통해 컴퓨터의 데이터를 읽을 수 있다.

다 읽을 수 있어서 털리는거 조심해야댐

``` typescript

// 파일시스템 모듈

import { readFile } from "fs"
import { promisify } from "util"
import * as fsPromse from "fs/promises" // promises 적용된 fs module

// 파일을 읽는다

const readFilePromse = promisify(readFile)

readFile("./readme.txt", (err, data) => {
    console.log(err)
    console.log(data)
    console.log(data.toString())
})

// null
// <Buffer eb 82 98 eb a5 bc 20 ec 9d bd ec 96 b4 eb b3 b4 ea b1 b0 eb 9d bc 21>
// 나를 읽어보거라!

// promise 변환
readFilePromse("./readme.txt")
    .then((data) => {
        console.log(data)
        console.log(data.toString())
    })
    .catch((err) => {
        console.log(err)
    })

// <Buffer eb 82 98 eb a5 bc 20 ec 9d bd ec 96 b4 eb b3 b4 ea b1 b0 eb 9d bc 21>
// 나를 읽어보거라!

fsPromse
    .readFile("./readme.txt")
    .then((data) => {
        console.log(data)
        console.log(data.toString())
    })
    .catch((err) => {
        console.log(err)
    })

// <Buffer eb 82 98 eb a5 bc 20 ec 9d bd ec 96 b4 eb b3 b4 ea b1 b0 eb 9d bc 21>
// 나를 읽어보거라!

```

### writeFile

글 읽기

``` typescript

import { readFile, writeFile } from "fs/promises"

writeFile("./writeme.txt", "글을 입력합니다?")
    .then(() => {
        return readFile("./writeme.txt")
    })
    .then((data: Buffer) => {
        console.log(data.toString())
    })
    .catch((err: Error) => {
        console.error(err)
    })

// 글을 입력합니다?


```

### async & sync

fs/promises는 비동기임. 그래서 순서대로 안올 수도 있음.

일반적으로(서버에서 사용 시) 비동기가 좋다.

순서대로 데이터를 받고 싶다면? 동기 메서드를 사용하자. or 콜백으로 동기로 바꿔주자.

ex) 서버 초기화, 비밀번호 초기화 세팅 등

``` typescript
// async

import { readFile } from "fs/promises"

readFile("./readme.txt")
    .then((data) => {
        console.log("1", data.toString())
    })
    .catch((err) => {
        console.log(err)
    })

readFile("./readme.txt")
    .then((data) => {
        console.log("2", data.toString())
    })
    .catch((err) => {
        console.log(err)
    })

readFile("./readme.txt")
    .then((data) => {
        console.log("3", data.toString())
    })
    .catch((err) => {
        console.log(err)
    })

readFile("./readme.txt")
    .then((data) => {
        console.log("4", data.toString())
    })
    .catch((err) => {
        console.log(err)
    })

// 2 나를 읽어보거라!
// 1 나를 읽어보거라!
// 4 나를 읽어보거라!
// 3 나를 읽어보거라!

// 띠용

```

``` typescript
// sync

import { readFileSync } from "fs"

let data = readFileSync("./readme.txt")
console.log("1", data.toString())

data = readFileSync("./readme.txt")
console.log("2", data.toString())

data = readFileSync("./readme.txt")
console.log("3", data.toString())

data = readFileSync("./readme.txt")
console.log("4", data.toString())

// 1 나를 읽어보거라!
// 2 나를 읽어보거라!
// 3 나를 읽어보거라!
// 4 나를 읽어보거라!

```

콜백과 동기의 차이

콜백은 동시성 보장(동시에 백그라운드)이 되지만 동기는 동시성(태스크 별 백그라운드)이 보장은 안된다.

``` typescript

import { readFile } from "fs/promises"

async function syncReadFile() {
    let data = await readFile("./readme.txt")
    console.log("1", data.toString())
    data = await readFile("./readme.txt")
    console.log("2", data.toString())
    data = await readFile("./readme.txt")
    console.log("3", data.toString())
    data = await readFile("./readme.txt")
    console.log("4", data.toString())
}

syncReadFile()

// 1 나를 읽어보거라!
// 2 나를 읽어보거라!
// 3 나를 읽어보거라!
// 4 나를 읽어보거라!

```
