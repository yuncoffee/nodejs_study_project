# 테이블 만들기

## MYSQL - 2

### 데이터 베이스 생성하기

``` sql

mysql> CREATE SCHEMA `nodejs` DEFAULT CHARACTER SET utf8;
Query OK, 1 row affected, 1 warning (0.00 sec)

```

### 생성한 데이터 베이스 확인

``` sql

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| nodejs             |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)


```

### 테이블 생성

user 테이블 생성

``` sql

CREATE TABLE nodejs.users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    UNIQUE INDEX name_UNIQUE (name ASC))
    COMMENT = "사용자 정보"
    DEFAULT CHARACTER SET = utf8
    ENGINE = InnoDB;

```

### 자주쓰는 컬럼의 자료형

``` sql

INT // 정수 

FLOAT,DOUBLE // 소수포함

VARCHAR(자릿수) // 가변길이 문자열

CHAR(자릿수) // 고정 길이 문자열

TEXT // 긴 글

TINYINT //  -128 ~ 127 까지의 정수 1,0 만 저장 시 boolean 처럼 역할 가능

DATETIME // 날짜와 시간에 대한 정보

DATE // 날짜 정보

TIME // 시간 정보

```

### 자주쓰는 자료형 옵션

``` sql

-- 로우

자료형 NULL // 빈칸 허용

자료형 NOT NULL // 빈칸 미허용

자료형 AUTO_INCREMENT // 자동 숫자 +

자료형 UNSIGNED // 0과 양수만 허용

자료형 ZEROFILL // 수샂의 자리 수가 고정된 경우 빈 자리에 0 채움

자료형 DEFAULT now() // 기본값 설정 - (현재 시각)

PRIMARY KEY(자료형) // 기본 키 설정(로우를 대표하는 고유 값)

UNIQUE INDEX // 해당 값이 고유함 여부 


-- 칼럼

COMMENT // 테이블에 대한 보충 설명 (옵셔널)

DEFAULT CHARACTER SET // 인코딩 설정

ENGINE // db엔진 설정

```

### 만들어진 테이블 확인

``` sql

use nodejs

DESC users;

+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| id         | int          | NO   | PRI | NULL              | auto_increment    |
| name       | varchar(20)  | NO   | UNI | NULL              |                   |
| age        | int unsigned | NO   |     | NULL              |                   |
| married    | tinyint      | NO   |     | NULL              |                   |
| comment    | text         | YES  |     | NULL              |                   |
| created_at | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
6 rows in set (0.00 sec)


-- 테이블 제거

DROP TABLE users;

```

``` sql

-- comments 테이블 생성

CREATE TABLE `nodejs`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `commenter` INT NOT NULL,
  `comment` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  INDEX `commneter_idx` (`commenter` ASC),
  CONSTRAINT `commneter`
    FOREIGN KEY (`commenter`)
    REFERENCES `nodejs`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COMMENT = '댓글';

-- DESC comments;
+------------+--------------+------+-----+-------------------+-------------------+
| Field      | Type         | Null | Key | Default           | Extra             |
+------------+--------------+------+-----+-------------------+-------------------+
| id         | int          | NO   | PRI | NULL              | auto_increment    |
| commenter  | int          | NO   | MUL | NULL              |                   |
| comment    | varchar(100) | NO   |     | NULL              |                   |
| created_at | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+--------------+------+-----+-------------------+-------------------+
4 rows in set (0.00 sec)

```

테이블 생성 확인

``` sql

show TABLES;
+------------------+
| Tables_in_nodejs |
+------------------+
| comments         |
| users            |
+------------------+
2 rows in set (0.02 sec)

```
