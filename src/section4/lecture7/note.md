# cluster

## server - 7

### cluster

싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 도와주는 모듈

- 포트를 공유하는 노드 프로세스를 여러 개 둘 수 있음
- 요청이 많이 들어왔을 경우 병렬로 실행된 서버의 개수만큼 요청 분산
- 성능 개선효과
- 단점 : 컴퓨터 자원(메모리, 세션 등) 공유 불가
- Redis 등 별도 서버로 해결

``` typescript

import cluster from "cluster"
import http from "http"
import os from "os"

const numCPUs = os.cpus().length

if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`)
    // CPU 개수만큼 워커를 생산
    console.log(numCPUs)
    for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork()
    }
    // 워커가 종료되었을 때
    cluster.on("exit", (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`)
        console.log("code", code, "signal", signal)
        cluster.fork()
    })
} else {
    // 워커들이 포트에서 대기
    http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.write("<h1>Hello Node!</h1>")
        res.end("<p>Hello Cluster!</p>")
        setTimeout(() => {
            // 워커 존재를 확인하기 위해 1초마다 강제 종료
            process.exit(1)
        }, 1000)
    }).listen(8086)

    console.log(`${process.pid}번 워커 실행`)
}
// 서버 시작 시 
// 마스터 프로세스 아이디: 11631
// 16
// 11634번 워커 실행
// 11636번 워커 실행
// 11635번 워커 실행
// 11641번 워커 실행
// 11637번 워커 실행
// 11640번 워커 실행
// 11638번 워커 실행
// 11642번 워커 실행
// 11643번 워커 실행
// 11648번 워커 실행
// 11645번 워커 실행
// 11646번 워커 실행
// 11639번 워커 실행
// 11647번 워커 실행
// 11644번 워커 실행
// 11649번 워커 실행

// 서버 종료 시 
// 11747번 워커가 종료되었습니다.
// code 1 signal null
// 11779번 워커 실행

```
