// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Write a short description of your project:',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
