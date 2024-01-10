const fs = require("fs");
const inquirer = require('inquirer');
const generateREADME = require("./generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "name",
    message:
      "To generate a README please answer these few question about your new project. To start please input your full name:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your github username");
      }
    },
  },
  {
    type: "input",
    name: "How to install",
    message:
      "Please write down how to install your project so users can easily access your project",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide instructions for installation");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How to use this project",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "Provide instructions for usage.This will help users properly navigate your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Describe the tests written for the application",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log(
          "Please provide instructions on how others can contribute to your project."
        );
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license",
    default: false,
  },
  {
    type: "list",
    name: "licenses",
    message: "What license would you like to include?",
    choices: ["MIT", "GPL", "CC--0"],
    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },
];

const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: console.log("success!"),
      });
    });
  });
};

const init = () => {
  return inquirer.prompt(questions);
};

init()
  .then((userInput) => {
    return generateREADME(userInput);
  })
  .then((readmeInfo) => {
    return writeToFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
