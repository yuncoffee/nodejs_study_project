import { exec } from "child_process"

const process = exec("ls") // 명령어 실행

// data
process.stdout?.on("data", function (data) {
    console.log(data.toString())
})

// error
process.stderr?.on("data", function (data) {
    console.error(data.toString())
})

// exec.ts
// note.md
