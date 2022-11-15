import { isMainThread, parentPort, Worker, workerData } from "worker_threads"

// if (isMainThread) {
//     // mainHtreads
//     const worker = new Worker(__filename)

//     worker.on("message", (value) => {
//         console.log("from worker", value)
//     })
//     worker.on("exit", () => console.log("worker end"))
//     worker.postMessage("ping")
// } else {
//     //workerthreads
//     parentPort?.on("message", (value) => {
//         console.log("from Parents", value)
//         parentPort?.postMessage("pong")
//         parentPort?.close()
//     })
// }

// from worker pong
// from Parents ping
// worker end

if (isMainThread) {
    const threads = new Set<Worker>()
    threads.add(
        new Worker(__filename, {
            workerData: { start: 1 },
        })
    )
    threads.add(
        new Worker(__filename, {
            workerData: { start: 2 },
        })
    )

    for (const worker of threads) {
        worker.on("message", (value) => {
            console.log("from worker", value)
        })
        worker.on("exit", () => {
            threads.delete(worker)
            if (threads.size === 0) {
                console.log("worker end")
            }
        })
    }
} else {
    const data = workerData
    parentPort?.postMessage(data.start + 100) // 받은데이터 + 계산(함수)
}

// from worker 102
// from worker 101
// worker end
