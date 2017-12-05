set names utf8;
DROP DATABASE IF EXISTS lingluo;
create database lingluo charset=utf8;
use lingluo;
create table ll_carousel(
	cid INT primary key not null auto_increment,
	img varchar(128) default null,
	title varchar(64) default null,
	href varchar(128) default null
);


insert into ll_carousel values(1,"img/index/banner/banner1.jpg","轮播广告1","0000000");
insert into ll_carousel values(2,"img/index/banner/banner2.jpg","轮播广告2","0000000");
insert into ll_carousel values(3,"img/index/banner/banner3.jpg","轮播广告3","0000000");
