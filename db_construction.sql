CREATE TABLE IF NOT EXISTS `User` (
    `id`                INT(11) NOT NULL auto_increment ,
    `username`          VARCHAR(255) NOT NULL,
    `codice_fiscale`    VARCHAR(16) NOT NULL,
    `created`           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE (`username`)
);

CREATE TABLE IF NOT EXISTS `Product` (
    `id`        INT(11) NOT NULL auto_increment ,
    `name`      VARCHAR(1000) NOT NULL,
    `bank`      INT(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`bank`) REFERENCES Product(`id`) 
);

CREATE TABLE IF NOT EXISTS `Bank` (
    `id`        INT(11) NOT NULL auto_increment,
    `name`      VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Prospect` (
    `id`            INT(11) NOT NULL auto_increment,
    `bank`          INT(11),
    `product`       INT(11),
    `user_cf`       VARCHAR(16),
    `instalment`    DECIMAL(6,2),
    `tan`           DECIMAL(6,2),
    `taeg`          DECIMAL(6,2),
    `additional`    JSON, 

	
    PRIMARY KEY (`id`),
    FOREIGN KEY (`bank`) REFERENCES Bank(`id`),
    FOREIGN KEY (`product`) REFERENCES Product(`id`),
);

