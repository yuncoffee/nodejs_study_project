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
