const inquirer = require("inquirer");
const mysql = require("mysql2");
const queries = require("./db/queries.js");
console.log(queries.findAllEmployees());

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
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
  .then(function (res) {
    switch (choice) {
      case "View Departments":
        console.log("queries.viewDept");
        break;
    }
  });
