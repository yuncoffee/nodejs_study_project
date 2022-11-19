# node_modules와 npx, SemVer

## npm - 2

### node_modules

패키지 의존성에 필요한 파일들 저장

배포 전 제거하고 배포 된 서버에서 설치하게 하는 경우가 많다.

### 명령어 설치

global 설치, package.json에 미기록

``` zsh
    npm i -g `module`
```

개발용 설치 package.json에 기록

``` zsh
    npm i -D `module`
```

npx 설치 - global로 사용, package.json에 기록

``` zsh
    npx `module`
```

### package-lock.json

버전 문제 처리를 위해 사용, 일반적으로 잘 건드리지는 않는다.

### SemVer(유의적 버저닝) 버저닝

Major(주 버전), Minor(부 버전), Patch(수 버전)

``` SemVer
    1.0.7
    1 : 하위 호환이 변경되지 않는 변경 사항
    0 : 하위 호환이 되는 변경 사항
    7 : 간단한 버그 수정
```

### 버전 기호 사용하기

버전 관리를 잘 해야된다. 아니면 앱이 망가질 수 있다.

``` zsh
^1.3.5 : 메이저 버전 고정

~1.3.5 : 부 버전까지 고정

1.3.5 : 버전 고정

> , <, > = , < = , = 초과, 미만, 이상, 이하, 동일 

@latest : 최신 버전의 패키지 설치

@next : 최신 배포판 (안정되지 않은 알파나 베타 버전의 패키지 설치 가능) ex) 1.1.1-alpha.0, 2.0.0-beta.1, 2.0.0-rc.0

```
