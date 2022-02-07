// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'github',
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
            type: 'input',
            name: 'credits',
            message: 'Did you work with any other collaborators on this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter other contributors. If no others, please write "None".');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE', 'GPL', 'Mozilla', 'ISC', 'None' ],
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to perform tests?',
            default: 'npm test'
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, function(err) {
        if (err) throw err;
        console.log('Your file was created successfully!');
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer   
        .prompt(questions)
        .then(function(data) {
            writeToFile(fileName, data)
        })
};




// initialize app
init();
