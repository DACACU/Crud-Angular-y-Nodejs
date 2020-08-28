CREATE DATABASE ng_users_db;

USE ng_users_db;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR (180),
    Apellido VARCHAR (180),
    Telefono INT(11),
    Email VARCHAR (180),
    Direccion VARCHAR (180),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

DESCRIBE users;