-- MySQL dump 10.19  Distrib 10.3.31-MariaDB, for debian-linux-gnueabihf (armv8l)
--
-- Host: localhost    Database: vue
-- ------------------------------------------------------
-- Server version	10.3.31-MariaDB-0+deb10u1
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authtbl`
--

DROP TABLE IF EXISTS `authtbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authtbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `timestart` datetime DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `durration` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authtbl`
--

INSERT INTO `authtbl` VALUES (1,'TCCutler@tandtwanderers.com','tarryc02653','coach','2022-03-25 17:36:50','668a38f078',2000000),(2,'bridget.cutler@gmail.com','bridget','coach','2022-03-20 13:21:21','7ecb95eb0b',600);

--
-- Table structure for table `coachtbl`
--

DROP TABLE IF EXISTS `coachtbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coachtbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(256) DEFAULT NULL,
  `lastName` varchar(256) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `hourlyRate` varchar(256) DEFAULT NULL,
  `areas` varchar(1000) DEFAULT NULL,
  `lastupdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coachtbl`
--

INSERT INTO `coachtbl` VALUES (1,'Bridget','Cutler','yowsa','12','frontend,backend,career',NULL),(2,'William','Cutler','Good God!','45','frontend,career',NULL),(3,'Tarrant','Cutler','In your face','50','frontend,backend',NULL),(4,'Tammy','Cutler','Highway!','125','career',NULL),(5,'Johanas','Becker','N=Becker','45','backend',NULL),(6,'','','','','',NULL);

--
-- Table structure for table `requesttbl`
--

DROP TABLE IF EXISTS `requesttbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requesttbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `coachId` varchar(20) DEFAULT NULL,
  `userEmail` varchar(256) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `lastupdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requesttbl`
--

INSERT INTO `requesttbl` VALUES (1,'2','TCCutler@tandtwanderers.com','Can we talk?',NULL),(2,'2','bridget.cutler@gmail.com','Yowsa',NULL),(3,'1','bridget.cutler@gmail.com','blah blah blah',NULL),(4,'1','TCCutler@tandtwanderers.com','hslkm;ls;l,',NULL),(5,'1','TCCutler@tandtwanderers.com','the fix',NULL),(6,'1','tarrant.cutler@gmail.com','uuuuuuuu',NULL),(7,'1','TCCutler@tandtwanderers.com','Hi bridget',NULL),(8,'','bridget.cutler@gmail.com','this is me bridget',NULL),(9,'','will.citler@gmail.com','This is will',NULL),(10,'','bob.jones@gmail.com','Help me Bridget!',NULL),(11,'','sigfied@german.com','Helpl me Tammy.',NULL);

--
-- Table structure for table `surveytbl`
--

DROP TABLE IF EXISTS `surveytbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `surveytbl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) DEFAULT NULL,
  `rating` varchar(256) DEFAULT NULL,
  `lastupdate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `surveytbl`
--

INSERT INTO `surveytbl` VALUES (9,'tarryc','great',NULL),(30,'Tammy','poor',NULL),(33,'William','great',NULL),(35,'Bridget','average',NULL),(36,'Coco','great',NULL);
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-29  9:05:01
