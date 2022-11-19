# npm 배포하기

## npm - 4

### npm 배포

```  zsh

npm publish

// 배포 성공 시
npm notice 
npm notice 📦  npm_deploy_test_coffeegom_1@0.0.1
npm notice === Tarball Contents === 
npm notice 54B  index.js    
npm notice 19B  note.md     
npm notice 271B package.json
npm notice === Tarball Details === 
npm notice name:          npm_deploy_test_coffeegom_1             
npm notice version:       0.0.1                                   
npm notice filename:      npm_deploy_test_coffeegom_1-0.0.1.tgz   
npm notice package size:  381 B                                   
npm notice unpacked size: 344 B                                   
npm notice shasum:        4be1e3327d4f15825afbf5adf2d01e35a1cc63fa
npm notice integrity:     sha512-3xiOih37d7GXd[...]myukbYYcnSu2Q==
npm notice total files:   3                                       
npm notice 
npm notice Publishing to https://registry.npmjs.org/
+ npm_deploy_test_coffeegom_1@0.0.1

```

검색 시 배포 결과 확인

``` zsh

npm search npm_deploy_test

NAME                      | DESCRIPTION          | AUTHOR          | DATE       | VERSION  | KEYWORDS
npm_deploy_test_coffeegom | npm deploy test hah  | =coffeegom      | 2022-11-19 | 0.0.1    |         
_1                        |                      |                 |            |          |    

```

### npm 배포 취소

배포는 72시간 전에 취소해야 취소할 수 있다.

``` zsh

// 배포 취소 성공 시
npm uninstall npm_deploy_test_coffeegom_1            

up to date, audited 1 package in 115ms

found 0 vulnerabilities

```

검색 시 배포 취소 결과 확인

``` zsh
npm search npm_deploy_test

No matches found for "npm_deploy_test"

```
