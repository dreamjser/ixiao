-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-02-24 18:06:34
-- 服务器版本： 5.6.29
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ixiao`
--

-- --------------------------------------------------------

--
-- 表的结构 `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `cid` int(8) NOT NULL COMMENT '评论id',
  `replyid` int(8) NOT NULL COMMENT '回复评论id',
  `comment` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '评论'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `jokes`
--

CREATE TABLE IF NOT EXISTS `jokes` (
  `jid` int(8) NOT NULL COMMENT '笑话id',
  `jtitle` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '标题',
  `joker` varchar(500) NOT NULL COMMENT '内容'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `relations`
--

CREATE TABLE IF NOT EXISTS `relations` (
  `rid` int(10) NOT NULL COMMENT '关系表id',
  `uid` int(8) NOT NULL COMMENT '用户id',
  `jid` int(8) NOT NULL COMMENT '笑话id',
  `cid` int(8) NOT NULL COMMENT '评论id',
  `zan` int(8) NOT NULL COMMENT '点赞的笑话id',
  `collect` int(8) NOT NULL COMMENT '收藏的笑话id'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(6) NOT NULL COMMENT '用户id',
  `email` varchar(80) CHARACTER SET utf8 NOT NULL COMMENT '邮箱',
  `nickname` varchar(80) CHARACTER SET utf8 NOT NULL COMMENT '昵称',
  `password` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '密码',
  `identity` int(2) NOT NULL DEFAULT '1' COMMENT '身份 1-普通用户 2-管理员 3-超级管理员',
  `createtime` bigint(16) NOT NULL COMMENT '用户创建时间'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`uid`, `email`, `nickname`, `password`, `identity`, `createtime`) VALUES
(5, 'syg@gmail.com', 'syg', '96e79218965eb72c92a549dd5a330112', 1, 1487844140848);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `jokes`
--
ALTER TABLE `jokes`
  ADD PRIMARY KEY (`jid`);

--
-- Indexes for table `relations`
--
ALTER TABLE `relations`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `cid` int(8) NOT NULL AUTO_INCREMENT COMMENT '评论id';
--
-- AUTO_INCREMENT for table `jokes`
--
ALTER TABLE `jokes`
  MODIFY `jid` int(8) NOT NULL AUTO_INCREMENT COMMENT '笑话id';
--
-- AUTO_INCREMENT for table `relations`
--
ALTER TABLE `relations`
  MODIFY `rid` int(10) NOT NULL AUTO_INCREMENT COMMENT '关系表id';
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(6) NOT NULL AUTO_INCREMENT COMMENT '用户id',AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
