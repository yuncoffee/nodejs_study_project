import { createReadStream, createWriteStream } from "fs"

const readStream = createReadStream("../lecture13/readmelong.txt", {
    highWaterMark: 16,
})
const writeStream = createWriteStream("./writeme.txt")

readStream.pipe(writeStream) // 파일복사임

// 나를 조금씩 조금씩 나눠서 전달해보거라. 나누어진 조각을 chunk라고 부른다.
// hello! My name is Chunk !
