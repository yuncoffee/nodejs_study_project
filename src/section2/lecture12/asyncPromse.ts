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
