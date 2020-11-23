-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

USE cy7prh5171smo00z;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(30),
  devoured BOOLEAN FALSE
);

INSERT INTO burgers (id, burger_name) VALUES 
(1, "Signature Burger"),
(2, "Crispy Chicken Burger"),
(3, "Spicy Veggie Burger"),
(4, "Atlantic Haddock Burger"),
(5, "Junior Burger");