--PSQL SHELL

--for help \?

--list database \l

--create database CREATE DATABASE database_name

--connect database \c database_name

--list all tables \d


CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);


CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

INSERT INTO restaurants (id,name,location,price_range) values (123,'mcdonals','new york',3)

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id  BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    reviews TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5 )
);