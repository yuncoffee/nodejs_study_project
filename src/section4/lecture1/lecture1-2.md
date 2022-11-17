# Package.json

※ Node Package Manager
    - 노드의 패키지 매니저
    - 다른 사람들이 만든 소스 코드들을 모아둔 저장소
    - 남의 코드를 사용하여 프로그래밍 가능
    - 이미 있는 기능을 다시 구현할 필요가 없어 효율적
    - 오픈 소스 생태계를 구성중
    - 패키지: npm에 업로드된 노드 모듈
    - 모듈이 다른 모듈을 사용할 수 있듯 패키지도 다른 패키지를 사용할 수 있음
    - 의존 관계라 부름



package.json 만드는 법
npm init or .json 파일을 만들어도 가능.

ex)
Package.json에
test를 실행

npm run test
"echo \"Error: no test specified\" && exit 1"
"Error: no test specified\을 콘솔에 찍어주고 에러를 발생해서 종료시키는 코드

"xxx" : 이걸로 추가 하나봄.

"npm run XXX"

패키지 다운 방법.

- npm i XXXXXXX

== "dependencies" 로 패키지명과 버전이 추가됨.

- npm i -D XXXXX

== "devDependencies"로 패키지명과 버전이 추가됨.


devDependencies 개발할 때만 쓰는 패키지

ㅊ 배포할때 까지 쭉 쓰는 패키지들.


패키지를 받으면, 그 패키지가 받아놨던 패키지까지 싹다 받아짐. 어마어마하게 

배포할 때 node_modules 지워서 배포함.
package.json, package-lock,json만 갖고있음.

npm i 
하면 지웠던거 다시 깔림.

배포하고 나서 npm i 를 해서 그 서버에서 설치하도록.

인터넷 안되는곳은 node_modules 파일을 직접 복사해서 넣어야댐.


npm i -g rimraf
-g 
== 전역설치하면 Dependencies 기록이 안됨.

대신 
npm i rirmraf로 설치하고

npx rimraf node_modules 로 사용가능.

# package-lock.json

    - package-lock는 깔았던 dependencies의 dependencies의 패키지, 버젼이 들어가 있음.
    여기엔 특별히 건들게 없음.

# SemVer 버저닝

    - 노드 생태계에는 패키지 버전들은 다 세자리로 만들어 놓음
    - 노드 패키지 버전은 SemVer(유의적 버저닝) 방식을 따름
    - Major(주 버전), Minor(부 버전), Patch(수 버전)

    - 노드에서는 배포를 할 때 항상 버전을 올려줘 함.    ===== 치명적임.
    - 메이저는 하위 버전과 호환되지 않는 수정 사항이 생겼을 때 
    - 마이너는 하위 버전과 호환되는 수정 사항이 생겼을 때
    - 패치는 기능에 버그 해결했을 때 올림      

# 버전 ^? ~?

    ex)
    - ^1.1.1 : 첫 자리 메이저 버젼은 무조건 1이여야함
    - ~1.1.1 : 두번째 자리 마이너 까진 무조건 1.1이여야함
    - 1.1.1 : 세번쨰 자리까지 다 같아야함.
    - >=, <=,>,< : 이상 이하 초과 미만 ======== 거의 안쓰임.
    - @latest 는 최신을 의미
    - @next로 가장 최신 배포판 사용 가능 (불안정)
    - 알파/베타/RC 버전이 존재할수도 있음(1.1.1-alpha.0, 2.0.0-beta.1, 2.0.0-rc.0) === RC 는 출시 직전 점검하는 단계 / 한정되어 있는 버전숫자들을 조금이라도 더 활용하기 위해서.
    == 보통은 ^만 사용됨.

    ★ 버전은 항상 중요...!

 ex) npm i express@latest
     npm i express@3
     npm i express@next 출시되기전 테스트 버전












