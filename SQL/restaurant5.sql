CREATE TABLE `restaurant5` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `PhoneNumber` varchar(15) NOT NULL,
  `NumberOfSeats` int NOT NULL,
  `Date` varchar(15) NOT NULL,
  `Time` varchar(10) NOT NULL,
  `RegisterDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Food` varchar(200) DEFAULT NULL,
  `Quantity` varchar(50) DEFAULT NULL,
  `Amount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
