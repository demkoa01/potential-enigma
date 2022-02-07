// TODO: Create a function to generate markdown for README
// license info is generating in the generateMarkDown 
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge](https://img.shields.io/badge/License-${data.license}-blueviolet)

    ## Description: 
    ${data.description} 

    ## Table of Contents:
    [Installation](#installation)
    [Usage](#usage)
    [Credits](#credits)
    [License](#license)
    [Tests](#tests)
    [Questions](#questions) 
    
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage} 

    ## Credits
    ${data.credits} 

    ## License
    This project is licensed under ${data.license}. 

    ## Tests
    ${data.test} 

    ## Questions
    If you have any questions about this project, please contact me directly at ${data.email}. 
    You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;

