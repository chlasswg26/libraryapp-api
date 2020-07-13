-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2020 at 04:44 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_libraryapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `created`, `updated`) VALUES
(1, 'Rober B. Weidie', '2020-07-09 05:00:00', '2020-07-09 05:00:00'),
(2, 'Flannery O\'Connor', '2020-07-09 05:01:26', '2020-07-09 05:01:26'),
(3, 'Philip Roth', '2020-07-09 05:02:07', '2020-07-09 05:02:07'),
(4, 'Erica Jong', '2020-07-09 05:02:19', '2020-07-09 05:02:19'),
(5, 'Thomas Keller', '2020-07-09 05:02:34', '2020-07-09 05:02:34'),
(6, 'Jean Rhys', '2020-07-09 05:02:46', '2020-07-09 05:02:46'),
(8, 'Paul Kalanithi', '2020-07-09 05:03:03', '2020-07-09 05:03:03'),
(9, 'Masashi Kishimoto', '2020-07-09 05:03:24', '2020-07-09 05:04:31'),
(11, 'Anita Loos', '2020-07-09 05:06:18', '2020-07-09 05:06:18'),
(12, 'Mark Twain', '2020-07-09 05:06:25', '2020-07-09 05:06:25');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `genre` int(11) DEFAULT NULL,
  `author` int(11) DEFAULT NULL,
  `status` enum('1','2') DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `image`, `genre`, `author`, `status`, `user`, `created`, `updated`) VALUES
(1, 'The Complete Stories', 'A teacher gave me Flannery O’Connor’s short story collection in the ninth grade. I grew up in a small town where girls were taught to be polite and not laugh too loud or talk too much or show interest in anything that might scare away the boys. It was a revelation to read O’Connor’s work. Here was a woman from a small Georgia town (like me!) who in direct contravention to her sex and social class was writing the kinds of stories that I was not only interested in reading, but wanted to start writing myself. Her bravery and clarity of vision laid an early foundation for my own work.', '3cb52df4d5ea437c2c9cbff49b46174a1e6f.jpg', 1, 1, '2', 1, '2020-07-09 06:55:01', '2020-07-09 07:40:57'),
(2, 'Letting Go', 'My dad gave me the novel Letting Go by Philip Roth. Dad read very little fiction—only one book of fiction a year. He was a political scientist, and he read dozens and dozens of non-fiction, academic books every year. But he always became enthusiastic about his one, annual book of fiction, which he would then recommend to everyone. He loved Roth. I like the novel, because it is Roth’s second—and unfamous—book; the writing shows his earnestness. He was looking for his voice then. I love the early novels of writers, for that same reason.', '6f6706c40b679ceb931806d75196e5acb460.jpg', 2, 2, '2', NULL, '2020-07-09 07:16:59', '2020-07-09 07:16:59'),
(4, 'Fear of Flying', 'Knowing it is my favorite book, for my 34th birthday, a boyfriend once gave me a signed first edition of Erica Jong’s Fear of Flying.  Having always read tattered paperback versions, I had no idea the original was adorned with a spectacularly ornate cover that’s evocative of a Hieronymus Bosch.  I’m not a big collector of anything but no matter how often I pare down my belongings, I never get rid of this.  (Even though the boyfriend was long-ago lost to history, his accompanying birthday card remains tucked inside the book.)', '0a38b67c11f042d9a588f06fca01240d25fa.jpg', 3, 3, '2', NULL, '2020-07-09 07:21:08', '2020-07-09 07:21:08'),
(5, 'The French Laundry Cookbook', 'In the winter of 2005, I received Thomas Keller’s The French Laundry Cookbook as a Christmas present.  It was during my early, struggling-writer years, when I was working as a chef to support my family (and my writing), and I often wondered if I’d ever make it as an author.  I remember sitting down on Christmas Day to read Keller’s book in my small apartment in Colorado.  I was inspired by his love for cooking, his artistry and creativity, and his deep dedication to his art.  The book was an inspiration to me to keep writing and pursuing my dream of publication, and I promised myself that when I published my first book, I would celebrate at one of his restaurants. Ten years later, I signed my contract for Children of the New World with Picador.  This past November, I invited my family to Per Se as a thank you for all their love and support throughout my years of writing, and I lifted a glass in thanks to Keller.', 'd3fc8f330a4957886c9dc967eddab744c982.png', 4, 4, '2', NULL, '2020-07-09 07:23:35', '2020-07-09 07:23:35');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `created`, `updated`) VALUES
(1, 'Adventure', '2020-07-09 04:46:06', '2020-07-09 04:50:00'),
(2, 'Animation', '2020-07-09 04:46:31', '2020-07-09 04:46:31'),
(3, 'Comedy', '2020-07-09 04:46:40', '2020-07-09 04:46:40'),
(4, 'Drama', '2020-07-09 04:46:56', '2020-07-09 04:46:56'),
(6, 'Horror', '2020-07-09 04:47:51', '2020-07-09 04:47:51'),
(7, 'Action', '2020-07-09 04:52:56', '2020-07-09 04:52:56'),
(10, 'Fantasy', '2020-07-09 04:54:59', '2020-07-09 04:54:59'),
(11, 'Romance', '2020-07-09 04:55:16', '2020-07-09 04:55:16'),
(12, 'Thriller', '2020-07-09 04:55:41', '2020-07-09 04:55:41'),
(13, 'Noir', '2020-07-09 04:55:46', '2020-07-09 04:55:46'),
(14, 'Mystery', '2020-07-09 04:56:42', '2020-07-09 04:56:42');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `book` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `status` enum('1','2') DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `book`, `user`, `status`, `created`) VALUES
(1, 1, 1, '1', '2020-07-09 08:07:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` enum('1','2') DEFAULT NULL,
  `verify` enum('1','2') DEFAULT NULL,
  `verify_code` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `verify`, `verify_code`, `image`, `created`, `updated`) VALUES
(1, 'Cahyo Ady', 'cahyo4713@gmail.com', '$2b$18$33JNL9svXVyTKfdujaSrEuUIC5e2flgqctgb2lX4ywvNNwlM39d32', '1', '2', NULL, '499e59c20a445547b2c43e062b118bf3cb67.png', '2020-07-09 04:17:40', '2020-07-09 06:47:56'),
(2, 'Ichlas Wardy Gustama', 'ichlaswardy26@gmail.com', '$2b$18$Am38nUo2/58Hdw7hsvfGjO6zRS9VWHyIoJZJ4Z582b5e.0NVI2Xdy', '2', '2', NULL, NULL, '2020-07-09 06:43:12', '2020-07-09 06:45:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `genre` (`genre`),
  ADD KEY `author` (`author`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book` (`book`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_3` FOREIGN KEY (`author`) REFERENCES `authors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_4` FOREIGN KEY (`genre`) REFERENCES `genres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`book`) REFERENCES `books` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
