# CRUD

## MYSQL - 4

### CRUD (Create, Read, Update, Delete)

기본이 되는 데이터 처리? 방법들

### Create

``` sql

INSERT INTO `테이블` (`컬럼명들`) VALUES (`값들`)

-- INSERT INTO nodejs.users (name, age, married, comment) VALUES ("coffee", 24, 0, "자기소개")

INSERT INTO nodejs.users (name, age, married, comment) VALUES ("zero", 24, 0, "자기소개 ");
Query OK, 1 row affected (0.00 sec)

INSERT INTO nodejs.users (name, age, married, comment) VALUES ("nero", 32, 1, "자기소개2");
Query OK, 1 row affected (0.02 sec)

INSERT INTO nodejs.comments (commenter, comment) VALUES (1, "안녕하세요. zero의 댓글입니다");
Query OK, 1 row affected (0.01 sec)

```

### Read

``` sql

-- 해당 칼럼 전체 조회
    SELECT * FROM nodejs.users; 

+----+------+-----+---------+---------------+---------------------+
| id | name | age | married | comment       | created_at          |
+----+------+-----+---------+---------------+---------------------+
|  1 | zero |  24 |       0 | 자기소개1     | 2022-11-21 23:09:06 |
|  2 | nero |  32 |       1 | 자기소개2     | 2022-11-21 23:09:26 |
+----+------+-----+---------+---------------+---------------------+
2 rows in set (0.02 sec)

-- 칼럼 부분 조회

SELECT name, married FROM nodejs.users; 


+------+---------+
| name | married |
+------+---------+
| zero |       0 |
| nero |       1 |
+------+---------+
2 rows in set (0.00 sec)

-- 로우 부분 조회

SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30; // name, age만 조회 근데 이제 married 가 1 이고 age 가 30 이상인

+------+-----+
| name | age |
+------+-----+
| nero |  32 |
+------+-----+
1 row in set (0.00 sec)


SELECT name, age FROM nodejs.users WHERE married = 0 OR age > 30; // 조건 합집합

+------+-----+
| name | age |
+------+-----+
| zero |  24 |
| nero |  32 |
+------+-----+
2 rows in set (0.00 sec)

-- 정렬해서 찾기

SELECT name, age FROM nodejs.users ORDER BY age DESC; // 나이순(내림차순)으로 정렬

+------+-----+
| name | age |
+------+-----+
| nero |  32 |
| zero |  24 |
+------+-----+
2 rows in set (0.00 sec)


-- LIMIT으로 조회할 개수 제한

SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1; // 1명 제한

+----+------+
| id | name |
+----+------+
|  2 | nero |
+----+------+
1 row in set (0.00 sec)

-- OFFSET 기준 앞의 로우들 스킵 

SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1 OFFSET 1; // 1명 건너 뛰고 조회

+----+------+
| id | name |
+----+------+
|  1 | zero |
+----+------+
1 row in set (0.00 sec)


```

### Upate

**where을 빼버리면 모든 옵션이 다 바뀐다.** 반드시 선택을 할 것.

``` sql

UPDATE nodejs.users SET comment = "변경 내용" WHERE id = 2;

Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

SELECT * FROM nodejs.users;
+----+------+-----+---------+---------------+---------------------+
| id | name | age | married | comment       | created_at          |
+----+------+-----+---------+---------------+---------------------+
|  1 | zero |  24 |       0 | 자기소개1     | 2022-11-21 23:09:06 |
|  2 | nero |  32 |       1 | 변경 내용     | 2022-11-21 23:09:26 |
+----+------+-----+---------+---------------+---------------------+
2 rows in set (0.01 sec)

```

### DELETE

``` sql

DELETE FROM nodejs.users WHERE id = 2;
Query OK, 1 row affected (0.00 sec)

+----+------+-----+---------+---------------+---------------------+
| id | name | age | married | comment       | created_at          |
+----+------+-----+---------+---------------+---------------------+
|  1 | zero |  24 |       0 | 자기소개1     | 2022-11-21 23:09:06 |
+----+------+-----+---------+---------------+---------------------+
1 row in set (0.00 sec)

```
