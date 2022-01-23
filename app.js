//const fs = require('fs');
//const generateReadMe = require('');

const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?'
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your project repository?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project.'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What coding languages did you use?',
            choices: ['JavaScript', 'HTML', 'CSS', 'Node']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contribution to the repo?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is the application covered under?',
            choices: ['MIT', 'GNU']
        },
    ])
    .then(answers => console.log(answers));