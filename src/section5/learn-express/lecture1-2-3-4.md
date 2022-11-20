# express 서버 사용해보기

※ http 모듈로 웹 서버를 만들 때 코드가 보기 좋지 않고, 확장성도 떨어짐.
    - 프레임워크로 해결
    - 대표적인 것이 Express(익스프레스), Koa(코아), Hapi(하피)
    - 코드 관리도 용이하고 편의성이 많이 높아짐

    == 다운로드 많은 것을 사용하자..... 잘 쓰인다는 소리...


※ nodemon
    - nodemon으로 서버코드 실행하면 실행중에 서버 코드가 수정되면 알아서 재시작함.



# express로 html 서빙하기

    npm is [패키지명] === 이 패키지를 쓰고 있는지 확인,
    디펜더시들 안에 있는 패키지명 찾을때도 사용.

    html 수정이 되면, get 요청으로 그때마다 index.html 파일을 체크해서 사용하기 때문에 요청할때 마다 반영됨.
    nodemon의 설정으로도 가능하긴 함. 

    app.js는 소스코드 변경해도 노드에서 한번 캐시하고 있는 require cache 안에 들어있는 캐시파일을 계속 쓰고 있기때문에 안바뀜
    require cache를 직접 지워주기 전까진 안바뀜 
    require cache를 지우는게 위험해서 서버에서 껏다가 재시작하는게 방법을 씀 =>?메모리가 날아가는효과 




# 미들웨어 특성 이해하기.

    - 미들웨어 get 요청 하나 안에 send를 여러개 하면 에러남. json 포함.
    - 순서는 서버 여는 셋팅 => 공통 send => 라우터 쫘르륵 => 범위넓은 공통 라우터는 마지막에 => 에러 처리 미들웨어

# next()

    - 안에 인수가 없으면 넘어가지만.
    - 안에 인수가 들어가면 ex) error가 들어가면 미들웨어 생략하고 바로 에러 미들웨어로 넘어감. try catch로 에러

    next('route') 하게되면 get 안에 있는 이 다음에 있는 함수는생략하고 다음 미들웨어로 넘어감. 같은 주소 미들웨어일때
    - if문안에 쓰면 유용.



# app.use(morgan(???));

    - 요청과 응답을 기록하는 라우터.
    - 개발할때는 dev
    - 배포시 combined = 좀 더 자세하게 기록이 됨. ip, 브라우저, 시간 알수있음


# cookieparser
    -
    req.cookies // { mycookie : 'test'}
    req.signedCookies; // 암호화
    // 'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    res.cookie('name', encodeURIComponent(name), {
        expires: new Date(),
        httpOnly: true,
        path: '/', 
    })
    res.clearcookie('name', encodeURIComponent(name), {
        httpOnly: true,
        path: '/', 
    })


모든 미들웨어는 내부적으로 next를 실행.
static은 거기서 끝내버림. 찾으면.
static 위치가 중요함 대부분 파싱들 위에 다가함.


# session
    -개인의 저장공간을 만들어 주는거.

미들웨어 데이터 전송할때는
req.data = XXX; 