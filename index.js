// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a description of your project',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the steps required to install your project?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Provide instructions and examples for use',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'How to contribute to this project?',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'How to test this app?',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'checkbox',
                message: 'Select a license for your project',
                choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Unlicense', 'None'],
                name: 'license',
            },

        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(error) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers){
        console.log(answers)
        writeToFile("README.md",generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
