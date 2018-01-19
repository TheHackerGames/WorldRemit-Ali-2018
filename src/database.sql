CREATE TABLE [dbo].[Category](
	[Code] [varchar](50) NOT NULL,
	[Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[Contact](
	[HeroId] [int] NOT NULL,
	[VolunteerId] [int] NOT NULL,
 CONSTRAINT [PK_Contact] PRIMARY KEY CLUSTERED 
(
	[HeroId] ASC,
	[VolunteerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[Hero](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](128) NOT NULL,
	[Address] [varchar](256) NOT NULL,
	[Location] [geography] NOT NULL,
	[AlexaHeroId] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Hero] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[HeroCategory](
	[HeroId] [int] NOT NULL,
	[CategoryCode] [varchar](50) NOT NULL,
 CONSTRAINT [PK_HeroCategory] PRIMARY KEY CLUSTERED 
(
	[HeroId] ASC,
	[CategoryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[Journal](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HeroId] [int] NOT NULL,
	[EntryType] [varchar](50) NOT NULL,
	[Title] [varchar](256) NOT NULL,
	[Description] [varchar](512) NULL,
	[Duration] [varchar](50) NULL,
	[DateTime] [datetime] NOT NULL,
 CONSTRAINT [PK_Journal] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[JournalEntryType](
	[Code] [varchar](50) NOT NULL,
	[IconUrl] [varchar](1084) NOT NULL,
	[Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_JournalEntryType] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[Volunteer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](128) NOT NULL,
	[Address] [varchar](256) NOT NULL,
	[Location] [geography] NOT NULL,
	[ContactNumber] [varchar](50) NOT NULL,
	[Description] [varchar](256) NOT NULL,
	[ProfilePicture] [varchar](1084) NULL,
	[Rating] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Volunteer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

CREATE TABLE [dbo].[VolunteerCategory](
	[VolunteerId] [int] NOT NULL,
	[CategoryCode] [varchar](50) NOT NULL,
 CONSTRAINT [PK_VolunteerCategory] PRIMARY KEY CLUSTERED 
(
	[VolunteerId] ASC,
	[CategoryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

ALTER TABLE [dbo].[Contact]  WITH CHECK ADD  CONSTRAINT [FK_Contact_Hero] FOREIGN KEY([HeroId])
REFERENCES [dbo].[Hero] ([Id])
GO

ALTER TABLE [dbo].[Contact] CHECK CONSTRAINT [FK_Contact_Hero]
GO

ALTER TABLE [dbo].[Contact]  WITH CHECK ADD  CONSTRAINT [FK_Contact_Volunteer] FOREIGN KEY([VolunteerId])
REFERENCES [dbo].[Volunteer] ([Id])
GO

ALTER TABLE [dbo].[Contact] CHECK CONSTRAINT [FK_Contact_Volunteer]
GO

ALTER TABLE [dbo].[HeroCategory]  WITH CHECK ADD  CONSTRAINT [FK_HeroCategory_Category] FOREIGN KEY([CategoryCode])
REFERENCES [dbo].[Category] ([Code])
GO

ALTER TABLE [dbo].[HeroCategory] CHECK CONSTRAINT [FK_HeroCategory_Category]
GO

ALTER TABLE [dbo].[HeroCategory]  WITH CHECK ADD  CONSTRAINT [FK_HeroCategory_Hero] FOREIGN KEY([HeroId])
REFERENCES [dbo].[Hero] ([Id])
GO

ALTER TABLE [dbo].[HeroCategory] CHECK CONSTRAINT [FK_HeroCategory_Hero]
GO

ALTER TABLE [dbo].[Journal]  WITH CHECK ADD  CONSTRAINT [FK_Journal_Hero] FOREIGN KEY([HeroId])
REFERENCES [dbo].[Hero] ([Id])
GO

ALTER TABLE [dbo].[Journal] CHECK CONSTRAINT [FK_Journal_Hero]
GO

ALTER TABLE [dbo].[VolunteerCategory]  WITH CHECK ADD  CONSTRAINT [FK_VolunteerCategory_Category] FOREIGN KEY([CategoryCode])
REFERENCES [dbo].[Category] ([Code])
GO

ALTER TABLE [dbo].[VolunteerCategory] CHECK CONSTRAINT [FK_VolunteerCategory_Category]
GO

ALTER TABLE [dbo].[VolunteerCategory]  WITH CHECK ADD  CONSTRAINT [FK_VolunteerCategory_Volunteer] FOREIGN KEY([VolunteerId])
REFERENCES [dbo].[Volunteer] ([Id])
GO

ALTER TABLE [dbo].[VolunteerCategory] CHECK CONSTRAINT [FK_VolunteerCategory_Volunteer]
GO