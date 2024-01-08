const inquirer = require("inquirer");
const mysql = require("mysql2");
const queries = require("./db/queries.js");

const mainMenu = function (message) {
  inquirer
    .prompt([
      {
        type: "list",
        message: `${message}`,
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee",
          "Quit",
        ],
        name: "choice",
      },
    ])
    .then(function (selection) {
      const { choice } = selection;
      if (choice == "View Departments") {
        queries
          .findAllDepartments()
          .then((data) => {
            const dataField = data;
            const arrayData = dataField[0];
            console.log(`
id   name             
---- ---------------`);
            for (i = 0; i < arrayData.length; i++) {
              console.log(`${arrayData[i].id}   | ${arrayData[i].name}  `);
            }
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
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
id   title                salary   department           
---- -------------------- -------- -------------`);
            for (i = 0; i < arrayData.length; i++) {
              console.log(
                `${arrayData[i].id}  |  ${arrayData[i].title}        |   ${arrayData[i].salary}  | ${arrayData[i].department} `
              );
            }
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
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
            console.log(`
id   |    first name   |    last name   |  role            | department       |  Salary      | Manager_ID
---------------------------------------------------------------------------------------------------------------`);
            for (i = 0; i < arrayData.length; i++) {
              console.log(
                `${arrayData[i].id}    |   ${arrayData[i].first_name}       | ${arrayData[i].last_name}       |${arrayData[i].role}          |${arrayData[i].department}   | ${arrayData[i].salary}     | ${arrayData[i].manager_id}`
              );
            }
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
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
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
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
            console.log(
              `Succesfully added ${roleNameInput} to Roles database!`
            );
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
          });
      }
      if (choice == "Add an employee") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Employee first name:",
              name: "firstNameInput",
            },
            {
              type: "input",
              message: "Employee last name:",
              name: "lastNameInput",
            },
            {
              type: "input",
              message: "By ID, what is this employee's role?",
              name: "roleIdInput",
            },
            {
              type: "input",
              message:
                "By ID, who is this employee's manager? (input null if n/a)",
              name: "managerIdInput",
            },
          ])
          .then(function (field) {
            const {
              firstNameInput,
              lastNameInput,
              roleIdInput,
              managerIdInput,
            } = field;
            queries.addEmployee(
              firstNameInput,
              lastNameInput,
              roleIdInput,
              managerIdInput
            );
            console.log(
              `Succesfully added ${firstNameInput} ${lastNameInput} to Employee database!`
            );
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
          });
      }
      if (choice == "Update an employee") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Employee ID to update:",
              name: "employeeID",
            },
            {
              type: "input",
              message: "Update employee first name:",
              name: "firstNameInput",
            },
            {
              type: "input",
              message: "Update employee last name:",
              name: "lastNameInput",
            },
            {
              type: "input",
              message: "Update employee role ID:",
              name: "roleIdInput",
            },
            {
              type: "input",
              message: "Update manager by ID: (input null if n/a)",
              name: "managerIdInput",
            },
          ])
          .then(function (field) {
            const {
              employeeID,
              firstNameInput,
              lastNameInput,
              roleIdInput,
              managerIdInput,
            } = field;
            queries.updateEmployee(
              employeeID,
              firstNameInput,
              lastNameInput,
              roleIdInput,
              managerIdInput
            );
            console.log(
              `Succesfully updated ${firstNameInput} ${lastNameInput} in Employee database!`
            );
            console.log(`
            
            `);
          })
          .then(() => {
            return mainMenu(`anything else?`);
          });
      }
      if (choice == "Quit") {
        console.log("goodbye!");
        return process.exit();
      }
    });
};

mainMenu(`WELCOME TO THE EMPLOYEE DATABASE            
         
What would you like to do?`);
