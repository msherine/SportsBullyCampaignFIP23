-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 19, 2023 at 08:55 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `articles`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `title` varchar(500) NOT NULL,
  `article_desc` varchar(500) NOT NULL,
  `text` text NOT NULL,
  `article_img` varchar(50) NOT NULL,
  `img_big` varchar(100) NOT NULL DEFAULT 'article1_big.jpg',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `article_desc`, `text`, `article_img`, `img_big`, `created_at`, `updated_at`) VALUES
(1, 'Don’t Let Bullying Ruin Your Child’s Swimming Lessons', 'How to protect your child from being bullied in swimming lessons. Useful tips for Moms.', '<p><em>Swimming is a valuable skill that not only provides health benefits but can also be a fun activity for children. However, like any other sport or activity, it is not immune to bullying. Bullying in swimming can occur in various forms, including physical, verbal, or emotional abuse, and it can have long-term negative effects on a child&rsquo;s self-esteem and confidence. In this article, we will discuss ways to protect a child from being bullied in swimming lessons.</em></p>\r\n<p>&nbsp;</p>\r\n<p>1. Teach your child to recognize and report bullying</p>\r\n<p>One of the most important things you can do to protect your child from bullying is to teach them how to recognize it and report it. Talk to your child about what bullying is and how it can manifest itself in swimming lessons. Encourage your child to come to you or a trusted adult if they feel uncomfortable or threatened in any way. It is important to emphasize that reporting bullying is not tattling but a necessary step to stop the behavior and keep your child safe.</p>\r\n<p>&nbsp;</p>\r\n<p>2. Establish open communication with the swim instructor</p>\r\n<p>It is crucial to establish a good relationship with the swim instructor to ensure that they are aware of the potential for bullying and are taking steps to prevent it. Reach out to the instructor before the lessons begin to discuss your child&rsquo;s needs and any concerns you may have. Ask the instructor what their bullying prevention policy is, and how they handle incidents of bullying. Be sure to ask about their training and experience working with children and how they handle challenging behavior. It is important to feel confident in the instructor&rsquo;s ability to maintain a safe and positive learning environment for your child.</p>\r\n<p>&nbsp;</p>\r\n<p>3. Attend swimming lessons with your child</p>\r\n<p>One way to protect your child from bullying is to attend swimming lessons with them. This not only allows you to observe the class and the interactions between the children, but it also sends a message to your child that you are there to support and protect them. By being present, you can also interact with other parents and children and observe their behavior. This can give you insight into any potential issues and allow you to address them with the instructor or other parents.</p>\r\n<p>&nbsp;</p>\r\n<p>4. Encourage positive relationships with other children</p>\r\n<p>Encourage your child to develop positive relationships with their peers in swimming lessons. Help them to understand the importance of treating others with respect and kindness and modeling appropriate behavior. Encourage your child to be inclusive and friendly, and to stand up for others if they see them being bullied. This can help to create a positive and supportive environment and can prevent bullying from occurring.</p>\r\n<p>&nbsp;</p>\r\n<p>5. Build your child\'s self-esteem and confidence</p>\r\n<p>Bullying can have a significant impact on a child\'s self-esteem and confidence. Building your child\'s self-esteem and confidence can help them to be more resilient in the face of bullying. Encourage your child to participate in activities outside of swimming, such as sports or music, where they can develop skills and talents. Praise your child for their efforts and accomplishments, and encourage them to set goals and work towards them. Help your child to develop a positive self-image and to understand that their worth is not determined by the opinions of others.</p>\r\n<p>&nbsp;</p>\r\n<p>In conclusion, if your child is experiencing bullying in swimming lessons, it is important to take action immediately. By working together with the swim instructor, other parents, and the swim school administration, you can create a safe and supportive environment for all children. It is essential to teach your child to recognize and report bullying, encourage positive relationships with other children, and build their self-esteem and confidence. With these efforts, you can protect your child from being bullied in swimming lessons and ensure that they have a positive and enjoyable experience learning to swim.</p>', '1681894253article1.jpg', '1681894253article1_big.jpg', '2023-04-06 13:53:53', '2023-04-19 08:50:53'),
(2, 'Making Waves: Addressing Bullying in Competitive Swimming', 'Why bullying occurs in competitive swimming?', '<p>Competitive swimming is a sport that requires discipline, dedication, and hard work. Athletes devote countless hours to perfecting their techniques, improving their speed, and building their endurance. However, like any other sport, competitive swimming has its share of challenges, including the issue of bullying.</p>\r\n<p>&nbsp;</p>\r\n<p>Bullying can occur in any setting, but it is particularly prevalent in competitive sports. In swimming, bullying can take many forms, such as verbal abuse, exclusion, and physical aggression. Unfortunately, bullying can have serious consequences for both the victim and the team as a whole.</p>\r\n<p>&nbsp;</p>\r\n<p>For the victim, bullying can lead to a range of negative effects, including anxiety, depression, and low self-esteem. It can also affect their performance in the pool, making it difficult for them to focus on their training and achieve their goals. For the team, bullying can create a toxic environment that undermines team cohesion and morale, leading to a decline in performance.</p>\r\n<p>&nbsp;</p>\r\n<p>To address the issue of bullying in competitive swimming, there are several steps that coaches, parents, and swimmers can take.</p>\r\n<p>&nbsp;</p>\r\n<p>First, coaches should establish clear guidelines and expectations for behavior both in and out of the pool. This includes a zero-tolerance policy for bullying and a commitment to addressing any incidents that occur. Coaches should also work with their swimmers to develop positive team dynamics and promote a culture of respect and support.</p>\r\n<p>&nbsp;</p>\r\n<p>Parents also have a crucial role to play in addressing bullying in swimming. They should be vigilant for signs of bullying and take action if they suspect their child is a victim. They should also model positive behavior and encourage their child to be respectful and supportive of their teammates.</p>\r\n<p>&nbsp;</p>\r\n<p>Finally, swimmers themselves can make a difference by standing up to bullying and supporting their teammates. This can be as simple as speaking up when they see bullying occur, offering support and encouragement to their teammates, and being mindful of their own behavior.</p>\r\n<p>&nbsp;</p>\r\n<p>It is also important to recognize that addressing bullying in competitive swimming is an ongoing process that requires commitment and effort from everyone involved. Coaches, parents, and swimmers should work together to create a safe and positive environment that supports the growth and development of all athletes.</p>\r\n<p>&nbsp;</p>\r\n<p>In conclusion, bullying is a serious issue in competitive swimming that can have negative consequences for both individuals and teams. However, by taking proactive steps to address the issue, coaches, parents, and swimmers can create a safe and supportive environment that promotes healthy competition and positive team dynamics. Together, we can make waves and build a better future for all swimmers.</p>', '1681270540article2.jpg', '1681270540article2_big.jpg', '2023-04-06 13:53:53', '2023-04-12 03:35:40'),
(3, '‘Belly Flop Challenge’ gains momentum', 'The recent popularity of the ‘Belly Flop Challenge’ raises awareness about bullying in swimming.', '<p>The Belly Flop Challenge has taken social media by storm, with people all over the world participating in the viral trend. The challenge involves shooting a video of oneself speaking out against bullying in swimming, followed by a TikTok video of performing a belly flop. It is a fun and light-hearted way to draw attention to the serious issue of bullying in swimming and has gained significant momentum in recent months.</p>\r\n<p>The Belly Flop Challenge was started by a group of swimmers who wanted to raise awareness about bullying in their sport. The idea behind the challenge is to encourage people to speak out against bullying and show their support for those who have been bullied in swimming. By performing a belly flop, participants are demonstrating their commitment to standing up against bullying and promoting a culture of respect and support.</p>\r\n<p>The challenge has become increasingly popular on social media, with thousands of people from all over the world participating. Many of these participants are swimmers themselves, who have experienced bullying firsthand and are passionate about promoting positive change in their sport. However, the challenge has also attracted a wider audience, including people who may not be swimmers but want to show their support for the cause.</p>\r\n<p>The Belly Flop Challenge has also received support from swimming organizations and professionals. Many coaches and athletes have taken part in the challenge, sharing their own experiences with bullying and encouraging others to speak out. Swimming organizations have also endorsed the challenge, recognizing its potential to raise awareness and promote positive change.</p>\r\n<p>But why is the Belly Flop Challenge so effective in fighting against bullying in swimming? One reason is that it is a fun and engaging way to draw attention to the issue. By combining a serious message with a lighthearted and entertaining activity, the challenge is able to capture people\'s attention and make them more receptive to the message.</p>\r\n<p>Additionally, the challenge has a viral element to it, which helps to spread the message far and wide. As more and more people participate in the challenge and share their videos on social media, the message reaches a wider audience and gains momentum.</p>\r\n<p>Most importantly, the Belly Flop Challenge encourages people to speak out against bullying and show their support for those who have been affected. By promoting a culture of respect and support, the challenge helps to create a safer and more inclusive environment in swimming.</p>\r\n<p>In conclusion, the Belly Flop Challenge has become a powerful tool in the fight against bullying in swimming. By encouraging people to speak out and show their support, the challenge has raised awareness about the issue and promoted positive change. As the challenge continues to gain momentum, it is hoped that it will inspire even more people to take action and create a brighter future for all swimmers.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', '1681894396article3.jpg', '1681894396article3_big.jpg', '2023-04-06 13:53:53', '2023-04-19 08:53:16');

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `title` varchar(300) NOT NULL,
  `desc` varchar(300) NOT NULL,
  `hashtags` varchar(300) NOT NULL,
  `details` varchar(300) NOT NULL,
  `thumbnail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `title`, `desc`, `hashtags`, `details`, `thumbnail`) VALUES
(1, 'Belly Flop Challenge', 'Dive into the pool with the biggest loudest & most awkward belly flop! Post short video with the hashtags!', '#SwimToEmerge #BellyFlopChallenge #BuddyNotBully', '2023.Feb.15 / London Downtown', 'visuals1.jpg'),
(2, 'Swim to Emerge', 'A “Swim to EMERGE” swim-a-thon event carried out at gyms/swim clubs in the city to raise funds for the anti-bullying initiative and awareness.', '#SwimToEmerge #BellyFlopChallenge #BuddyNotBully', '2023.Feb.15 / London Downtown', 'visuals2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `user` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `article_id` smallint(6) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user`, `content`, `article_id`, `created_at`, `updated_at`) VALUES
(20, 'mandy', 'BellyFlop is real fun! I liked it!yhiljkl;', 3, '2023-04-10 20:38:19', '2023-04-14 00:06:02'),
(29, 'Hannah', 'I had been bullied throughout my youth, due to aphasia acquired at childbirth which affected my speech and ability to appropriately interact with peers, but the worst bullying experiences occurred when I was in an aquatics club and high school water polo/swim team. I loved swimming and had hoped to continue competitive swimming well beyond high school, but the way I was treated made it an unpleasant experience. I had great coaches on both the aquatics club and high school team, but I felt they were either blind to what was happening or too powerless to deal with mean-spirited teammates. I had always tried to get along with people, but those kids were intolerant of my awkwardness.', 1, '2023-04-12 03:44:48', '2023-04-13 03:18:56'),
(30, 'Marina Avdeeva', 'Sports bullying is terrible. I have seen boys on different teams belittle each other and girls tear other girls down for weight or development… it’s terrible. Thank you for shedding light on this important issue.', 3, '2023-04-12 03:46:14', '2023-04-12 03:46:14'),
(35, 'New Comment', 'This was a very helpful article!', 3, '2023-04-13 22:56:01', '2023-04-13 22:56:01'),
(39, 'user', 'yulrieokrehk', 20, '2023-04-13 23:15:01', '2023-04-13 23:15:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
