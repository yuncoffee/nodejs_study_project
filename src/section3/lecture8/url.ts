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

console.log("url.format():", format(myURL)) //deprecate
// url.format(): https://www.naver.com/

console.log(typeof format(myURL))

console.log(typeof myURL.toString())

console.log(myURL.toString())

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
