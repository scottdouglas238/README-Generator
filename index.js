const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./generateREADME");

const writeFileAsync = util.promisify(fs.writeFile);

//badges
function promptUser() {
  return inquirer.prompt([
// array of questions for user
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["![MIT](https://img.shields.io/apm/l/readme?style=plastic)", "Apache", "GPL", "Apache 2"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should  be run to install dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "constributing",
        message: "What does the user need to know about contributing to the repo?",
    },
  ]);
}

// function to initialize program
async function init() {
    try {
      const answers = await promptUser();
      const ReadMe = generateReadMe(answers);
      await writeFileAsync("./READMEFolder/REAMME.md", ReadMe);
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  // function call to initialize program
  init();
