-- =========================================
-- RPG Capstone Database Setup (MySQL)
-- =========================================

CREATE DATABASE IF NOT EXISTS RPG_DB;
USE RPG_DB;

---Tables---

CREATE TABLE IF NOT EXISTS Users (
    user_id BIGINT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password TEXT,
    bio TEXT
);

CREATE TABLE IF NOT EXISTS Games (
    game_id BIGINT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    release_year INT,
    age_rating INT,
    popularity_score INT,
    platform TEXT,
    cover_image_url TEXT
);

CREATE TABLE IF NOT EXISTS Genres (
    genre_id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE IF NOT EXISTS UserLibrary (
    user_id BIGINT,
    game_id BIGINT,
    liked BOOLEAN,
    saved BOOLEAN
);

CREATE TABLE IF NOT EXISTS Folders (
    folder_id BIGINT PRIMARY KEY,
    user_id BIGINT,
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Recommendations (
    user_id BIGINT,
    game_id BIGINT,
    score FLOAT
);

----USER SETUP----

CREATE USER IF NOT EXISTS 'admin_user'@'localhost'
IDENTIFIED BY 'admin_password';

GRANT ALL PRIVILEGES ON RPG_DB.* 
TO 'admin_user'@'localhost';

FLUSH PRIVILEGES;
