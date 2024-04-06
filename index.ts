#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let pin = 1234;
let myAmount = 50000;

console.log(`${chalk.blue("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°")}`);
console.log(`\t ${chalk.bgYellow.bold("\n\t  ◦•●◉✿ Welcome to ATM ✿◉●•◦ \n")}`);
console.log(`${chalk.blue("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°")}`);

let pinAns = await inquirer.prompt([
  {
    name: "Pin",
    message: "Enter your Pin",
    type: "number",
  },
]);
if (pinAns.Pin === pin) {
  console.log(`
     ${chalk.greenBright("Correct Pin code!")} You have successfully!
  `);

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["Withdraw Amount", "Check Balance", "Exit"],
    },
  ]);

  if (operationAns.operation === "Withdraw Amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Select a Withdraw Method : ",
        type: "list",
        choices: ["Enter Amount", "Fast Cash"],
      },
    ]);

    if (amountAns.amount === "Enter Amount") {
      let enteramountAns = await inquirer.prompt([
        {
          name: "enteramount",
          message: "Enter the Amount to withdraw:$",
          type: "number",
        },
      ]);

      if (enteramountAns.enteramount > myAmount) {
        console.log(`${chalk.red("Insufficient balance.")}`);
        console.log(`Your current balance is :$${chalk.red(myAmount)}.`);
      } else {
        myAmount -= enteramountAns.enteramount;
        console.log(`Your Reaming Balance :$${chalk.yellowBright(myAmount)}`);
      }
    } else if (amountAns.amount === "Fash Cash") {
      let fastcashAns = await inquirer.prompt([
        {
          name: "fastcash",
          message: "Select Fast Cash Amount",
          type: "list",
          choices: [5000, 7000, 10000, 15000, 20000, 25000, 30000],
        },
      ]);

      myAmount -= fastcashAns.fastcash;
      console.log(`Your remaining Current Amount is:${chalk.red(myAmount)}`);
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(`Your Current Balance Amount is:$${chalk.red(myAmount)}.`);
  } else if (operationAns.operation === "Exit") {
    console.log(
      `Thank you for using the ATM. ${chalk.yellowBright("Goodbye!")} 
    `);
  }
} else {
  console.log(`${chalk.red("Incorrect Pin Number Try agin.")}`);
}