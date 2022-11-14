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
