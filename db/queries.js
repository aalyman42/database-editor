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
    return this.db.promise().query("SELECT * FROM employee;");
  }
  //   viewDept = dbPromise.query("SELECT * FROM department;");
  //   viewRole = dbPromise.query("SELECT * FROM role;");
  //   viewEmp = dbPromise.query("SELECT * FROM employee;");
  //   addDept = dbPromise.query(
  //     `INSERT INTO department(name) VALUES ("${input}");`
  //   );
  //   addRole = "";
  //   addEmp = "";
  //   UpdateEmp = "";
}

module.exports = new Queries(db);
