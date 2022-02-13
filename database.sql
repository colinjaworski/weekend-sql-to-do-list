CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"dateAdded" VARCHAR (10) NOT NULL,
  "isComplete" BOOLEAN DEFAULT FALSE
);

insert into "tasks"
("task", "dateAdded") 
VALUES 
	('Finish weekend assignment', '2022-02-02'),
	('Laundry', '2022-02-02'),
	('shovel driveway', '2022-02-02'),
	('clean the house', '2022-02-02'),
	('Get haircut', '2022-02-03'),
	('Play with dogs', '2022-02-02'),
	('Maybe shower', '2022-02-02'),
	('Go grocery shopping', '2022-02-02'),
	('Call a friend', '2022-01-13'),
	('Buy a cat', 'Nope'),
	('Do something about these bees!', '2022-02-02'),

