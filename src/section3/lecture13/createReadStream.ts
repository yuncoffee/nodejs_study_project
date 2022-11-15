import { createReadStream } from "fs"

const readStream = createReadStream("./readmelong.txt", { highWaterMark: 16 })
const data: Buffer[] = []

readStream.on("data", (chunk: Buffer) => {
    data.push(chunk)
    console.log("data:", chunk, chunk.length)
})

readStream.on("end", () => {
    console.log("end:", Buffer.concat(data).toString())
})

readStream.on("error", (error: Error) => {
    console.log("error:", error)
})
