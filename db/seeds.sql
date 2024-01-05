INSERT INTO department (name) 
VALUES 
	("Sales"),
    ("Accounting"),
    ("HR"),
    ("Marketing"),
    ("Development"),
    ("Security");

INSERT INTO role(title, salary, department_id)
VALUES
	("Sales Lead",90000, 1),
    ("Sales Associate",70000, 1),
    ("Accountant",85000, 2),
    ("Financial Executive",100000, 2),
    ("HR Liaison",65000, 3),
    ("HR Lead",72000, 3),
    ("Marking Head",85000, 4),
    ("Marketing Associate",650000, 4),
    ("Senior Developer",120000, 5),
    ("Mid Developer",90000, 5),
    ("Junior Developer",75000, 5),
    ("Scrum Master",100000, 5),
    ("Security Officer",55000, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES
	("Hannah","Montana",1,NULL),
    ("Miley","Cyrus",2,1),
    ("Selena","Gomez",2,1),
    ("Mariah","Carey",2,1),
    ("Bugs","Bunny",4,null),
    ("Daphy","Duck",3,5),
    ("Lola","Bunny",3,5),
    ("Naomi","Osaka",6,null),
    ("Peyton","Manning",5,8),
    ("Cale","Makar",5,8),
    ("Michael","Phelps",5,8),
    ("Lebron","James",5,8),
    ("Tony","Stark",12,null),
    ("Peter","Parker",9,13),
    ("Ben","Grim",9,13),
    ("Bruce","Banner",9,13),
    ("Steve","Rogers",10,13),
    ("Stephen","Strange",10,13),
    ("Wanda","Maximoff",11,13),
    ("Thor","Odinson",11,13),
    ("Natasha","Romanov",11,13),
    ("Rey","Skywalker",13,null),
    ("Ahsoka","Tano",13,null),
    ("Han","Solo",13, null);
    