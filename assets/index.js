const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generatemarkdown")

inquirer
  .prompt([
    {
        type: "input",
        name: "email",
        message: "what is your email?",

    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },

    {
      type: "input",
      name: "title",
      message: "What is the Title?",
    },
    {
      type: "input",
      message: "What is the description?",
      name: "description",
      
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "instructions",
     
    },
    {
        type: "input",
        name: "usage",
        message: "what is the usage information?"
    },
    {
        type: "input",
        name: "guidelines",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name:"license",
        message: "Choose the license:",
        choices: ["MIT License", "Boost software 1.0", "Eclipse public License 2.0", "Apache License 2.0", "none"]
    },
  ])
.then(response =>
    {
        fs.writeFile("README.md", generateMarkdown(response), (err) => {
            if (err) console.log(err) ; console.log("Success, README file is generated")
        })
    }) 

