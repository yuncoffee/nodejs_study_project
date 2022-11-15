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
