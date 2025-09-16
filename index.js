// Module Package CORE

/* const moment = require("moment");
const time = moment().format("HH.mm.ss"); 

console.log("time:", time); */

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

/* 

git init
git status

git add .
git status
git commit -m "feat: message"

git remote
git remote add origin LINK
git push origin master
*/

// Module Package FILE

/* const calculate = require("./hisob.js");

const natija1 = calculate.kopaytirish(24, 45);
console.log("natija: ", natija1);
console.log("=========");

const natija2 = calculate.qoshish(24, 45);
console.log("natija: ", natija2);
console.log("=========");

const natija3 = calculate.bolish(270, 45);
console.log("natija: ", natija3);
console.log("========="); */
const Account = require("./account.js");
Account.tellMeAboutClass();

console.log("============");
const myAccount = new Account("Khan", 200000, 749337728283);
myAccount.giveMeDetails();
myAccount.makeDeposit(300000);
myAccount.withdrawal(1000000);
myAccount.withdrawal(400000);
myAccount.makeDeposit(200000);
