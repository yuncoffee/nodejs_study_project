import { spawn } from "child_process"

const process = spawn("python", ["test.py"])

// data
process.stdout?.on("data", function (data) {
    console.log(data.toString())
})

// error
process.stderr?.on("data", function (data) {
    console.error(data.toString())
})

// hello world!
