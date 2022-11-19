import path from "path"
import { addEmitHelper } from "typescript"

const fileName = __filename

console.log("path.sep : ", path.sep)
console.log("path.delimiter : ", path.delimiter)
console.log("------------------")
console.log("path.dirname() : ", path.dirname(fileName)) // 위치
console.log("path.extname() : ", path.extname(fileName)) // 확장자
console.log("path.basename() : ", path.basename(fileName)) // 파일명
console.log(
    "path.b`asename - extname() : ",
    path.basename(fileName, path.extname(fileName))
) // 파일명 중 확장자 뺀 거
console.log("------------------")
console.log("path.parse() : ", path.parse(fileName)) // 주요 정보 객체
console.log(
    "path.format() : ",
    path.format({
        root: "/",
        dir: "/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7",
        base: "path.ts",
        ext: ".ts",
        name: "path",
    })
) // 주요 정보로 path 변환
console.log(
    "path.normalize() : ",
    path.normalize(
        "/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7/path.ts"
    )
) // 경로 이상하게 쓴거 정리해줌
console.log("------------------")
console.log("path.isAbsolute(/Users) : ", path.isAbsolute("/Users")) // 절대경로확인
console.log("------------------")
console.log(
    "path.relative() : ",
    path.relative(
        "/Users/coffeegom/Desktop/project/nodejs_study_project/src/section3/lecture7/path.ts",
        "/Users"
    )
) // path끼리의 관계 결과

console.log("path.join() : ", path.join(__dirname, "..", "..", "/path")) // path 경로 결합? (절대경로 무시)
console.log("path.resolve() : ", path.resolve(__dirname, "..", "..", "/path")) // path 경로 결합 (절대경로 우선)
