function generateReadMe(answers) {
  return `# ${answers.title}

  # Table of Contents:

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#License)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description: 
  > ${answers.description}

  ## Installation: 
  > ${answers.installation}

  ## Usage: 
  > ${answers.usage}

  ## License: 
  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")

  ## Contributing: 
  > ${answers.constributing}

  ## Tests: 
  > ${answers.tests}

  ## Questions: 
  > If you have any questions please email me at: ${answers.email}
  
  > Feel free to check out my GitHub at: [${answers.username}](https://github.com/scottdouglas238 "Scott Douglas GitHub")
  `;
  }
  
  module.exports = generateReadMe;

  





  