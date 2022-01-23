const { title } = require("process");

const generateReadMe = data => {
    return `
    
    ## ${title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    * [Languages](#languages)
    * [Link](#link)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [License](#license)

    ## Built With
    This project was built with ${data.languages}
    
    ## Link
    ${data.link}

    ## Installation
    ${data.installation}

    ## Usage 
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Tests
    ${data.test}

    ## License 
    This project is licensed under ${data.license}.

    `
}

console.log(data.title);

module.exports = writeFile;