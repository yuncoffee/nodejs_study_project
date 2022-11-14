# url과 querystring

## 노드 내장 모듈 - 2

### url

주소가 생략된 경우가 있어서 WHATWG 와 노드의 주소 체계가 혼용된다

``` console

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)

```

``` typescript

import { format, parse, URL } from "url"

const myURL = new URL("https://www.naver.com/")
console.log(myURL)
// URL {
//     href: 'https://www.naver.com/',
//     origin: 'https://www.naver.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.naver.com',
//     hostname: 'www.naver.com',
//     port: '',
//     pathname: '/',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: ''
//   }

// 가져오는 방식이 WHATWG의 url 방식이다.

console.log("url.format():", format(myURL)) //deprecated
// url.format(): https://www.naver.com/

// URL 객체를 string으로 되돌림, deprecated됨
// myURL.tostring() // 결과값 같음 얘를 쓰는게 어떨까


console.log(parse("https://www.naver.com/"))
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.naver.com',
//     port: null,
//     hostname: 'www.naver.com',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/',
//     path: '/',
//     href: 'https://www.naver.com/'
//   }

// searchParams랑 port가 없다.

```

### querystring

주소에 데이터가 담겨 있는

searchParams -> qs를 객체로 변환해줌
