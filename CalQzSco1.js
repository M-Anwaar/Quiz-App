import chalk from "chalk";
import { userMCQs } from "./app1.js";
function calcScore() { }
let userCounter = 0;
if (userMCQs.one == "Doublequoted") {
    console.log(chalk.bgBlueBright.gray.bold(`Well Done! "${userMCQs.one}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.one} is the Wrong Answer`));
}
if (userMCQs.two == "Numberwithoutquoted") {
    console.log(chalk.bgBlueBright.gray.bold(`Well Done! "${userMCQs.two}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.two} is the Wrong Answer`));
}
if (userMCQs.three == "Hyper Text Markup Language") {
    console.log(chalk.bgBlueBright.gray.bold(`Well Done! "${userMCQs.three}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.three} is the Wrong Answer`));
}
if (userMCQs.four == "backticks") {
    console.log(chalk.bgBlueBright.gray.bold(`Well Done! "${userMCQs.four}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.four} is the Wrong Answer`));
}
if (userMCQs.five == "//") {
    console.log(chalk.bgBlueBright.gray.bold(`Well Done! "${userMCQs.four}" is the Correct Answer`));
    userCounter++;
}
else {
    console.log(chalk.bgWhiteBright.redBright.bold(`"Ooopss! ${userMCQs.four} is the Wrong Answer`));
}
console.log(`Your Total Score is ${userCounter} out of 5`);
