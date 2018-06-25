-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-06-11 10:51:37
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phptest`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(4) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimgurl` varchar(300) NOT NULL,
  `newscontent` text NOT NULL,
  `newsadddate` datetime NOT NULL,
  `newssort` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstitle`, `newsimgurl`, `newscontent`, `newsadddate`, `newssort`) VALUES
(38, '前低处神奇逆转 万亿私募资金候场封杀下跌空间', 'http://t11.baidu.com/it/u=http://d.ifengimg.com/w150_h106/p1.ifengimg.com/ifengimcp/pic/20160527/228246ba4a1adb97c3fd_size103_w961_h688.jpg&fm=36', '昨日沪指一度跌至2780.76点，盘中创下近两个月来的新低，但尾盘神奇逆转翻红，再度拉回2800点以上。这一幕此前在本月已经上演过3次，沪指均在跌至2780点附近后实现当日反转。大盘在2800点拉锯战中表现出了韧性。尽管5月中旬以来A股面临复杂的基本面，美联储加息预期开始升温，6月份又面临解禁洪峰，但A股对上述利空反应并不激烈。A股自去年6月份以来，因为泡沫破裂和去杠杆，曾有过3次大震荡，目前也有众多市场人士再次等待股市大跌，期盼在沪指2500点甚至更低点位抄底，但A股在2800点一带展现出市场自身的抗跌力量。昨日两市主要股指“深V”反转，沪指早盘一度跌至2780.76点，盘中创下近两个月新低，但尾盘指数神奇逆转。截至收盘，上证综指报收于2822.44点，上涨7.35点，涨幅0.26%；深证成指报收于9826.14点，上41.55点，涨幅0.42%；创业板指数报收于2086.01点，上涨18.75点，涨幅0.91%。地量成为近期盘面最重要的特征。值得关注的是，两市昨日共成交3914亿元，而在2015年高峰时两市单日成交曾超过2万亿元，目前的单日成交仅为高峰时期的两成。沪市昨日成交1271亿元，而在高峰时期沪市单日成交曾达到过1.3万亿元，这也意味着沪市目前的单日成交仅为高峰时期的一成。分析人士认为，地量意味着市场缺乏增量资金，市场情绪不高，但另一方面也意味着空头势力的衰弱，多空双方暂时达成平衡，市场底部往往伴随地量盘整。市场对人民币兑美元贬值的反应开始钝化。由于美联储加息预期升温，近期美元指数已经连续3周上涨，人民币兑美元汇率中间价跌至5年新低。2015年8月和今年1月，A股的两次大幅震荡均与人民币快速贬值有不可分割的关系，但A股在2800点一带对人民币贬值预期的反应变得钝化。重阳投资总裁王庆认为，人民币贬值预期对股市的影响将会越来越弱，因为股市对人民币贬值已经有过两次很强的反应，金融市场和股市的重要特点是一旦对一个事件有了预期，后续影响就会减弱。A股在2800点一带显现出的韧性，部分也来自蓝筹股结构性低估的支撑。统计数据显示，截至昨日收盘，沪深300整体市盈率为11.63倍，创业板整体市盈率为69倍。部分大户已经开始建仓，本周二有两融大户融资买入金额超过10亿元抄底民生银行。部分价值型私募也在近期下跌中抄底了白酒、水电、家电等现金充足、低估值、高分红的蓝筹股。近期市场情绪悲观，当前私募的整体仓位依然较低，万亿私募资金空仓等待，也在一定程度上封杀了大盘的下跌空间。', '2016-05-28 16:51:54', '财经'),
(39, '如果苹果真的发布一款能跑iOS应用的MacBook，你买不买?', 'http://t10.baidu.com/it/u=http://upload.techweb.com.cn/2016/0527/1464320054565.jpg&fm=36', '&nbsp;&nbsp;这不仅有助于 MacBook 销量的提升，同时也能够让 iOS 的生态系统更加成熟。在今年的 I/O 大会上，谷歌表示 Chromebook 和 Chrome OS 在未来将会支持 Android 应用。外媒 SlashGear 于日前表示，苹果应该采用类似的模式，即让 iOS 应用在 MacBook 上运行。如果苹果真的发布一款能跑iOS应用的MacBook 你买不买?你可能会觉得这是一个非常疯狂的想法，事实上，如果苹果真的开发一款能够运行 iOS应用的笔记本电脑产品的话，不仅有助于 MacBook 销量的提升，同时也能够让 iOS 的生态系统更加成熟。</br>不过，要想在 MacBook 上运行 iOS 原生应用程序的话，苹果还需要考虑移动处理器的问题，这样的处理器跟传统的 PC 处理器是不同的。', '2016-06-11 16:43:30', '科技'),
(40, 'LG平板手机Stylus 2 Plus发布 骁龙430处理器', 'http://t10.baidu.com/it/u=http://img2.tgbusdata.cn/v2/thumb/jpg/REJEQyw1ODAsMTAwLDQsMywxLC0xLDAscms1MCw2MS4xNTIuMjQyLjEx/u/android.tgbus.com/shouji/UploadFiles_6533/201605/2016052710124654.jpg&fm=36', '&nbsp;&nbsp;【安卓中文网】LG目前最为头疼的问题就是LG G5的叫好不叫座，虽然所有人都对于它的模块化设计赞誉有加，但是无奈的是大家在选择时都有些犹豫，而且竞争对手Galaxy S7也比较强大。不过好在是LG并不是只有G5一款新机。昨天(5月26日)LG在台湾市场推出了Stylus 2 Plus平板手机，与它一同到来的还有Stylus 2和LG K8。根据官网上公布的新闻稿，三款手机均支持双卡双待。其配备了塑料机身和铝制中框，可选棕、蓝、灰3色。其中Stylus 2 Plus的规格要比Stylus 2更高一些，并将于6月下旬开售。</br>&nbsp;&nbsp;Stylus 2 Plus配备了5.7英寸的全高清(1080×1920)显示屏、高通骁龙430八核处理器(1.2GHz Cortex-A53)、3GB RAM + 32GB ROM、前置800万/后置1600万像素摄像头(支持自动对焦)。', '2016-05-28 17:15:32', '科技'),
(41, '不再破音！汪涵《想唱》飙高音雪耻震惊全场', 'http://t11.baidu.com/it/u=http://img5.cache.netease.com/ent/2016/5/27/201605270741461ff66.jpg&fm=36', '&nbsp;&nbsp;网易娱乐5月27日报道 汪涵唱不了高音？自从汪涵在首期《我想和你唱》中亮嗓破音之后，涵哥到底能不能唱高音，一直是万千网友的讨论中心。加之《我想和你唱》节目嘉宾流动式的特色，每周都有不同的华语乐坛优秀歌手在面前尽情嗨唱，连韩红都数次犯歌瘾，生活中相当喜爱唱歌的汪涵，难道不会动心？仿若为了解开网友心中的疑惑，汪涵在本周节目中，终于再一次唱歌了，而且，还飙出了十五度音域的超高音</br>&nbsp;&nbsp;湖南卫视大型音乐互动综艺《我想和你唱》本周将迎情歌专场，不仅有杨钰莹、古巨基、好妹妹乐队坐阵，表示“非常喜欢唱情歌”的韩红在现场也嗨得根本停不下来，但这次她既没有撒娇、也没有拉着嘉宾求合唱，而是脑洞大开，屡次邀请搭档汪涵同唱高音。', '2016-05-28 17:17:57', '娱乐'),
(42, '中俄联合反导计算机演习举行 俄方公布大量细节', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/27/146431881094635552_620_1000.JPEG&fm=36', '&nbsp;&nbsp;国际在线专稿：据俄罗斯国防部网站5月26日发布的消息，“空天安全-2016”中俄首次首长司令部联合反导计算机演习在位于莫斯科的俄国防部空天防御部队科研中心举行，该演习将持续至5月28日，演习不针对任何第三方。</br>&nbsp;&nbsp;消息称，中俄首次首长司令部联合反导计算机演习的主要目的是双方通过共同演练防空和反导战役部署联合行动，应对弹道导弹和巡航导弹对两国领土的突发性和挑衅性攻击。', '2016-05-28 17:19:13', '军事'),
(43, '国足迎晋级12强赛后首场热身 将战加勒比海劲旅', 'http://t11.baidu.com/it/u=http://news.xinhuanet.com/sports/2016-05/26/129018828_14642559932031n.jpg&fm=36', '&nbsp;&nbsp;北京时间6月3日，国足将在秦皇岛奥体中心迎来晋级12强赛后的首场热身赛事，迎战来自加勒比海的劲旅，现世界排名第53的特立尼达和多巴哥。由乐视体育和永乐文化合资成立的乐加乐体育将独家代理本场比赛的票务，球迷可以登陆永乐票务官网进行购买，而乐视体育也将继续带来本场比赛的高清</br>&nbsp;&nbsp;3月29日，国足在西安惊险晋级，时隔三届世界杯再度进入世预赛亚洲区最后阶段的比赛。9月1日，国足就将迎来自己的十二强赛首个对手——目前排名世界第54的韩国队。此次与特立尼达和多巴哥的热身赛事对于国足来说练兵意义重大。', '2016-05-28 17:20:34', '体育'),
(44, '本菲卡巴西妖星即将加盟上海申花', 'http://t11.baidu.com/it/u=http://ngzb.gxnews.com.cn/res/1/20160526/13851464214648551.jpg&fm=37', '&nbsp;&nbsp;新华社里斯本5月24日体育专电 （报道员陈柏乔）据多家葡萄牙媒体24日报道，葡超冠军本菲卡队与上海绿地申花队关于当红新星塔利斯卡的转会谈判已接近尾声，被誉为“新里瓦尔多”的巴西小将在今夏将以2500万欧元的转会费登陆中国。</br>&nbsp;&nbsp;现年22岁的塔利斯卡身高1米90，在场上司职攻击型中场，于2014年7月以400万欧元的身价加盟本菲卡后，在两个赛季中出场76次，攻入20球，帮助球队拿下了5座冠军奖杯。精准的左脚任意球及弧线球远射是其得分利器，在本赛季欧冠联赛四分之一决赛主场对阵拜仁慕尼黑的比赛中，塔利斯卡以一记精彩的左脚直接任意球攻破了诺伊尔把守的大门，帮助本菲卡队战平劲敌。', '2016-05-28 17:21:58', '体育'),
(45, '刘翔工作室开张在即 转型娱乐以公益为先', 'http://t12.baidu.com/it/u=http://img1.gtimg.com/sports/pics/hv1/144/64/2075/134943339.jpg&fm=36', '自从宣布退役后，中国跨栏飞人刘翔的“第二次人生”，开头并不顺利。他与演员葛天的闪婚和之后的闪离，消耗着多年来用金牌和成绩打造的形象和人气。但随着新女友吴莎的出现，从前那个一脸轻松的刘翔好像又回来了。昨天他在微博证实，自己的工作室即将开张。这或许是他迈向人生“第二春”的第一步。昨天刘翔在微博转发了《刘翔-LX工作室》的博文，称“我的地盘听你的”，正式向大家推出了自己的工作室。但刘翔工作室的业务范围是什么，目前还是谜。', '2016-05-28 17:54:06', '体育'),
(46, '5月27日你要知道的7个股市消息', 'http://t12.baidu.com/it/u=http://img1.jiemian.com/101/original/20160527/146430745674747100_a580x330.jpg&fm=36', '【A股昨日净流出49亿元，外资连续9日入场抢筹】5月26日，沪深两市合计资金净流出49.86亿元。行业板块方面，材料业净流入额最高，为16.20亿元；工业板块净流出额最多，达18.73亿元。个股中，多氟多（002407.SZ）净流入额居两市之首，为4.29亿元；多伦科技（603528.SH）则净流出达7.23亿元。点评：昨日，A股走势颇为戏剧。早盘冲高回落，午后又大幅拉升，为市场保留一丝人气。资金面上，昨日A股现资金小幅净流出。较前几日相比，资金离场情绪有所缓解。与此同时，外资热情似乎不减，已经连续9日入场抢筹。可惜的是，这段时间内市场成交量一直未能有所突破，因而A股上升空间有限，投资者还需保持谨慎。', '2016-05-28 17:55:13', '财经'),
(47, '联想巨亏1.28亿美元 杨元庆：我的年度奖金不要了！', 'http://t10.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0527/27/4/62606034/474x268.jpg&fm=36', '财报显示，截至2016年3月31日止，联想集团全年收入为449亿美元，同比减少3%，若除去汇率因素影响，同比增长3%；净亏损为1.28亿美元，去年财年净盈利录得8.29亿美元。若除去重组成本和一次性的费用共9.23亿美元及会计处理衍生的与并购有关的非现金费用，集团的持续经营除税前溢利录得9.76亿美元，去年财年为11.39亿美元，下降主要是由于个人计算机需求放缓和集团智能手机业务的产品转型所致。其中，个人计算机集团的收入同比下跌11%至296.46亿美元。业内人士表示，这是由于PC市场整体需求下滑导致的。', '2016-05-28 17:56:01', '财经'),
(48, '美军红旗军演代入感强画镰刀斧头', 'http://t12.baidu.com/it/u=http://www.cnr.cn/js2014/jstp/jstph/20160527/W020160527363126340822.jpg&fm=36', '美国红旗军演是美国本国空军和其盟国空军联合演习的一个大型平台，全美的各大空军部队都会派机参加在内里斯空军基地举行的演习。在最近的红旗军演中，一架来自阿拉斯加埃尔门多夫空军基地空军基地的F16战机（垂尾AK）扮演敌方战机，连进气口的罩上都画了苏联的红星和镰刀斧头标志，代入感十足。', '2016-05-28 17:57:05', '军事'),
(49, '斯诺登揭秘：远离窃听很简单 请拆了手机麦克和相机', 'http://t10.baidu.com/it/u=http://upload1.techweb.com.cn/s/320/2016/0527/1464315561639.jpg&fm=36', '美国国防部前雇员爱德华·斯诺登（Edward Snowden）因为披露美英的监视项目而名声大噪，不过，代价是迄今他也不能回到祖国，只能在外避难。虽然寓居他乡，但因为有民间神秘力量支持，斯诺登还会抛头露面，曝光一些所谓不为人知的事实。在近日的一段采访中，斯诺登演示了如何让手机远离被窃听或者说监视。斯诺登称，据他了解，智能手机的麦克风和摄像头多有后门程序，方便某些情报机构进行资料抓取，因为多数软件、系统本身是不安全的。', '2016-05-28 17:59:07', '科技'),
(50, '《好先生》首曝片尾曲 量身打造孙红雷走心', 'http://t10.baidu.com/it/u=http://ent.news.cn/2016-05/27/129021050_14643146099761n.jpg&fm=36', '由李潇、于淼、张英姬编剧，张晓波执导，张为为任制片人，孙红雷、江疏影、王耀庆、车晓实力主演，张艺兴、关晓彤特别出演的都市情感大戏《好先生》，今日首次曝光了片尾曲《路远》。该片尾曲专门为《好先生》精心量身打造，由谭旋作词作曲，蔡科俊编曲，张磊演唱。不仅歌曲的名字《路远》与剧中男主角孙红雷饰演的“陆远”谐音相同，歌词更是片中主角的心理写照', '2016-05-28 23:00:33', '娱乐'),
(51, '《致单身男女》双海报曝光 上演恋爱星球之战', 'http://t11.baidu.com/it/u=http://ent.news.cn/2016-05/27/129020358_14643095312491n.jpg&fm=36', '&nbsp;&nbsp;由“热播港剧之父”梁家树监制，金牌导演蔡晶盛、洪金泼执导，寰亚时代、海润影视、风雷动文化传媒共同出品，活力天行联合出品，陆毅、张俪、耿乐、李曼领衔主演的都市虐心时尚爱情电视剧《致单身男女》正在深圳卫视热播。今日，该剧曝光了两款“恋爱星球”抉择版海报，张俪饰演的程子欣面临艰难抉择，心中摇摆不定。陆毅饰演的‘温柔暖男’方启宏与耿乐饰演的‘霸道总裁’时刻准备着为争夺程子欣而展开激烈的爱情斗争。', '2016-05-28 23:02:24', '娱乐'),
(52, '笔笔十年后再过戏瘾 被问杨幂传闻：她开心就够', 'http://t10.baidu.com/it/u=http://img002.21cnimg.com/photos/album/20160527/m600/4B853C3C4BA20F3281DBACAF5E4C8692.jpeg&fm=36', '&nbsp;&nbsp;大洋网-广州日报5月27日报道 前日，即将于7月8日上映的警匪巨制《寒战2》在京举办发布会，首度曝光推广曲《两陷》MV和制作特辑。这首歌由周笔畅作曲并演唱，同时，她本人也在阔别大银幕十年之后再度“触电”，在《寒战2》中小露头角。', '2016-05-28 23:03:38', '娱乐'),
(53, 'nodejs添加新闻', 'http://f.hiphotos.baidu.com/news/q%3D100/sign=95b3c4c1afefce1bec2bccca9f51f3e8/7e3e6709c93d70cf3e9b2d3af0dcd100baa12ba7.jpg', '这个是nodejs后台添加的新闻测试页面测试内容是否能够更改', '2016-06-11 16:29:58', '体育');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;