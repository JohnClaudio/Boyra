CREATE TABLE `Categoria` (
	`Id` bigint NOT NULL AUTO_INCREMENT,
	`descricao` varchar(255) NOT NULL,
	`nome` varchar(50) NOT NULL,
	`palavra_chave` varchar(80) NOT NULL,
	PRIMARY KEY (`Id`)
);

CREATE TABLE `Usuario` (
	`usuario` varchar(100) NOT NULL,
	`login` varchar(200) NOT NULL,
	`senha` varchar(100) NOT NULL,
	`Id` bigint NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`Id`)
);

CREATE TABLE `Produto` (
	`Id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(80) NOT NULL,
	`imagem_url` varchar(255) NOT NULL,
	`preco` DECIMAL NOT NULL,
	`descricao` TEXT NOT NULL,
	`id_categoria` bigint NOT NULL,
	PRIMARY KEY (`Id`)
);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk0` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`Id`);




