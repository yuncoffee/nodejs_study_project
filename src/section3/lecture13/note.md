# buffer, stream

## 노드 내장 모듈 - 7

### buffer

일정한 크기로 모아두는 데이터

버퍼링 - 버퍼에 데이터가 찰 떄 까지 모으는 작업

``` typescript

const buffer = Buffer.from("버퍼로 바꿔봐요")
console.log("from():", buffer)
console.log("length:", buffer.length)
console.log("toString():", buffer.toString())
// from(): <Buffer eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b4 90 ec 9a 94>
// length: 22
// toString(): 버퍼로 바꿔봐요

const array = [
    Buffer.from("띄엄 "),
    Buffer.from("띄엄 "),
    Buffer.from("띄어쓰기"),
]

const buffer2 = Buffer.concat(array) // 버퍼 합치기
console.log("concat:", buffer2.toString())
// concat: 띄엄 띄엄 띄어쓰기

const buffer3 = Buffer.alloc(5) // 빈 버퍼 생성
console.log("alloc():", buffer3)
// alloc(): <Buffer 00 00 00 00 00>


```

### stream

데이터의 흐름

일정한 크기로 나눠서 여러 번에 걸쳐 처리
버퍼를 주기적으로 전달

스트리밍 - 일정한 크기의 데이터를 지속적으로 전달하는 작업

- createReadStream 는 처음에 64kb를 읽을 수 있다

``` typescript
import { createReadStream } from "fs"

const readStream = createReadStream("./readmelong.txt", { highWaterMark: 16 })
const data: Buffer[] = []

readStream.on("data", (chunk: Buffer) => {
    data.push(chunk)
    console.log("data:", chunk, chunk.length)
})

readStream.on("end", () => {
    console.log("end:", Buffer.concat(data).toString())
})

readStream.on("error", (error: Error) => {
    console.log("error:", error)
})


```

``` typescript
import { createWriteStream } from "fs"

const writeStream = createWriteStream("./writeme2.txt")

writeStream.on("finish", () => {
    console.log("파일 쓰기 완료")
})

writeStream.write("이 글을 쓰겠음\n")
writeStream.write(" 한 번 더 쓰겠음.")
writeStream.end()

// 파일 쓰기 완료
// writeme2.txt 생성

```

stream의 장점.

- 메모리를 아낄 수 있다. (전체 파일을 잘라서 전송하므로), 메모리가 효율적이다.
- buffer는 한번에 보내므로 무조건 파일보다 메모리 사이즈가 커야댄다.
