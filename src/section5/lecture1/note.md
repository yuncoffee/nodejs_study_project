# package.json

## npm - 1

### npm?

Node Package Manager

- 다른 사람들이 만든 소스 코드 모아둔 저장소
- 다른 사람의 코드를 활용해서 작업 가능

### package.json?

현재 프로젝트의 대한 정보와 사용 중인 패키지에 대한 정보를 담은 파일

``` zsh
npm init // npm 프로젝트 **생성**

```

``` json

{
    "name": "nodejs_study_project", // 프로젝트 명
    "version": "1.0.0", // 프로젝트 버전
    "description": "node.js study", // 설명
    "main": "index.js", // 첫 실행 파일
    // 스크립트 명령어
    "scripts": { 
        "test": "echo \"Error: no test specified\" && exit 1", 
        "start": "nodemon server.ts",
        "dev": "nodemon --exec node --loader ts-node/esm server.ts"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/yuncoffee/nodejs_study_project.git"
    },
    "author": "", // 작성자
    "license": "ISC", // 라이센스
    // 사용 중인 개발용 패키지 -D 설치
    "devDependencies": {
        "@typescript-eslint/eslint-plugin": "^5.42.1",
        "@typescript-eslint/parser": "^5.42.1",
        "eslint": "^8.27.0",
        "eslint-plugin-react": "^7.31.10",
        "nodemon": "^2.0.20",
        "ts-node": "^10.9.1",
        "typescript": "^4.8.4",
        "webpack-cli": "^4.10.0"
    },
    // 사용 중인 패키지 
    "dependencies": {
        "axios": "^1.1.3" 
    }
}

```
