

#
# file_processor
#

DROP TABLE IF EXISTS `op_fileupload`;

CREATE TABLE `op_fileupload` (
  `uuid` varchar(255) DEFAULT NULL,
  `appKey` varchar(255) DEFAULT NULL,
  `permission` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `pathFile` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `info` longtext,
  `uploadedBy` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# process_manager
#


DROP TABLE IF EXISTS `process_userform`;

CREATE TABLE `process_userform` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` text NOT NULL,
  `name` text DEFAULT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'pending',
  `process` text NOT NULL,
  `definition` text NOT NULL,
  `responder` text DEFAULT NULL,
  `ui` text DEFAULT NULL,
  `options` text DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Role_UserForm
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Role_UserForm`;

CREATE TABLE `Role_UserForm` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Role` text NOT NULL,
  `UserForm` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# Dump of table User_UserForm
# ------------------------------------------------------------

DROP TABLE IF EXISTS `User_UserForm`;

CREATE TABLE `User_UserForm` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `User` text NOT NULL,
  `UserForm` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


#
# user_manager
#

# Dump of table site_role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `site_role`;

CREATE TABLE `site_role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL DEFAULT '',
  `name` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `site_role` WRITE;
/*!40000 ALTER TABLE `site_role` DISABLE KEYS */;

INSERT INTO `site_role` (`id`, `uuid`, `name`)
VALUES
	(1,'uuid-1','Role 1');

/*!40000 ALTER TABLE `site_role` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table site_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `site_user`;

CREATE TABLE `site_user` (
  `uuid` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `salt` varchar(64) DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `failedLogins` int(11) DEFAULT NULL,
  `languageCode` varchar(25) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`),
  UNIQUE KEY `email` (`email`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `site_user` WRITE;
/*!40000 ALTER TABLE `site_user` DISABLE KEYS */;

INSERT INTO `site_user` (`uuid`, `username`, `password`, `salt`, `email`, `isActive`, `lastLogin`, `failedLogins`, `languageCode`, `id`, `createdAt`, `updatedAt`)
VALUES
	('j-uuid','johnny','508c5ca315e6bbc5dc998d12bf35a0b798f8bb0d043e67336cd9d58466d596a1e9d1d65d6c4b8eed448ff29347f671259cc9260ce9e6322ccbba2823ca14a017b73cd7fb9ce535fd659f3bd6180c0312e3acb912acbe9d217ca869b238e653a315a5bdc7474af6365e642a6efb9287a0af96023271743a85cb57fd2df2638677f5e4b4590672bc70344bf31ae197a09fdb5fe45834badc323fa340589d2f16d82670eb16e733e12fe4d1d3d2bcb48e15397b2ed6a63b305ff19d914e7b630e0406cb6659e623b1bd2da1947dbf453b05efd497c6a8f2078526217c57be23e2dade24547c24b18cbee57ba9da23a75516739e75ce71f302b3830f4c2aa01dd4d9cffa975a23a72ee410a0a186b1802595f9c69979cec1bf7e0492b7d4e41ca9259e56bf38df64f3bf61197ef51d5c8b955db11a0b9f96f62a9e5a0b19a2e6004912f7e4970687ffe7f34dae10f69d4a4f4b270aff53e6a981251e4b1b89fd03966cf8dcdf5e45fe2f3bb20805482e93ec65fc1dc6303b584c1f3015d49e4738b7cde398e19cb3b044331ca7f1c35c488f4ae2f6b77455741702a760bd2af409cbbf6a477d516caf506aadfeb2d16f2033870c13c565bbf182c6b90ad16791edf285ce026cca5efd1c6d329e99ffd9f71b99323e12c0e711d1536ee94b85591c52cdf1d737896d9b2e545487990d650e2cb4fc596598db81c1d0b8a6ed702b523f','65574e989d26ffd4af070cb6444db0ad20da55663a3dd58049036b89423c266d','johnny@hausmanfamily.com',1,NULL,0,'en',1,NULL,'2020-01-15 08:46:15');

/*!40000 ALTER TABLE `site_user` ENABLE KEYS */;
UNLOCK TABLES;
