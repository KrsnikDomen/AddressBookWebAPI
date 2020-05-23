CREATE TABLE [dbo].[People] (
    [UserID]      INT           IDENTITY (1, 1) NOT NULL,
    [FirstName]   NVARCHAR (50) NOT NULL,
    [LastName]    NVARCHAR (50) NOT NULL,
    [Address]     NVARCHAR (50) NOT NULL,
    [PhoneNumber] VARCHAR (20)  NOT NULL,
    PRIMARY KEY CLUSTERED ([UserID] ASC)
);

INSERT INTO [dbo].[People]([FirstName],[LastName],[Address],[PhoneNumber]) VALUES('Tatum','Cochran','988-8937 Vitae Road','040663064'),('Fuller','David','P.O. Box 919, 6386 Vitae, St.','579104055'),('Stewart','Gray','Ap #292-9412 Mauris Av.','696299138'),('Ethan','Wade','P.O. Box 498, 8777 Augue. Av.','407547298'),('Ori','George','752-7831 Neque Ave','889841617'),('Chastity','Tyler','727 Mauris Rd.','150076324'),('Janna','Bond','530-2942 Eros Avenue','271424628'),('Sylvia','Richards','2630 Lobortis Road','824764840'),('Kamal','Campbell','P.O. Box 710, 1427 Aenean Rd.','937840546'),('Timothy','Osborn','174-8220 Feugiat. Rd.','375258026');
INSERT INTO [dbo].[People]([FirstName],[LastName],[Address],[PhoneNumber]) VALUES('Geraldine','Young','390 Penatibus St.','669790534'),('Rebekah','Gibson','P.O. Box 124, 3926 Tristique Street','302971150'),('Xenos','Downs','896-2550 Sociis Ave','380808119'),('Patrick','Franks','761-9931 Dolor Road','397956841'),('Ursula','Alford','P.O. Box 502, 6211 Nam Rd.','501446901'),('Silas','Alston','539-7665 Quisque Street','139671748'),('Emerald','Henry','Ap #411-2131 Ullamcorper. Avenue','856835914'),('Lance','Wise','P.O. Box 788, 1841 Nunc Av.','952783006'),('Samson','Byers','Ap #551-1553 Ipsum Street','496130202'),('Melissa','Trujillo','4272 Cursus Road','587856450');
INSERT INTO [dbo].[People]([FirstName],[LastName],[Address],[PhoneNumber]) VALUES('Hayfa','Gallagher','1203 Urna. Av.','654695228'),('Dorothy','Ingram','8508 Laoreet Avenue','425894230'),('Melissa','Mcknight','Ap #920-2460 Mauris St.','691765906'),('Heidi','Wilder','7187 Feugiat Rd.','138847227'),('Omar','Conrad','4687 Habitant Rd.','690892435'),('Anastasia','Santana','4643 Quisque Avenue','218788861'),('Hadassah','Mathews','2561 Neque. Avenue','343490079'),('Evangeline','Clements','2831 Sociis Street','667322180'),('Lucy','Chang','699-7983 Gravida Road','586322954'),('Penelope','Todd','4784 Dolor St.','158759912');
