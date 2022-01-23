//const fs = require('fs');
//const generateReadMe = require('');

const inquirer = require("inquirer");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your project repository?',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please add a link to your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a short description for your project.');
                    return false;
                }
            }
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
            message: 'What are the steps required to install your project?',
            validate: instructionInput => {
                if (instructionInput) {
                    return true;
                } else {
                    console.log('Please details steps needed to install your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please detail how you to use this app.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contribution to the repo?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please describe user contribution instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is the application covered under?',
            choices: ['MIT', 'GNU']
        },
    ])
    .then(answers => console.log(answers));
}

promptUser()