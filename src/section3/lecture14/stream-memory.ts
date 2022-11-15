import { createReadStream, createWriteStream } from "fs"

console.log("before", process.memoryUsage().rss)

const readStream = createReadStream("./big.txt")
const writeStream = createWriteStream("./big3.txt")

readStream.pipe(writeStream)
readStream.on("end", () => {
    console.log("stream :", process.memoryUsage().rss)
})

// before 233066496
// stream : 254197760
