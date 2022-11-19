import { createCipheriv, createDecipheriv } from "crypto"

const algorithm = "aes-256-cbc"

const key = "abcdabcdabcdabcdabcdabcdabcdabcd" //32byte "aes-256-cbc" 시 32byte 여야함

const iv = "1234567890123456" //"aes-256-cbc" 시 16byte 여야함

const cipher = createCipheriv(algorithm, key, iv)

let result = cipher.update("암호화할 문장", "utf-8", "base64")
result += cipher.final("base64")

console.log("암호화 :", result)
// 암호화 : gZPqfIIEPVQyCim3d2iKmxOFNOdRKGUm7T/KYoILtmY=

const decipher = createDecipheriv(algorithm, key, iv)

let result2 = decipher.update(result, "base64", "utf-8")
result2 += decipher.final("utf-8")

console.log("복호화 :", result2)
// 복호화 : 암호화할 문장
