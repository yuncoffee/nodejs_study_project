# MySQL 설치하기

    ※ 데이터베이스란
        => 지금까지는 데이터를 서버 메모리에 저장했음
            - 서버를 재시작하면 데이터도 사라져버림 -> 영구적으로 저장할 공간이 필요
        => MySQL 관계형 데이터 베이스 사용
            - 데이터베이스 : 관련성을 가지며 중복이 없는 데이터들의 집함
            - DBMS : 데이터베이스를 관리하는 시스템
            - RDBMS : 관계형 데이터베이스를 관리하는 시스테메
            - 서버의 하드 디스크나 SSD 등의 저장 매체에 데이터를 저장
            - 서버 종료 여부와 상관 없이 데이터를 계속 사용할 수 있음
            - 여러 사람이 동시에 접근할 수 있고, 권한을 따로 줄 수 있음     

# 테이블 만들기

    ※ 데이터베이스 생성하기
        => 콘솔에서 MySQL 프롬프트에 접속
            - CREATE SCHEMA nodejs;로 nodejs 데이터베이스 생성
            - use nodejs;로 생성한 데이터베이스 선택

            mysql> CREATE SCHEMA `nodejs` DEFAULT CHARACTER SET utf8;
                    Query OK, 1 row affected, 1 warning (0.00 sec)
            mysql> use nodejs;
                    Database changed
        => MySQL 프롬프트에서 테이블 생성
            - CREATE TABLE[데이터베이스명.테이블명]으로 테이블 생성
            - 사용자 정보를 저장하는 테이블

            mysql> CREATE TABLE nodejs.comments (
            -> id INT NOT NULL AUTO_INCREMENT,
            -> commenter INT NOT NULL,
            -> comment VARCHAR(100) NOT NULL,
            -> created_at DATETIME NOT NULL DEFAULT now(),
            -> PRIMARY KEY(id),
            -> INDEX commenter_idx (commenter ASC),
            -> CONSTRAINT commenter
            -> FOREIGN KEY (commenter)
            -> REFERENCES nodejs.users (id)
            -> ON DELETE CASCADE
            -> ON UPDATE CASCADE)
            -> COMMENT = '댓글'
            -> DEFAULT CHARSET=utf8mb4
            -> ENGINE=InnoDB;


    ※ 컬럼 옵션들
        => id INT NOT NULL AUTO_INCREMENT

            - 컬럼명 옆에 것들은 컬럼에 대한 옵션들

            - INT : 정수 자료형(FLOAT,DOUBLE은 실수)
            - VARCHAR : 문자열 자료형, 가변 길이(CHAR은 고정 길이)
            - TEXT : 긴 문자열은 TEXT로 별도 저장
            - DATETIME : 날짜 자료형 저장
            - TINYINT : -128에서 127까지 저장하지만 여기서는 1 또는 0만 저장해 불 값 표현

            - NOT NULL : 빈 값은 받지 않는다는 뜻(NULL은 빈 값 허용)
            - AUTO_INCREMENT : 숫자 자료형인 경우 다음 로우가 저장될 때 자동으로 1 증가
            - UNSIGNED : 0과 양수만 허용
            - ZEROFILL : 숫자의 자리 수가 고정된 경우 빈 자리에 0을 넣음
            - DEFAULT now() : 날짜 컬럼의 기본값을 현재 시간으로

# CRUD
    - CREATE READ UPDATE DELETE

    ※ CREATE 
        => IMSERT INTO 테이블 (컬럼명들) VALURES(값들)

        ex) INSERT INTO nodejs.users (name, age, married, comment) VALURES ('honeyduck', 28, 0, '자기소개1');
        ex) INSERT INTO nodejs.comments (commenter, comment) VALURES (1, '안녕하세요. honeyduck의 댓글입니다.');

    ※ READ 
        => SELECT 컬럼 FROM 테이블명
        => SELECT *은 모든 컬럼을 선택한다는 의미
        => 컬럼만 따로 추리는 것도 가능
            ex) SELECT name,married FROM nodejs.users;

        => WHERE로 조건을 주어 선택 가능
            - AND로 여러가지 조건을 동시에 만족하는 것을 찾음
                ex) SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30;
            - OR로 여러가지 조건 중 하나 이상을 만족하는 것을 찾음
                ex) SELECT id, name FROM nodejs.users WHERE married = 0 OR age > 30;
        
        => ORDER BY로 특정 컬럼 값 순서대로 정렬 가능
            - DESC는 내림차순, ASC 오름차순
                ex) SELECT id, name FROM nodejs.users ORDER BY age DESC;

        => LIMIT, OFFSET
            - LIMIT으로 조회할 개수 제한
                ex) SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1;
            - OFFSET으로 앞의 로우들 스킵 가능(OFFSET 2면 세 번째 것부터 찾음)
                ex) SELECT id, name FORM nodejs.users ORDER BY age DESC LIMIT 1 OFFSET 1;

    ※ UPDATE
        => 데이터베이스에 있는 데이터를 수정하는 작업
            - UPDATE 테이블명 SET 컬럼=새값 WHERE 조건
                ex) UPDATE nodejs.users SET comment = '바꿀 내용' WHERE id = 2; 
    
    ※ DELETE
        => 데이터베이스에 있는 데이터를 삭제하는 작업
            - DELETE FROM 테이블명 WHERE 조건
                ex) DELETE FORM nodejs.users WHERE id = 2;

# 시퀄라이즈 사용하기
    => SQL 작업을 쉽게 할 수 있도록 도와주는 라이브러리
    => 시퀄라이즈 명령어 사용하기 위해 sequelize-cli 설치
        ex) npm i express morgan nunjucks sequelize sequelize-cli mysq12
            npm i -D nodemon 

            npx sequelize init
    