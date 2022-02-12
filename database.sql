CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"dateAdded" DATE,
  "isComplete" BOOLEAN DEFAULT FALSE
);

insert into "tasks"
("task", "dateAdded") 
VALUES 
	('finish weekend assignment', '2/12/2022'),
	('get haircut', '2/12/2022'),
	('play with dogs', '2/12/2022'),
	('maybe shower', '2/12/2022')
