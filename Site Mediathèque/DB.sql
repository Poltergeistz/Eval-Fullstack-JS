CREATE DATABASE Mediatheque;

CREATE TABLE Users(
    idUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(45),
    prenom VARCHAR(45),
    adresse VARCHAR (150)
);

CREATE TABLE Medias(
    idMedias INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR (60)
    FK
);

CREATE TABLE Livres(
    idLivres INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    auteur VARCHAR(45),
    titre VARCHAR(150),
    synopsis VARCHAR(300)
    genre VARCHAR(45)
);

CREATE TABLE Films(
    idFilms INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    realisateur VARCHAR(45),
    titre VARCHAR(45),
    duree INT,
    synopsis VARCHAR(300),
    genre VARCHAR(45)
);

CREATE Table Musique(
    idMusique INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artiste VARCHAR(45),
    duree INT,
    genre VARCHAR(45)
);

