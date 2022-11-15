import { pbkdf2 } from "crypto"
import process from "process"

process.env.UV_THREADPOOL_SIZE = `4`

const pass = "pass"

const salt = "salt"

const start = Date.now()

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("1", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("2", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("3", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("4", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("5", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("6", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("7", Date.now() - start)
})

pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
    console.log("8", Date.now() - start)
})

// 3 2009
// 1 2033
// 4 2039
// 2 2075

// 5 4459
// 6 4477
// 7 4544
// 8 4579
