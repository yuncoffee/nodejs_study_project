# worker_threads

## 노드 내장 모듈 - 4

### worker_threads

- 메인으로 사용하지 않는다.
- 필요할 경우 사용하도록 권장

### prime

싱글 스레드로 소수 찾기

개 오래 걸림.

``` typescript
const min = 2
const max = 10000000

const primes = []

function generatePrimes(start: number, range: number) {
    let isPrime = true

    const end = start + range

    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primes.push(i)
        }
        isPrime = true
    }
}

console.time("prime")
generatePrimes(min, max)
console.timeEnd("prime")
console.log(primes.length)

// prime: 8.824s
// 664579


```

### prime-worker

멀티 스레드 사용하기는 어렵다.

노드로는 비추천,

설정할게 많다.

``` typescript
import { timeEnd } from "console"
import { isMainThread, parentPort, Worker, workerData } from "worker_threads"

const min = 2

let primes: number[] = []

function findPrimes(start: number, range: number) {
    let isPrime = true

    const end = start + range

    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primes.push(i)
        }
        isPrime = true
    }
}

if (isMainThread) {
    const max = 10000000
    const threadCount = 4
    const threads = new Set<Worker>()
    const range = Math.ceil((max - min) / threadCount)

    let start = min
    console.time("prime")

    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start
        threads.add(
            new Worker(__filename, {
                workerData: { start: wStart, range },
            })
        )
        start += range
    }
    threads.add(
        new Worker(__filename, {
            workerData: {
                start,
                range: range + ((max - min + 1) % threadCount),
            },
        })
    )
    for (const worker of threads) {
        worker.on("exit", () => {
            threads.delete(worker)
            if (threads.size === 0) {
                console.log(timeEnd("prime"))
                console.log(primes.length)
            }
        })
        worker.on("message", (msg) => {
            primes = primes.concat(msg)
        })
    }
} else {
    findPrimes(workerData.start, workerData.range)
    parentPort?.postMessage(primes)
}

// prime: 4.012s
// undefined
// 664579


```
