//please run the compiler from ./calcScore file as node calcScore.js to run the quiz app...


import inquirer from "inquirer";


export const userMCQs = await inquirer.prompt([
  {
    name: "one",
    type: "checkbox",
    message: "1).  In JavaScript, which keyword is used to declare a variable?",
    choices: ["define", "let", "var", "set"],
  },
  {
    name: "two",
    type: "checkbox",
    message:
      "2).  Which of the following CSS selectors targets elements with the class name 'example'?",
    choices: ["#example", ".example", "example", "*example"],
  },
  {
    name: "three",
    type: "checkbox",
    message: "3).  What does the acronym 'HTML' stand for?",
    choices: [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlink and Text Markup Language",
    ],
  },
  {
    name: "four",
    type: "checkbox",
    message: "4).  What is the main purpose of using TypeScript?",
    choices: [
      "To write server-side code",
      "To add static typing to JavaScript",
      "To create 3D graphics",
      "To design user interfaces",
    ],
  },
  {
    name: "five",
    type: "checkbox",
    message: "5).  Which of the following is a valid data type in JavaScript?",
    choices: ["Complex", "Vector", "Float", "Object"],
  },
]);

