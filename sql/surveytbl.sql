CREATE TABLE surveytbl (
 id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 name varchar(256) DEFAULT NULL,
 rating varchar(256) DEFAULT NULL,
 lastupdate datetime DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4