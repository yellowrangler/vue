CREATE TABLE surveytbl (
 id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 name varchar(256) DEFAULT NULL,
 rating varchar(256) DEFAULT NULL,
 lastupdate datetime DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE coachtbl (
 id varchar(20),
 firstName varchar(256) DEFAULT NULL,
 lastName varchar(256) DEFAULT NULL,
 description varchar(500) DEFAULT NULL,
 hourlyRate varchar(256) DEFAULT NULL,
 areas varchar(1000) DEFAULT NULL,
 lastupdate datetime DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE requesttbl (
 id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 coachId varchar(20) DEFAULT NULL,
 userEmail varchar(256) DEFAULT NULL,
 message varchar(500) DEFAULT NULL,
 lastupdate datetime DEFAULT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4


id: 
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,