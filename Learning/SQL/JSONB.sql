CREATE TABLE users ( id SERIAL PRIMARY KEY, data JSONB );

SELECT * FROM users;

INSERT INTO
    users (data)
VALUES (
        '{
        "name": "iPhone 15 Pro",
        "category": "Electronics",
        "description": "The latest iPhone with advanced features.",
        "brand": "Apple",
        "price": 999.99,
        "attributes": {
            "color": "Graphite",
            "storage": "256GB",
            "display": "6.1-inch Super Retina XDR display",
            "processor": "A15 Bionic chip"
        },
        "tags": ["smartphone", "iOS", "Apple"]
    }'
    ),
    (
        '{
        "name": "Samsung Galaxy Watch 4",
        "category": "Electronics",
        "description": "A smartwatch with health tracking and stylish design.",
        "brand": "Samsung",
        "price": 349.99,
        "attributes": {
            "color": "Black",
            "size": "42mm",
            "display": "AMOLED display",
            "sensors": ["heart rate monitor", "ECG", "SpO2"]
        },
        "tags": ["smartwatch", "wearable", "Samsung"]
    }'
    ),
    (
        '{
        "name": "Leather Case for iPhone 15 Pro",
        "category": "Accessories",
        "description": "Premium leather case for iPhone 15 Pro.",
        "brand": "Apple",
        "price": 69.99,
        "attributes": {
            "color": "Saddle Brown",
            "material": "Genuine leather",
            "compatible_devices": ["iPhone 15 Pro", "iPhone 15 Pro Max"]
        },
        "tags": ["phone case", "accessory", "Apple"]
    }'
    ),
    (
        '{
        "name": "Wireless Charging Pad",
        "category": "Accessories",
        "description": "Fast wireless charger compatible with smartphones and smartwatches.",
        "brand": "Anker",
        "price": 29.99,
        "attributes": {
            "color": "White",
            "compatible_devices": ["iPhone", "Samsung Galaxy", "Apple Watch", "Samsung Galaxy Watch"]
        },
        "tags": ["accessory", "wireless charger"]
    }'
    );

SELECT data -> 'name' AS PRODUCT_NAME FROM users;

ALTER TABLE users RENAME TO PRODUCTS;

SELECT data ->> 'name' AS PRODUCT_NAME FROM PRODUCTS;

SELECT 
    data #> '{attributes}' AS ATTRIBUTES
FROM 
    PRODUCTS;

SELECT
    data #> '{attributes, color}' AS COLORS
FROM 
    PRODUCTS;

SELECT
    data #>> '{attributes, color}' AS COLORS
FROM
    PRODUCTS;

SELECT data --> 'id', 'name'
FROM PRODUCTS
WHERE
    data @> '{"category": "Electronic"}';

SELECT data ->> 'name' NAME, data ->> 'price' PRICE
FROM PRODUCTS
WHERE
    '{"price": 999.99}'::jsonb <@ data;

SELECT '{"name": "iPad"}'::jsonb || '{"price" : 799}'::jsonb
FROM PRODUCTS;

SELECT data ->> 'name' name, data ->> 'price' price
FROM PRODUCTS
WHERE
    data ? 'price';

SELECT data ->> 'name' AS PRODUCT_NAME, data ->> 'tags' AS tags
FROM PRODUCTS
WHERE
    data -> 'tags' ? 'Apple';

SELECT
    data ->> 'name' AS PRODUCT_NAME,
    data ->> 'attributes' AS ATTRIBUTES
FROM PRODUCTS
WHERE
    data -> 'attributes' ?| array['size', 'storage'];

SELECT data ->> 'name' as name, data ->> 'attributes'
FROM PRODUCTS
WHERE
    data -> 'attributes' ?& array['color', 'storage'];

SELECT '{ "name": "Ajith", "age" : 21, "email" : "ajith.ad21@bitsathy.ac.in"}'::jsonb - 'age' result;

SELECT '{ "name": "Ajith", "age" : 21, "email" : "ajith.ad21@bitsathy.ac.in"}'::jsonb - array['name', 'age'] result;

SELECT data ->> 'name' name, data ->> 'price' price
FROM PRODUCTS
WHERE
    data @? '$.price ? (@> 999)';

SELECT data ->> 'name' name, data ->> 'price' price
FROM PRODUCTS
WHERE
    data @@ '$.price > 999';

SELECT jsonb_extract_path(data, 'attributes', 'storage') as storage
FROM PRODUCTS;

SELECT data ->> 'name' as name, data -> 'tags' -> 0 tag
FROM PRODUCTS
WHERE
    id = 2;

-- 07/05/2025

-- DDL - Data Definition Language

-- CREATE, ALTER, DROP
CREATE TABLE orders (
    orderId INT,
    customerId INT PRIMARY KEY,
    orderDate DATE
);

DROP TABLE orders;

DROP TABLE customers;

CREATE TABLE Customers (
    CustomerID INT,
    CustomerName VARCHAR(26),
    ContactName VARCHAR(26),
    Country VARCHAR(26)
);

ALTER TABLE customers ADD COLUMN Address VARCHAR(52);

ALTER TABLE customers RENAME COLUMN Address TO Pincode;

ALTER TABLE customers DROP COLUMN Pincode;

-- Delete whole table with tableName
DROP TABLE customers;

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(26),
    ContactName VARCHAR(26),
    Country VARCHAR(26),
    FOREIGN KEY (CustomerID) REFERENCES orders (CustomerId)
);

-- DML - Data Manipulation Language

INSERT INTO
    orders (
        orderid,
        customerid,
        orderdate
    )
VALUES
    -- (1, 1, '2020-01-01'),
    (2, 2, '2020-01-02'),
    (3, 3, '2020-01-03');

SELECT * FROM orders;

UPDATE orders SET orderdate = '2020-03-03' WHERE orderid = 3;

DELETE FROM orders;

INSERT INTO
    orders (
        orderid,
        customerid,
        orderdate
    )
VALUES (1, 1, '2020-01-01'),
    (2, 2, '2020-01-02'),
    (3, 3, '2020-01-03'),
    (4, 4, '2020-01-04'),
    (5, 5, '2020-01-05'),
    (6, 1, '2020-01-06'),
    (7, 2, '2020-01-07'),
    (8, 6, '2020-01-08'),
    (9, 3, '2020-01-09'),
    (10, 4, '2020-01-10'),
    (11, 5, '2020-01-11'),
    (12, 7, '2020-01-12'),
    (13, 8, '2020-01-13'),
    (14, 9, '2020-01-14'),
    (15, 10, '2020-01-15'),
    (16, 11, '2020-01-16'),
    (17, 12, '2020-01-17'),
    (18, 13, '2020-01-18'),
    (19, 14, '2020-01-19'),
    (20, 15, '2020-01-20');

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons (ID)
);

SELECT * FROM persons;

INSERT INTO
    persons (id, lastname, firstname, age)
VALUES (1, 'Doe', 'John', 25),
    (2, 'Smith', 'Jane', 30),
    (3, 'Johnson', 'Bob', 35),
    (4, 'Williams', 'Alice', 40),
    (5, 'Brown', 'Mike', 45),
    (6, 'Davis', 'Emily', 50),
    (7, 'Miller', 'Tom', 55),
    (8, 'Wilson', 'Sarah', 60),
    (9, 'Moore', 'Kevin', 65),
    (10, 'Taylor', 'Lisa', 70);

INSERT INTO
    orders (
        orderid,
        orderNumber,
        personid
    )
VALUES (1, 100, 1),
    (2, 101, 2),
    (3, 102, 3),
    (4, 103, 4),
    (5, 104, 5),
    (6, 105, 6),
    (7, 106, 7),
    (8, 107, 8),
    (9, 108, 9),
    (10, 109, 10);

SELECT * FROM orders;

-- INSERT INTO orders(orderid, orderNumber, personid) VALUES
-- (11, 110, 11);

INSERT INTO
    persons (id, lastname, firstname, age)
VALUES (11, 'Anderson', 'David', 75);

SELECT * FROM persons;

UPDATE persons set firstname = 'Ross' WHERE id = 10;

DELETE FROM persons WHERE id = 11;

SELECT firstName as Name, age
FROM persons
WHERE
    age > 50
    OR firstname like 'A%';

SELECT firstName, age
FROM persons
WHERE
    age >= 40
    and firstname LIKE 'A%'

SELECT firstName, age FROM persons where firstname NOT LIKE '%Al%';

SELECT firstName, age FROM persons where firstname LIKE '%Al%';

SELECT * FROM persons ORDER BY id DESC;

SELECT * FROM persons ORDER BY firstname, lastname;

SELECT age FROM persons;

GROUP BY age;

CREATE Table Trending_YouTube_Videos (
    rank INT PRIMARY KEY,
    Video VARCHAR(256),
    VideoViews BIGINT,
    Likes BIGINT,
    Dislikes BIGINT,
    Category VARCHAR(256),
    Published DATE
);

DROP TABLE Trending_YouTube_Videos;

SELECT ordernumber
from orders
WHERE
    orderid = (
        SELECT id
        FROM persons
        WHERE
            age = 30
    );

-- SELECT * FROM persons;
with cte as ( SELECT lastname from persons ) SELECT * FROM cte;

with sec_cte as ( SELECT * FROM orders ) SELECT * FROM sec_cte;

SELECT * from products;

with
    rec_cte (id, name, age, address) as (
        SELECT id, name, age, address
        FROM persons
        WHERE
            address = 'Namakkal'
        UNION ALL
        SELECT id, name, age, address
        FROM persons
        WHERE
            age > 30
    )
SELECT *
from rec_cte;