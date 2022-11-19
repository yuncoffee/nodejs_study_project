import { randomBytes } from "crypto"
import { deprecate, promisify } from "util"

const dontUseMe = deprecate((a: number, b: number) => {
    console.log(a + b)
}, "dontUseMe 쓰지마라 좀..")

console.log(dontUseMe(2, 6))

// 8
// undefined
// (node:4953) DeprecationWarning: dontUseMe 쓰지마라 좀..
// (Use `node --trace-deprecation ...` to show where the warning was created)

const randomBytesPromse = promisify(randomBytes)

randomBytesPromse(64)
    .then((buf) => {
        console.log(buf.toString("base64"))
    })
    .catch((error) => console.log("error :", error))

// 4WkeCNNw9dUZJz3mpjSVq0+QkVz4k/sE4GJ+wOjpYEEKYh5CC00gRbryxY5FgynHcQf9+7bo2Qhx+7so9M8PSw==
