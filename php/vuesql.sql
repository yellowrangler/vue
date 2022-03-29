CREATE TABLE surveytbl (
 id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 name varchar(256) DEFAULT NULL,
 rating varchar(256) DEFAULT NULL,
 lastupdate datetime DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `authtbl`;
CREATE TABLE `authtbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `timestart` datetime DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `durration` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `coachtbl`;
CREATE TABLE `coachtbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(256) DEFAULT NULL,
  `lastName` varchar(256) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `hourlyRate` varchar(256) DEFAULT NULL,
  `areas` varchar(1000) DEFAULT NULL,
  `lastupdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `requesttbl`;
CREATE TABLE `requesttbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `coachId` varchar(20) DEFAULT NULL,
  `userEmail` varchar(256) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `lastupdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
