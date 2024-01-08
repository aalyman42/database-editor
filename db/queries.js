const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rootpass423!",
  database: "employee_db",
});
//

//Class returns an object. create a class that has protype methods on it.

//createing a method on a class:
class Queries {
  constructor(db) {
    this.db = db;
  }
  findAllEmployees() {
    return this.db.promise()
      .query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, employees.manager_id FROM employees
      JOIN roles ON employees.role_id = roles.id
      JOIN departments ON roles.department_id = departments.id;`);
  }
  findAllDepartments() {
    return this.db.promise().query("SELECT * FROM departments;");
  }
  findAllRoles() {
    return this.db.promise()
      .query(`Select roles.id, roles.title, roles.salary, departments.name AS department FROM roles
    JOIN departments ON roles.department_id = departments.id;`);
  }
  addDepartment(depNameInput) {
    return this.db
      .promise()
      .query(`INSERT INTO departments(name) VALUES ("${depNameInput}");`);
  }
  addRole(roleTitleInput, salaryInput, deparmentIdInput) {
    return this.db
      .promise()
      .query(
        `INSERT INTO roles(title, salary, department_id) VALUES ("${roleTitleInput}", ${salaryInput}, ${deparmentIdInput});`
      );
  }
  addEmployee(firstNameInput, lastNameInput, roleIdInput, managerIdInput) {
    return this.db
      .promise()
      .query(
        `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("${firstNameInput}", "${lastNameInput}", ${roleIdInput}, ${managerIdInput});`
      );
  }
  updateEmployee(
    employeeID,
    firstNameInput,
    lastNameInput,
    roleIdInput,
    managerIdInput
  ) {
    return this.db
      .promise()
      .query(
        `UPDATE employees SET first_name = '${firstNameInput}', last_name = '${lastNameInput}', role_id = ${roleIdInput}, manager_id = ${managerIdInput} WHERE id = ${employeeID};`
      );
  }
}

module.exports = new Queries(db);
