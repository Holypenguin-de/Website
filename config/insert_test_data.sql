USE holypenguin;

DELETE FROM Users;
DELETE FROM Games;
DELETE FROM User2Game;

INSERT INTO Users (usr_ID_PK, usr_Firstname, usr_Lastname, usr_Password, usr_Email, usr_Nickname, usr_Token, usr_Admin)
VALUES (1, "Max", "Mustermann", "$2a$10$JZTvSsKQ5KlU0s8iK0dLvuqyeV2r/qpnnS7TK5BsL.QuuZQ9padMm", "max.musterman@mail.com", "maxi", "#ufA@v5?wBKegsSXGLgFxgJ$-5_pma4fH#GBtBWZTup#zn^Qtp=L2LJ#AjcHecfLfdf5hu7rnun#ts3f2wMT%bYq@zC%sSa9a^jceQfz7#X&+Ch6^r4?fHMs@+&5sK?z", 0),
(2, "Peter", "Hans", "$2a$10$JZTvSsKQ5KlU0s8iK0dLvuqyeV2r/qpnnS7TK5BsL.QuuZQ9padMm", "peter.hans@mail.com", "peha", "_+!nGUn9?d5?_c3dhg3a@4228#MbhV%8C8JD^L*-^WEj6gy5UNWFsVJ!ab8==4Bx9MeJka7cvE5z&m!z5#VGB#EQsU$eG_D$!T%G*7-tdXdeR@d#LgnJABwLb^yTWnMU", 0),
(3, "Ursula", "Maier", "$2a$10$JZTvSsKQ5KlU0s8iK0dLvuqyeV2r/qpnnS7TK5BsL.QuuZQ9padMm", "ursula.maier@mail.com", "uli", "j5Nn#824tx6nC*7s*P7Djzp=DeZ&5M4Rx+ka!47&YfK_7xvNM7nSKHnq?EBg845%_q+qFzjCsqSpFPPqd3$WBR$$8Lm4#JaQSkC_aPFGe#qkP@u_qTF!&ZefUUbc4y6E", 1);

INSERT INTO Games (gm_ID_PK, gm_Name, gm_Version, gm_Type)
VALUES (1, "Minecraft", "1.8.9", "Vanilla"),
(2, "Minecraft", "1.8.9", "Forge"),
(3, "Minecraft", "1.8.9", "Spigot"),
(4, "Minecraft", "1.17.1", "Vanilla"),
(5, "Minecraft", "1.17.1", "Spigot"),
(6, "Terraria", NULL, NULL);

INSERT INTO User2Game (usr2gm_ID_PK, gm_ID_FK, usr_ID_FK, usr2gm_Port)
VALUES (1, 1, 1, "20001"),
(2, 5, 1, "20002"),
(3, 6, 2, "20003"),
(4, 3, 2, "20004"),
(5, 3, 3, "20005");

SELECT * FROM Users;
SELECT * FROM Games;
SELECT * FROM User2Game;
