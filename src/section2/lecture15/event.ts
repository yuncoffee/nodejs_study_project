import EventEmitter from "events"

const myEvent = new EventEmitter()

myEvent.addListener("event1", () => {
    console.log("event1 실행")
})

myEvent.on("event2", () => {
    console.log("event2 실행")
})

myEvent.on("event2", () => {
    console.log("event2 추가 실행")
})

myEvent.once("event3", () => {
    console.log("event3 실행")
})

myEvent.emit("event1")
myEvent.emit("event2")
myEvent.emit("event3")
myEvent.emit("event3") // 실행 안됨

myEvent.on("event4", () => {
    console.log("event3 실행")
})

myEvent.removeAllListeners("event4")

myEvent.emit("event4") // 실행안됨

const listener = () => {
    console.log("event5 실행")
}

myEvent.on("event5", listener)
myEvent.removeListener("event5", listener)
myEvent.emit("event5") // 실행안됨

// event1 실행
// event2 실행
// event2 추가 실행
// event3 실행
