# pipe와 스트림 메모리 효율 확인

## 노드 내장 모듈 - 8

### pipe

스트림끼리 연결하는 것을 `piping`이라함.

- 파일 복사할 때 사용 많이했음.
- 압축할 때도 사용

``` typescript

import { createReadStream, createWriteStream } from "fs"

const readStream = createReadStream("../lecture13/readmelong.txt", {
    highWaterMark: 16,
})
const writeStream = createWriteStream("./writeme.txt")

readStream.pipe(writeStream) // 파일복사임

// 나를 조금씩 조금씩 나눠서 전달해보거라. 나누어진 조각을 chunk라고 부른다.
// hello! My name is Chunk !

```

### 버퍼와 스트림 비교

- 파일 생성 시 vscode가 비명을 지르며 죽었따 😇
- 스트림이 메모리를 적게 먹긴한다
  
``` typescript

import { createWriteStream } from "fs"

const file = createWriteStream("./big.txt")

for (let i = 0; i <= 10_000_000; i++) {
    file.write("매우 매우 큰 파일 생성할 것.")
}

file.end()


```

``` typescript
// buffer

import { readFileSync, writeFileSync } from "fs"

console.log("before", process.memoryUsage().rss)

const data1 = readFileSync("./big.txt")
writeFileSync("./big2.txt", data1)
console.log("buffer : ", process.memoryUsage().rss)

// before 231059456
// buffer :  568479744

```

``` typescript
// stream

import { createReadStream, createWriteStream } from "fs"

console.log("before", process.memoryUsage().rss)

const readStream = createReadStream("./big.txt")
const writeStream = createWriteStream("./big3.txt")

readStream.pipe(writeStream)
readStream.on("end", () => {
    console.log("stream :", process.memoryUsage().rss)
})

// before 233066496
// stream : 254197760


```

### 그 밖의 fs 메서드들

많다. 사용하면서 배우는게 좋을 것 같음.
공식문서 참조

[공식문서](https://nodejs.org/docs/latest-v17.x/api/fs.html)
