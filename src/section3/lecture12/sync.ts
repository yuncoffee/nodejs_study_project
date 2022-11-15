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
