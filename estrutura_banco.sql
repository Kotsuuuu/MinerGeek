-- Criar o banco de dados 'anime_site'
CREATE DATABASE MinerGeek;

-- Usar o banco de dados 'anime_site'
USE MinerGeek;

-- Criar a tabela 'usuarios'
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
