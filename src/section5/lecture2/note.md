# express로 html 서빙하기

## express -2

### 파일 서빙

``` typescript

import express from "express"
import { join } from "path"

const app = express()

app.set("port", process.env.PORT || 3000) // 변수와 같은 개념

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html")) // 폴더 경로를 기준으로 파일 서빙
    
})
```

### 사용 중인 package module 검색

사용중인 모듈의 deps 까지 같이 보여준다

``` zsh

npm ls `moudlename`

=== npm list

npm ll - 자세한 설명

├─┬ ts-node@10.9.1
│ └── typescript@4.9.3 deduped
└── typescript@4.9.3

```
