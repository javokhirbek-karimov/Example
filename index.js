// Module Package CORE

/* setTimeout(() => {
  console.log("Ishga tushdi");
}, 5000); */
// let number = 0;
/* setInterval(() => {
  const random = Math.random();
  console.log(random);
  // number++;
}, 1000); */

/* const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");

console.log(data); */

console.log("========");

/* fs.writeFileSync("./input.txt", `${data} \n\t\t by Khan`);
const newData = fs.readFileSync("./input.txt", "utf8");

console.log(newData); */

// Module Package EXTERNAL

/* const moment = require("moment");

setInterval(() => {
  const time = moment().format("YYYY-MM-DD");
  console.log(`hozirgi vaqt: ${time}`);
}, 5000); */

/* const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting" }])
  .then((answer) => {
    console.log("men kiritgan raqam:", answer.raqam);
  })
  .catch((err) => console.log(err)); */

/* const validator = require("validator");

// const test = validator.isEmail("foo@bar.com");
const test = validator.isIP("");
console.log(test); */

/* const { v4: uuidv4 } = require("uuid");

const randomString = uuidv4();
console.log(randomString);

const chalk = require("chalk");
const log = console.log;

log(chalk.blue("Hello ") + randomString + chalk.red("!")); */

// Module Package FILE

/* 

git init
git status

git add .
git status
git commit -m "feat: message"

*/
