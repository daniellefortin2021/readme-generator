const generateReadMe = answers => {
    return `
    
    ## ${answers.title}
    
    ## Description
    ${answers.description}

    ## Table of Contents
    * [Languages](#languages)
    * [Link](#link)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [License](#license)

    ## Built With
    This project was built with ${answers.languages}
    
    ## Link
    ${answers.link}

    ## Installation
    ${answers.installation}

    ## Usage 
    ${answers.usage}

    ## Contribution
    ${answers.contribution}

    ## Tests
    ${answers.test}

    ## License 
    This project is licensed under ${answers.license}.

    `
}


module.exports = generateReadMe;