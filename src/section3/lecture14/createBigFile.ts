import { createWriteStream } from "fs"

const file = createWriteStream("./big.txt")

for (let i = 0; i <= 10_000_000; i++) {
    file.write("매우 매우 큰 파일 생성할 것.")
}

file.end()
