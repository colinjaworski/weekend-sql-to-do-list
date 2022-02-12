CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"dateAdded" VARCHAR (10) NOT NULL,
  "isComplete" BOOLEAN DEFAULT FALSE
);

insert into "tasks"
("task", "dateAdded") 
VALUES 
	('finish weekend assignment', '2022-02-02'),
	('get haircut', '2022-02-02'),
	('play with dogs', '2022-02-02'),
	('maybe shower', '2022-02-02')
