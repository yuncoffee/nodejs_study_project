const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

// test함수 그룹화 descibe
// 가짜를 만드는 행위를 모킹
describe('isLoggedIn', () => {  
    const res = { // res 가짜 객체 만들기
        status: jest.fn(() => res ),
        send: jest.fn(),
    }; 
    const next = jest.fn(); // next라는 가짜 함수 만들기
    test('로그인이되어 있으면 isLoggedIn이 next를 호출해야 함', ()=> {
        const req = { // req 가짜 객체 만들기
            isAuthenticated: jest.fn(() => true), // true를 리턴하게 가짜 함수를 만들어 줌.
        };
        isLoggedIn(req, res, next); // 가짜로 만든애들 넣어서 한번 실행해봄. => 가짜 next가 호출
        expect(next).toBeCalledTimes(1); // 한번 호출됬다는걸 체크
    });
    test('로그인이되어 있지 않으면 isLoggedIn 이 에러를 응답해야 함', ()=> {
        const req = { // req 가짜 객체 만들기
            isAuthenticated: jest.fn(() => false), // false를 리턴하게 가짜 함수를 만들어 줌.
        };
        isLoggedIn(req, res, next);
        expect(res.status).toBeCalledWith(403); // status 는 403으로 호출되어야 하고
        expect(res.send).toBeCalledWith('로그인 필요'); // send 는 '로그인 필요'를 호출해야 함.
    });
});

describe('isNotLoggedIn', () => {
    const res = { // res 가짜 객체 만들기
        status: jest.fn(() => res ),
        send: jest.fn(),
        redirect: jest.fn(),
    }; 
    const next = jest.fn(); // next라는 가짜 함수 만들기
    test('로그인이되어 있으면 isNotLoggedIn이 에러를 응답해야 함', ()=> {
        const req = { // req 가짜 객체 만들기
            isAuthenticated: jest.fn(() => true), // true를 리턴하게 가짜 함수를 만들어 줌.
        };
        const message = encodeURIComponent('로그인한 상태입니다.');
        isNotLoggedIn(req, res, next);
        expect(res.redirect).toBeCalledWith(`/?error=${message}`);
    });
    test('로그인이되어 있지 않으면 isNotLoggedIn이 next를 호출해야 함', ()=> {
        const req = { // req 가짜 객체 만들기
            isAuthenticated: jest.fn(() => false), // false를 리턴하게 가짜 함수를 만들어 줌.
        };
        isNotLoggedIn(req, res, next);
        expect(next).toBeCalledTimes(1);
    });
});