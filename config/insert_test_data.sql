USE holypenguin;

INSERT INTO Users (usr_Firstname, usr_Lastname, usr_Password, usr_Email, usr_Nickname, usr_Admin)
VALUES ("Max", "Mustermann", "Test123", "max.musterman@mail.com", "maxi", 0),
("Peter", "Hans", "1233Test", "peter.hans@mail.com", "peha", 0),
("Ursula", "Maier", "Ursula12234", "ursula.maier@mail.com", "uli", 1);

SELECT * FROM Users;
