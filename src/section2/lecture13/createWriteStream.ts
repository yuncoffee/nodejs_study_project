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
