CREATE DATABASE tscott_db;

USE tscott_db;
CREATE TABLE users ( 
	name VARCHAR (30) NOT NULL,
	username VARCHAR (30) NOT NULL,
    email VARCHAR (30) NOT NULL,
    password VARCHAR (30) NOT NULL
);

USE tscott_db;
INSERT INTO users (name, username, email, password)
VALUES ('tuck jr', 'tuckjr', 'tuckjr@gmail.com', 'pass123' );

USE tscott_db;
CREATE TABLE news ( 
	title VARCHAR (30) NOT NULL,
	topic VARCHAR (30) NOT NULL,
    comments VARCHAR (30) NOT NULL
);

USE tscott_db;
INSERT INTO news (title, topic, comments)
VALUES ('travis gets girls', 'love', 'travis always get the girl' );

USE tscott_db;
CREATE TABLE music ( 
	album VARCHAR (30) NOT NULL,
	songname VARCHAR (30) NOT NULL,
    released INT PRIMARY KEY
);

USE tscott_db;
INSERT INTO music (album, songname, released)
VALUES ('Astroworld', 'sicko mode', 2018);

USE tscott_db;
CREATE TABLE merchandise ( 
	category VARCHAR (30) NOT NULL,
	description VARCHAR (30) NOT NULL,
    rating VARCHAR (30) NOT NULL 
);

USE tscott_db;
INSERT INTO merchandise (category, description, rating)
VALUES ('apparal', 'black', '*****');

USE tscott_db;
CREATE TABLE food ( 
	category VARCHAR (30) NOT NULL,
	description VARCHAR (30) NOT NULL,
    rating VARCHAR (30) NOT NULL 
);

USE tscott_db;
INSERT INTO food (category, description, rating)
VALUES ('Mcdonalds', 'happy meal', '*****');

USE tscott_db;
CREATE TABLE beverages ( 
	category VARCHAR (30) NOT NULL,
	description VARCHAR (30) NOT NULL,
    rating VARCHAR (30) NOT NULL 
);

USE tscott_db;
INSERT INTO beverages (category, description, rating)
VALUES ('cacti', 'pineapple', '**');

USE tscott_db;
SELECT * FROM beverages;