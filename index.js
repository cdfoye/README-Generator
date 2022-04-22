// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// import generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project:',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU', 'Apache', 'Unlicense', 'I dont want a license'],
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ]);
};

// function to initialize app
const init = () => {
    questions()
    // used writeFileSync method to use promises instead of a callback function
    .then((data) => fs.writeFileSync('SAmple.md', generateMarkdown(data)))
    .then(() => console.log('README successfully created'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
