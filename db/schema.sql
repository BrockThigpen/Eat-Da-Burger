CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INT
    AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
    (255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
);