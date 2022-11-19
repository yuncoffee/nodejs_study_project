import { URL } from "url"

const myURL = new URL("https://www.naver.com/?page=3&limit=10&category=nodejs")

console.log("searchParams : ", myURL.searchParams)
// searchParams :  URLSearchParams { 'page' => '3', 'limit' => '10', 'category' => 'nodejs' } //object

console.log("searchParams.getAll() : ", myURL.searchParams.getAll("category"))
// searchParams.getAll() :  [ 'nodejs' ] // array

console.log("searchParams.get() : ", myURL.searchParams.get("limit"))
// searchParams.get() :  10
console.log(typeof myURL.searchParams.get("limit")) //string

console.log("searchParams.has() : ", myURL.searchParams.has("page"))
// searchParams.has() :  true
console.log(typeof myURL.searchParams.has("page")) //boolean

console.log("searchParams.keys() : ", myURL.searchParams.keys())
// searchParams.keys() :  URLSearchParams Iterator { 'page', 'limit', 'category' }

console.log("searchParams.values() : ", myURL.searchParams.values())
// searchParams.values() :  URLSearchParams Iterator { '3', '10', 'nodejs' }

myURL.searchParams.append("filter", "es3")
myURL.searchParams.append("filter", "es5")
console.log(myURL.searchParams.getAll("filter")) // [ 'es3', 'es5' ]

myURL.searchParams.set("filter", "es6")
console.log(myURL.searchParams.getAll("filter")) // [ 'es6' ]

myURL.searchParams.delete("filter")
console.log(myURL.searchParams.getAll("filter")) // []

console.log("searchParams.toString() : ", myURL.searchParams.toString()) // page=3&limit=10&category=nodejs
console.log("myURL.search : ", myURL.search) // ?page=3&limit=10&category=nodejs
console.log(myURL.search.split("?")[1] == myURL.searchParams.toString()) // true
