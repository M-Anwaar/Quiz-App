import inquirer from "inquirer";

export const userMCQs = await inquirer.prompt ([
{
    name: "one",
    type: "checkbox",
    message: "1).  In JavaScript, which quote are used to mention as string?",
    choices: ["Singlequoted", "Number", "Doublequoted","Equal"]  
},
{
    name: "two",
    type: "checkbox",
    message: "2).  In JavaScript, mention number type with?",
    choices: ["Number()", "Numberwithoutquoted", "=Number", "-Number"]
},
{
    name: "three",
    type: "checkbox",
    message: "3).  What does the acronym 'HTML' stand for?",
    choices: [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlink and Text Markup Language"]
  },
  {
    name: "four",
    type: "checkbox",
    message: "4).   special template strings in which you can use variables directly in TypeScript?",
    choices: ["backticks", "Doubleqouted", "equal", "None"]
  },

  {
    name: "five",
    type: "checkbox",
    message: "5).  which type of sign is use in typeScript to add comments in sigle line?",
    choices: ["=","*/", "//", "/**"]
  },

])