CREATE TABLE `contact_us` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `Query` longtext NOT NULL,
  `RegisterDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
