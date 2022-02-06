// TODO: Create a function to generate markdown for README
// license info is generating in the generateMarkDown 
function generateMarkdown(data) {
  return 
    `# ${data.title}
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen) <br/>

    ## Description: 
    ${data.description} <br/>

    ## Table of Contents:
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Tests](#tests)
    * [Questions](#questions) <br/>
    
    ## Installation:
    ${data.installation} <br/>

    ## Usage:
    ${data.usage} <br/>

    ## Credits:
    ${data.credits} <br/>

    ## License:
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    This project is licensed under ${data.license} license. <br/>

    ## Tests:
    ${data.test} <br/>

    ## Questions:
    If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;

