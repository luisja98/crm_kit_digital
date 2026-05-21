DROP DATABASE IF EXISTS crm_kit_digital;

CREATE DATABASE crm_kit_digital;

USE crm_kit_digital;

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    empresa VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    servicio_interesado VARCHAR(100) NOT NULL
);

INSERT INTO clientes
(nombre, email, empresa, telefono, servicio_interesado)
VALUES
('Luisja', 'luisja@email.com', 'Taller Luisja', '600123123', 'CRM');

SELECT * FROM clientes;