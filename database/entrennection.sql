CREATE DATABASE IF NOT EXISTS demoday;
USE demoday;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int PRIMARY KEY auto_increment,
  `nome_sobrenome` varchar(255),
  `CPF` int,
  `gmail` varchar(255),
  `senha` varchar(20),
  `telefone` int unique,
  `especialidade` varchar(50),
  `data_nascimento` int
);

CREATE TABLE IF NOT EXISTS `especialidade` (
  `id_especialidade` int PRIMARY KEY,
  `nome` varchar(255)
);

CREATE TABLE IF NOT EXISTS `mentor` (
  `id_mentor` int PRIMARY KEY auto_increment,
  `nome_sobrenome` varchar(255),
  `CPF` int,
  `id_especialidade` int,
  FOREIGN KEY (`id_especialidade`) REFERENCES `especialidade` (`id_especialidade`)
);

CREATE TABLE IF NOT EXISTS `mentoria` (
  `id_mentoria` int PRIMARY KEY auto_increment,
  `id_mentor` int,
  `data_hora` timestamp,
  `CPF` int,
  `nome_sobrenome` varchar(255),
  `id_usuario` int,
  FOREIGN KEY (`id_mentor`) REFERENCES `mentor` (`id_mentor`),
  FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
);


CREATE TABLE IF NOT EXISTS `empresa` (
  `id_empresa` int PRIMARY KEY,
  `descricao_produto` varchar(300),
  `nome_empresa` varchar(100),
  `telefone` int,
  `CNPJ` int,
  FOREIGN KEY (`telefone`) REFERENCES `usuario` (`telefone`)
);

CREATE TABLE IF NOT EXISTS `plus` (
  `id_usuario` int PRIMARY KEY,
  `CPF` int,
  `nome_sobrenome` varchar(255),
  `numero_cartao` int,
  `validade_cartao` int,
  `numero_boleto` int,
  `boleto` varchar(255),
  `CVV` int,
  FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
);

CREATE TABLE IF NOT EXISTS `postagens` (
  `id_postagem` int primary key auto_increment,
  `id_especialidade` varchar(255),
  `nome_usuario` varchar(255),
  `data_hora` timestamp,
  `comentarios` varchar(255),
  `imagem_postagem` varchar(255)
);

CREATE TABLE IF NOT EXISTS `perfil` (
  `id_perfil`int primary key auto_increment,
  `id_usuario` int,
  `id_postagem` int,
  `nome_usuario` varchar(255),
  `imagem_perfil` varchar(255),
  `imagem_banner` varchar(255),
  FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  FOREIGN KEY (`id_postagem`) REFERENCES `postagens` (`id_postagem`)
);

CREATE TABLE IF NOT EXISTS `news` (
  `id_usuario` int,
  `data_hora` timestamp,
  `comentarios` varchar(255),
  FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
);
