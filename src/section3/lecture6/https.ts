import { readFileSync } from "fs"
import { createServer } from "https"

createServer(
    {
        //https 인증 받으면 받는 값들
        cert: readFileSync("도메인 인증서 경로"),
        key: readFileSync("도메인 비밀키 경로"),
        ca: [
            readFileSync("상위 인증서 경로"),
            readFileSync("상위 인증서 경로"),
        ],
    },
    (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.write("<h1>Hello Node!</h1>")
        res.end("<p>Hello Server!</p>")
    }
    // https 포트는 443
).listen(443, () => {
    console.log("443번 포트에서 서버 대기 중입니다!")
})

// 안증서 못 읽음
// Error: ENOENT: no such file or directory, open '도메인 인증서 경로'
//     at Object.openSync (node:fs:599:3)
//     at readFileSync (node:fs:467:35)
//     at Object.<anonymous> (/Users/coffeegom/Desktop/project/nodejs_study_project/src/section4/lecture6/https.ts:7:27)
//     at Module._compile (node:internal/modules/cjs/loader:1112:14)
//     at Module.m._compile (/usr/local/lib/node_modules/ts-node/src/index.ts:1618:23)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1166:10)
//     at Object.require.extensions.<computed> [as .ts] (/usr/local/lib/node_modules/ts-node/src/index.ts:1621:12)
//     at Module.load (node:internal/modules/cjs/loader:988:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:834:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
//   errno: -2,
//   syscall: 'open',
//   code: 'ENOENT',
//   path: '도메인 인증서 경로'
// }
