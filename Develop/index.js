// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    // add questions for user to answer 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('Please enter your username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project's title.");
                    return false;
                }
            }
        },
        {
            type : 'input',
            name: 'description',
            message: 'Please enter a short description about your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: 'Would you like to add a table of contents?',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Please provide step-by-step description.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide step-by-step instructions for how to install your projecct.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used? Please provide instrucitons.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for how to use your application.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'credits',
            message: 'Did you work with any other collaborators on this project?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None' ]
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'What command should be run to perform tests?',
            default: 'npm test'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there's an error
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README file has successfully been created!');
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(answers => {
            return generatePage(answers);
        })
        .then(data => {
            return writeToFile(data);
        })
        .catch(err => {
            console.log(err);
        })
};

// initialize app
init();