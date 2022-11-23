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