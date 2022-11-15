// 파일시스템 모듈

import { readFile } from "fs"
import { promisify } from "util"

import * as fsPromse from "fs/promises"

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
