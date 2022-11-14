# crypto와 util

## 노드 내장 모듈 - 3

### crypto (단방향 암호화)

- 암호화 : 평문을 암호로 만듬
- 복호화 : 암호를 평문으로 해독

해시 기법. 평문 ->(쉬움) 해시 ->(어려움) 평문

평문을 해시화할 경우 평문과 해시의 일치함은 알 수 있다. 좀 안전함
해시를 평문으로 바꾸는 건 (몇 십 몇백년 걸려서 잘 안함)

md5, sha1은 취약점이 발견되었다고 한다.

sha512를 쓰자. 뚫리면 다른거 쓰자.

여러 알고리즘 중 선택해서 하자

``` typescript

import { createHash } from "crypto"

console.log(
    "base64 : ",
    createHash("sha256").update("패스워드").digest("base64")
)
// base64 :  aYASeLnO9wEgyQIrEgCdnmmis/TTdwQnnhDdUIgsoXk=

console.log("hex : ", createHash("sha256").update("패스워드").digest("hex"))
// hex :  69801278b9cef70120c9022b12009d9e69a2b3f4d37704279e10dd50882ca179

console.log(
    "base64 : ",
    createHash("sha256").update("다른 패스워드").digest("base64")
)
// base64 :  Rh4xvXNls3rxfUNDFx8N5cZI52xgWLZ+ng6KbqXaubk=

```

### cipher (대칭형 암호화)

같은 키 사용을 통해 암호를 복호화 가능

근데 키 털리면 암호도 털림 ㅋ 그래서 키 관리 잘해야된다. 콘솔, 로그 등 조심
프론트와 서버간 통신에서는 사용 못함, 프론트가 공개적이므로

강의자는 node 모듈은 너무 복잡해서 crypto-js를 추천한다고함

key 관리를 어떻게 해야하는가... KMS(Key Management Service), KeyVolt 등 활용..

키 관리는 어려워서 관련해서 현업에서도 고민이 많다

``` typescript
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

```

잼ㅆ다 ㅎ

### util

각종 편의 기능을 모아둔 모듈

deprecated와 promisify가 자주 쓰임

- deprecated : 쓰지말라고 안내줄 때(더 좋은 기능이 나옴, 필요없는 기능임)
- promisify : 콜백을 promise로 바꿀 때

deprecated -> 함부로 만들어놓은 기존 함수 삭제하면 안되므로 (예전 사용하던 사람들이 못 씀)
promisify -> async/await를 사용하게 바꿀수 있음 개꿀
반대로 callbackify도 있음 (쓰는 사람 한명도 못봤댄다.)
단 콜백이 error, data 형식이어야한다.

``` typescript

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

```
