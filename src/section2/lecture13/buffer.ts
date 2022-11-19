const buffer = Buffer.from("버퍼로 바꿔봐요")
console.log("from():", buffer)
console.log("length:", buffer.length)
console.log("toString():", buffer.toString())
// from(): <Buffer eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b4 90 ec 9a 94>
// length: 22
// toString(): 버퍼로 바꿔봐요

const array = [
    Buffer.from("띄엄 "),
    Buffer.from("띄엄 "),
    Buffer.from("띄어쓰기"),
]

const buffer2 = Buffer.concat(array) // 버퍼 합치기
console.log("concat:", buffer2.toString())
// concat: 띄엄 띄엄 띄어쓰기

const buffer3 = Buffer.alloc(5) // 빈 버퍼 생성
console.log("alloc():", buffer3)
// alloc(): <Buffer 00 00 00 00 00>
