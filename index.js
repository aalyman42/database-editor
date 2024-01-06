const inquirer = require("inquirer");
const mysql = require("mysql2");
const queries = require("./db/queries.js");
// console.log(queries);

// queries
//   .findAllDepartments()
//   .then((data) => {
//     const dataField = data;
//     const arrayData = dataField[0];
//     console.log(dataField);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

inquirer
  .prompt([
    {
      type: "list",
      message: `WELCOME TO THE EMPLOYEE DATABASE            
         
         What would you like to do?`,
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee",
      ],
      name: "choice",
    },
  ])
  .then(function (selection) {
    const { choice } = selection;
    console.log(choice);
    if (choice == "View Departments") {
      queries
        .findAllDepartments()
        .then((data) => {
          const dataField = data;
          const arrayData = dataField[0];
          console.log(`
id   |    name             
------------------------------`);
          for (i = 0; i < arrayData.length; i++) {
            console.log(`${arrayData[i].id}    |   ${arrayData[i].name}  `);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (choice == "View Roles") {
      queries
        .findAllRoles()
        .then((data) => {
          const dataField = data;
          const arrayData = dataField[0];
          console.log(`
id   |    title          |    salary       |  department ID          
-------------------------------------------------------------`);
          for (i = 0; i < arrayData.length; i++) {
            console.log(
              `${arrayData[i].id}    |   ${arrayData[i].title}       | ${arrayData[i].salary}       |${arrayData[i].department_id} `
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (choice == "View Employees") {
      queries
        .findAllEmployees()
        .then((data) => {
          const dataField = data;
          const arrayData = dataField[0];
          console.log(arrayData);
          console.log(`
id   |    first name   |    last name   |  role ID      | manager ID    
---------------------------------------------------------------------------------`);
          for (i = 0; i < arrayData.length; i++) {
            console.log(
              `${arrayData[i].id}    |   ${arrayData[i].first_name}       | ${arrayData[i].last_name}       |${arrayData[i].role_id}          |${arrayData[i].manager_id}`
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (choice == "Add a department") {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Please name your new Department:",
            name: "depNameInput",
          },
        ])
        .then(function (field) {
          const { depNameInput } = field;
          queries.addDepartment(depNameInput);
          console.log(
            `Succesfully added ${depNameInput} to department database!`
          );
        });
    }
    if (choice == "Add a role") {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Please name your new Role:",
            name: "roleNameInput",
          },
          {
            type: "input",
            message: "What is this Role's salary?",
            name: "salaryInput",
          },
          {
            type: "input",
            message: "By ID, what department does this role belong to?",
            name: "deparmentIdInput",
          },
        ])
        .then(function (field) {
          const { roleNameInput, salaryInput, deparmentIdInput } = field;
          queries.addRole(roleNameInput, salaryInput, deparmentIdInput);
          console.log(`Succesfully added ${roleNameInput} to Roles database!`);
        });
    }
  });
