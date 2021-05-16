SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

--
-- Database: `db_`
--

CREATE TABLE users (
    id INT(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(40) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


CREATE TABLE scopes (
    id INT(20) NOT NULL,
    scope VARCHAR(150) NOT NULL,
    user_id INT(20),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) 
);

ALTER TABLE scopes
  ADD PRIMARY KEY (id);

ALTER TABLE scopes
  MODIFY id int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

INSERT INTO users (username, password) VALUES ('user', 'user');
SET @myID = @@IDENTITY;
INSERT INTO scopes (scope, user_id) VALUES ('user', @myID);

INSERT INTO users (username, password) VALUES ('admin', 'admin');
SET @myID2 = @@IDENTITY;
INSERT INTO scopes (scope, user_id) VALUES ('admin', @myID2);


CREATE TABLE movies (
  id INT(20) NOT NULL,
  name varchar(100) NOT NULL
);


INSERT INTO movies (id, name) VALUES
(1, 'Saw'),
(2, 'Lord of the ring'),
(3, 'Pulp Fiction'),
(4, 'Harry Potter');


ALTER TABLE movies
  ADD PRIMARY KEY (id);

ALTER TABLE movies
  MODIFY id int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

