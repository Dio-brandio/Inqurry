-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 03:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inquiry`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `apiKeyAssign` (IN `uid` INT, IN `key_value` VARCHAR(250))   BEGIN
	DECLARE isuser INT;
	
	SET isuser = (SELECT userid FROM apikeys WHERE userid = uid);

	IF isuser IS NULL THEN
		INSERT INTO apikeys (value, api_limit, userid)
		VALUES (key_value, 3, uid);
	ELSE
		UPDATE apikeys SET value = key_value WHERE userid = uid;
	END IF;
	
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `checkApiKeyAndHit` (IN `key_value` VARCHAR(250))   BEGIN
	DECLARE isOk int;
    DECLARE apiLimit int;
    
    SELECT id, api_limit INTO isOk, apiLimit from apikeys 
    WHERE value=key_value;
    
    IF(isOk is null or apiLimit is null) THEN
    	SELECT 'Not Verified';
     ELSE
     	UPDATE apikeys set api_limit=(apiLimit+1) where id=isOk;
     END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllBranchesByBranchId` (IN `branchid` INT)   BEGIN
    IF(branchid IS NULL) THEN
        SELECT * FROM `branch`;
    ELSE
        SELECT * FROM `branch` WHERE `id` =branchid;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllInquiresByBranchId` (IN `branchid` INT)   BEGIN
    IF(branchid IS NULL) THEN
       select i.*,b.name as branchname from inquires i
       inner join branch b on b.id=i.branch;
    ELSE
      select i.*,b.name as branchname from inquires i 
      inner join branch b on 
      b.id=i.branch where branch=branchid;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllUsersBranchId` (IN `branchid` INT, IN `uid` INT)   BEGIN
    IF(branchid IS NULL and uid is null) THEN
       select u.id,u.fname,u.lname,u.email,u.branchid,
       u.role,u.contact,u.created_at,
       b.name as branchname from users u
       inner join branch b on b.id=u.branchid;
    ELSEif(branchid IS NULL and uid is not null) then
      select u.id,u.fname,u.lname,u.email,u.branchid,
       u.role,u.contact,u.created_at,b.name as branchname from users u
       inner join branch b on b.id=u.branchid
       where u.id=uid;
    ELSEIF(branchid IS not NULL and uid is null) THEN
    select u.id,u.fname,u.lname,u.email,u.branchid,
       u.role,u.contact,u.created_at,b.name as branchname from users u
       inner join branch b on b.id=u.branchid
       where u.branchid=branchid;
    ELSE 
    select u.id,u.fname,u.lname,u.email,u.branchid,
       u.role,u.contact,u.created_at,b.name as branchname from users u
       inner join branch b on b.id=u.branchid
       where u.branchid=branchid and u.id =uid;
    END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `apikeys`
--

CREATE TABLE `apikeys` (
  `id` int(11) NOT NULL,
  `value` varchar(250) NOT NULL,
  `api_limit` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apikeys`
--

INSERT INTO `apikeys` (`id`, `value`, `api_limit`, `userid`) VALUES
(1, 'f07e2384-0d4b-4629-b343-89e5e05c68e0', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contact` varchar(250) NOT NULL,
  `address` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `name`, `email`, `contact`, `address`, `created_at`) VALUES
(1, 'Nikol', 'branch@nikol', '123456789', 'nikol', '2023-04-07 22:22:27'),
(2, 'odhav', 'branch@odhav', '123465789', 'odhav', '2023-04-07 22:41:01'),
(3, 'Vastral', 'branch@vastral', '123465879', 'vastral', '2023-04-08 10:41:40'),
(4, 'naroda', 'branch@naroda', '789456123', 'naroda', '2023-04-08 12:37:19');

-- --------------------------------------------------------

--
-- Table structure for table `inquires`
--

CREATE TABLE `inquires` (
  `id` int(11) NOT NULL,
  `fname` varchar(250) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `email` varchar(250) DEFAULT NULL,
  `refrence` varchar(250) DEFAULT NULL,
  `branch` int(11) NOT NULL,
  `inquiry_date` datetime NOT NULL,
  `upcoming_date` datetime DEFAULT NULL,
  `course` varchar(300) NOT NULL,
  `feedback` text NOT NULL,
  `addedby` int(11) NOT NULL,
  `intrested` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inquires`
--

INSERT INTO `inquires` (`id`, `fname`, `lname`, `contact`, `email`, `refrence`, `branch`, `inquiry_date`, `upcoming_date`, `course`, `feedback`, `addedby`, `intrested`, `created_at`) VALUES
(1, 'sanjay', 'nagar', '70443295329', 'sanjay@sanja', 'me', 1, '2023-04-08 00:00:00', '2023-04-16 00:00:00', 'python', 'nice', 1, 'yes', '2023-04-08 18:35:15'),
(2, 'Mohit', 'Nagar', '192005050', 'mohit@gmail', 'sanjay', 2, '2023-04-09 00:00:00', '2023-04-10 00:00:00', 'Web Designing', 'This is a nice Company', 1, 'yes', '2023-04-08 19:28:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `fname` varchar(250) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `branchid` int(11) DEFAULT NULL,
  `role` varchar(250) NOT NULL,
  `created_by` int(11) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fname`, `lname`, `branchid`, `role`, `created_by`, `contact`, `created_at`) VALUES
(1, 'admin@gmail.com', '123', 'Sanjay', 'Nagar', NULL, 'admin', 0, '9989898485', '2023-04-07 22:19:21'),
(2, 'mohit@managernikol', '123', 'mohit', 'nagar', 1, 'manager', 1, '4556123', '2023-04-07 22:31:19'),
(3, 'mukesh@employee', '123', 'mukesh', 'ambaani', 1, 'employee', 2, '123456789', '2023-04-07 22:33:33'),
(4, 'manager@naroda', '123', 'steve', 'rogers', 4, 'manager', 1, '78956546', '2023-04-08 12:39:48'),
(5, 'test@test', '123', 'test emp', 'emp', 4, 'employee', 4, '4556123', '2023-04-08 12:42:27'),
(7, 'manager@odhav', '123', 'Dharmilk', 'Nagar', 2, 'manager', 1, '789456123', '2023-04-08 19:30:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apikeys`
--
ALTER TABLE `apikeys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_key` (`value`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_branch_email` (`email`);

--
-- Indexes for table `inquires`
--
ALTER TABLE `inquires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inquiry_branch_id` (`branch`),
  ADD KEY `inquiry_user_id` (`addedby`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`),
  ADD KEY `branchid` (`branchid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apikeys`
--
ALTER TABLE `apikeys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inquires`
--
ALTER TABLE `inquires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inquires`
--
ALTER TABLE `inquires`
  ADD CONSTRAINT `inquiry_branch_id` FOREIGN KEY (`branch`) REFERENCES `branch` (`id`),
  ADD CONSTRAINT `inquiry_user_id` FOREIGN KEY (`addedby`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`branchid`) REFERENCES `branch` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
