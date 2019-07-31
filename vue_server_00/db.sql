USE xz;
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));

INSERT INTO xz_login VALUES(null,'jerry',md5('123'));
#为商品表添加一列
 ALTER TABLE xz_laptop ADD img_url VARCHAR(255);
#每一个商品图片 
 UPDATE xz_laptop SET img_url = '01.jpg';



