// 노드 내장 모듈 - 1
// os와 path

import os from "os" // require("os") 대체

console.log("운영체제 정보---------")

console.log("os.arch() : ", os.arch())
console.log("os.platform() : ", os.platform())
console.log("os.type() : ", os.type())
console.log("os.uptime() : ", os.uptime())
console.log("os.hostname() : ", os.hostname())
console.log("os.release() : ", os.release())

console.log("운영체제 경로---------")

console.log("os.homedir() : ", os.homedir())
console.log("os.tmpdir() : ", os.tmpdir())

console.log("운영체제 경로---------")

console.log("os.cpus() : ", os.cpus()) // 자주사용
console.log("os.cpus().length : ", os.cpus().length)

console.log("메모리 경로---------")
console.log("os.freemem() : ", os.freemem())
console.log("os.totalmem() : ", os.totalmem())
