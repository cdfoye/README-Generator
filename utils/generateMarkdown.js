// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'MIT') {

    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

  } else if (license == 'GNU') {

    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;

  } else if (license == 'Apache') {

    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;

  } else if (license == 'Unlicense') {

    return `![License: Unlicense](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;

  } else {

    return ``;

  }

}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'MIT') {

    return `  This application is covered under the MIT license`;

  } else if (license == 'GNU') {

    return `  This application is covered under the GNU GPLv3 license`;

  } else if (license == 'Apache') {

    return `  This application is covered under the Apache license`;

  } else if (license == 'Unlicense') {

    return `  This application is covered under the Unlicense`;

  } else {

    return ``;

  }

}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license) {

    return `## License\n\n` + renderLicenseLink(license);

  } else if (license == 'I dont want a license') {
    
    return ``;
  }

}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  
  ${data.install}
  
  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions please visit my Github profile: [${data.github}](https://github.com/${data.github})

  For additional questions you can email me at ${data.email}
  
  ${renderLicenseSection(data.license)}`;

}

//export generateMarkdown function for use in index.js
module.exports = generateMarkdown;
