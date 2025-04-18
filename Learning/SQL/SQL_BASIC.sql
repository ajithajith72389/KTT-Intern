-- CREATE TABLE

CREATE TABLE STUDENT (
	STUDENT_ID INT PRIMARY KEY,
	NAME VARCHAR(100) NOT NULL,
	AGE INT,
	EMAIL VARCHAR(255) UNIQUE,
	ENROLLMENT_DATE DATE DEFAULT CURRENT_DATE
);


-- ALTER TABLE

ALTER TABLE STUDENT
ADD COLUMN GENDER VARCHAR(10);
add column city varchar(20);


ALTER TABLE STUDENT
ALTER COLUMN TEST TYPE INTEGER[] USING ARRAY[TEST],
ALTER COLUMN ODI TYPE INTEGER[] USING ARRAY[ODI],
ALTER COLUMN T20 TYPE INTEGER[] USING ARRAY[T20];



-- TRUNCATE 

TRUNCATE TABLE STUDENT;


-- SELECT

SELECT * FROM STUDENT



-- INSERT

INSERT INTO STUDENT(STUDENT_ID, NAME, AGE, EMAIL, ENROLLMENT_DATE, CITY, GENDER) VALUES(
118, 'Mandhana', 28, 'sm@gmail.com', '2002-02-22', 'Bangalore', 'Female');


-- UPDATE

UPDATE STUDENT
SET ENROLLMENT_DATE = '2021-11-22'
WHERE NAME = 'Ajith';

UPDATE STUDENT
SET TEST = ARRAY[100, 20, 84, 88, 12],
ODI = ARRAY[43,45, 76, 82, 162],
T20 = ARRAY[56, 8, 27, 60, 24]
WHERE NAME = 'virat';

UPDATE STUDENT
SET TEST = ARRAY[10, 120, 74, 118, 112],
ODI = ARRAY[3,25, 16, 81, 62],
T20 = ARRAY[6, 18, 27, 30, 94]
WHERE NAME = 'Mandhana';





-- DELETE

DELETE FROM STUDENT
WHERE AGE = 21;
RETURNING *;


-- SUM

SELECT SUM(RUNS) AS RUNS_5_MATCH FROM STUDENT,
UNNEST (TEST) AS RUNS;

SELECT SUM(RUNS) AS RUNS_5_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;


--MAX

SELECT NAME, MAX(RUNS) AS RUNS_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;


--MIN

SELECT NAME, MIN(RUNS) AS RUNS_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;



--AVG

SELECT NAME, AVG(RUNS) AS RUNS_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;

SELECT NAME, AVG(RUNS::FLOAT) AS RUNS_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;

SELECT NAME, AVG(RUNS::DECIMAL) AS RUNS_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;

SELECT NAME, ROUND(AVG(RUNS::DECIMAL),2) AS RUNS_TEST FROM STUDENT,
UNNEST (TEST) AS RUNS
GROUP BY NAME;

-- COUNT

SELECT NAME, CARDINALITY(TEST) AS TEST_MATCHES FROM STUDENT,

SELECT COUNT(NAME) AS COUNT_NAMES FROM STUDENT;


-- PRIMARY KEY

CREATE TABLE student (
    id INT,
    name VARCHAR(50),
    PRIMARY KEY (id)
);


CREATE TABLE marks (
    student_id INT,
    subject_id INT,
    score INT,
    PRIMARY KEY (student_id, subject_id)
);


--UNIQUE

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);


INSERT INTO student (name, email) VALUES ('Ajith', 'ajith@gmail.com');
INSERT INTO student (name, email) VALUES ('Sahith', 'sahith@gmail.com');

INSERT INTO student (name, email) VALUES ('Another', 'ajith@gmail.com');



CREATE TABLE marks (
    student_id INT,
    subject VARCHAR(50),
    score INT,
    UNIQUE (student_id, subject)
);


-- NOT NULL

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);


--CHECK

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18)
);

INSERT INTO student (name, age) 
VALUES ('Ajith', 15);

INSERT INTO student (name, age) VALUES ('Ajith', 22);

CREATE TABLE marks (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(50),
    score INT CHECK (score BETWEEN 0 AND 100)
);


-- ANOTHER TABLE

CREATE TABLE PLAYER_INFO(
ID INT PRIMARY KEY,
TEAM TEXT[]
)

INSERT INTO PLAYER_INFO(ID, NAME, TEAM) VALUES(
118, 'Mandhana', ARRAY['INDIA','RCB','SUPERNOVAS', 'AS']
);



SELECT * FROM PLAYER_INFO;


--FOREIGN KEY

ALTER TABLE PLAYER_INFO
ADD CONSTRAINT FK_STUDENT
FOREIGN KEY(ID) REFERENCES STUDENT(STUDENT_ID);


-- LEFT JOIN

SELECT S.STUDENT_ID AS NUM, S.NAME, P.TEAM FROM STUDENT AS S
LEFT JOIN PLAYER_INFO AS P
ON S.STUDENT_ID = P.ID;


-- VALUES ADDED IN STUDENT TABLE
INSERT INTO STUDENT (
  student_id, name, age, email, enrollment_date, city, gender, test, t20, odi
) VALUES
(22, 'Rohit', 36, 'rohit@gmail.com', '2007-03-02', 'Mumbai', 'Male',
  ARRAY[120, 34, 102, 99, 88], ARRAY[45, 33, 29, 55, 61], ARRAY[55, 66, 75, 88, 94]),

(33, 'Dhoni', 42, 'msd@gmail.com', '2005-08-17', 'Ranchi', 'Male',
  ARRAY[87, 56, 103, 44, 77], ARRAY[55, 22, 33, 42, 36], ARRAY[89, 99, 66, 78, 95]),

(44, 'Smriti', 27, 'smriti@gmail.com', '2010-09-11', 'Pune', 'Female',
  ARRAY[102, 98, 110, 77, 85], ARRAY[60, 50, 70, 65, 55], ARRAY[61, 73, 80, 90, 77]),

(55, 'Gill', 25, 'shubman@gmail.com', '2019-06-30', 'Mohali', 'Male',
  ARRAY[90, 80, 105, 93, 112], ARRAY[44, 51, 38, 69, 74], ARRAY[84, 92, 66, 59, 100]),

(66, 'Harman', 34, 'harman@gmail.com', '2009-05-21', 'Amritsar', 'Female',
  ARRAY[77, 85, 91, 94, 102], ARRAY[52, 61, 70, 58, 67], ARRAY[65, 75, 88, 90, 85]);

--JOINS

SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
INNER JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;


SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
LEFT JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;


SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
RIGHT JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;


SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
FULL JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;

SELECT S.NAME, P.NAME, S.CITY FROM STUDENT S
JOIN STUDENT P
ON S.CITY= P.CITY
WHERE S.STUDENT_ID <> P.STUDENT_ID;


-- CROSS JOIN

SELECT P.NAME, S.CITY FROM STUDENT S
CROSS JOIN PLAYER_TEAMS P;


-- SUBQUERY

SELECT NAME, AGE FROM STUDENT
WHERE AGE = (SELECT MIN(AGE) FROM STUDENT);


--COLUMN SUBQUERY

SELECT NAME FROM STUDENT
WHERE STUDENT_ID IN (SELECT ID FROM PLAYER_TEAMS)

-- ROW SUBQUERY

SELECT * FROM STUDENT
WHERE (STUDENT_ID, NAME) IN (SELECT ID, NAME FROM PLAYER_TEAMS WHERE 'INDIA-W' = ANY(TEAM));


-- TABLE SUBQUERY

SELECT * FROM 
(SELECT NAME, AGE FROM STUDENT WHERE AGE > 30) AS SENIOR_PLAYERS;

--NESTED SUBQUERY

SELECT NAME FROM STUDENT
WHERE CITY = (SELECT CITY FROM STUDENT WHERE NAME ='Rohit');



-- ADVANCED SQL FUNCTIONS

-- CONCAT

SELECT CONCAT('AJITH', ' ', 'KUMAR') AS FULLNAME, 
CONCAT('R', 'C', 'B') AS TEAMNAME;


-- SUBSTRING

SELECT SUBSTRING('AJITH', 1,3) AS NAME;
SELECT SUBSTRING('SAHITH KAJA KHAN', 1,11) AS NAME;

-- REPLACE

SELECT REPLACE('GOOD MORNING', 'MORNING', 'NIGHT');
SELECT REPLACE('HAVE A GOOD DAY', 'GOOD', 'EXCELLENT');


-- UPPER(str) & LOWER(str)

SELECT UPPER('good morning'), LOWER('GOOD MORNING');
SELECT UPDATE('upper'), LOWER('UPPER');


-- LENGTH

SELECT LENGTH('AJITH KUMAR');
SELECT LENGTH('ROYAL CHALLANGERS BANGALURU')

--FLOOR(x)

SELECT FLOOR(10.11);
SELECT FLOOR(1.01);

--CEIL(x)

SELECT CEIL(10.11);
SELECT CEIL(9.7823);

--ROUND(x, d)

SELECT ROUND(3.1415, 2);
SELECT ROUND(3.990023, 3);

-- ABS(x)

SELECT ABS(-10);
SELECT ABS(10)


-- MOD(x, y)

SELECT MOD(10, 3);
SELECT MOD(1093237, 9);

-- Date and Time Functions

-- CURRENT_DATE & CURRENT_TIME

SELECT CURRENT_DATE, CURRENT_TIME;

-- DATE_PART('part', date)

SELECT DATE_PART('YEAR', CURRENT_DATE);
SELECT DATE_PART('MONTH', CURRENT_DATE);
SELECT DATE_PART('DAY', CURRENT_DATE);

--




-- PARENT TABLE
CREATE TABLE STUDENT (
    student_id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER,
    email VARCHAR(100) UNIQUE,
    enrollment_date DATE,
    city VARCHAR(50),
    gender VARCHAR(10),
    test INTEGER[],
    t20 INTEGER[],
    odi INTEGER[]
);

-- INSERT VALUES INTO PARENT TABLE
INSERT INTO STUDENT (
  student_id, name, age, email, enrollment_date, city, gender, test, t20, odi
) VALUES
(22, 'Rohit', 36, 'rohit@gmail.com', '2007-03-02', 'Mumbai', 'Male',
  ARRAY[120, 34, 102, 99, 88], ARRAY[45, 33, 29, 55, 61], ARRAY[55, 66, 75, 88, 94]),

(33, 'Dhoni', 42, 'msd@gmail.com', '2005-08-17', 'Ranchi', 'Male',
  ARRAY[87, 56, 103, 44, 77], ARRAY[55, 22, 33, 42, 36], ARRAY[89, 99, 66, 78, 95]),

(44, 'Smriti', 27, 'smriti@gmail.com', '2010-09-11', 'Pune', 'Female',
  ARRAY[102, 98, 110, 77, 85], ARRAY[60, 50, 70, 65, 55], ARRAY[61, 73, 80, 90, 77]),

(55, 'Gill', 25, 'shubman@gmail.com', '2019-06-30', 'Mohali', 'Male',
  ARRAY[90, 80, 105, 93, 112], ARRAY[44, 51, 38, 69, 74], ARRAY[84, 92, 66, 59, 100]),

(66, 'Harman', 34, 'harman@gmail.com', '2009-05-21', 'Amritsar', 'Female',
  ARRAY[77, 85, 91, 94, 102], ARRAY[52, 61, 70, 58, 67], ARRAY[65, 75, 88, 90, 85]);



-- CHILD TABLE
CREATE TABLE PLAYER_TEAMS (
    id INTEGER PRIMARY KEY,
    team TEXT[],
    name VARCHAR(50),
    FOREIGN KEY (id) REFERENCES STUDENT(student_id)
);


-- INSERT VALUES INTO CHILD TABLE
INSERT INTO PLAYER_TEAMS (id, team, name) VALUES
(22, ARRAY['INDIA', 'MI'], 'Rohit'),
(33, ARRAY['INDIA', 'CSK'], 'Dhoni'),
(44, ARRAY['INDIA-W', 'TRAILBLAZERS'], 'Smriti'),
(55, ARRAY['INDIA', 'GT'], 'Gill'),
(66, ARRAY['INDIA-W', 'VELOCITY'], 'Harman'),
(77, ARRAY['INDIA', 'KKR'], 'Shreyas'),
(88, ARRAY['INDIA-W', 'SUPERNOVAS'], 'Jemimah'),
(99, ARRAY['INDIA', 'SRH'], 'Kohli Jr'),
(101, ARRAY['INDIA', 'DC'], 'Pant'),
(111, ARRAY['INDIA-W', 'UPW'], 'Shefali');



-- INNER JOIN - RETURNS MATCHED ROWS FROM BOTH TABLES
SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
INNER JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;

-- LEFT JOIN - RETURNS ALL ROWS FROM THE LEFT TABLE AND MATCHED ROWS FROM THE RIGHT TABLE
SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
LEFT JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;

-- RIGHT JOIN - RETURNS ALL ROWS FROM THE RIGHT TABLE AND MATCHED ROWS FROM THE LEFT TABLE
SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
RIGHT JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;

-- FULL JOIN - RETURNS ALL ROWS FROM BOTH TABLES WITH NULL ON NON-MATCHED ROWS
SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
FULL JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;

-- FULL OUTER JOIN - RETURNS ALL ROWS FROM BOTH TABLES WITH NULL ON NON-MATCHED ROWS
SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
FULL OUTER JOIN PLAYER_TEAMS P
ON S.STUDENT_ID = P.ID;

-- CROSS JOIN - RETURNS CARTESIAN PRODUCT OF BOTH TABLES 5X5=25, 6X2=12....
SELECT S.STUDENT_ID, S.NAME, P.TEAM FROM STUDENT S
CROSS JOIN PLAYER_TEAMS P;