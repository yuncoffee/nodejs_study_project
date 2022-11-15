import { readFileSync, writeFileSync } from "fs"

console.log("before", process.memoryUsage().rss)

const data1 = readFileSync("./big.txt")
writeFileSync("./big2.txt", data1)
console.log("buffer : ", process.memoryUsage().rss)

// before 231059456
// buffer :  568479744
