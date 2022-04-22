// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge = '';

  if (license === 'MIT') {

    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    return badge;

  } else if (license === 'GNU') {

    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    return badge;

  } else if (license === 'Apache') {

    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    return badge;

  } else if (license === 'Unlicense') {

    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    return badge

  } else {

    return badge;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink = '';

  if (license === 'MIT') {

    licenseLink = `This application is covered under the MIT license`;

    return licenseLink;

  } else if (license === 'GNU') {

    licenseLink = `This application is covered under the GNU GPLv3 license`;

    return licenseLink;

  } else if (license === 'Apache') {

    licenseLink = `This application is covered under the Apache license`;

    return licenseLink;

  } else if (license === 'Unlicense') {

    licenseLink = `This application is covered under the Unlicense`;

    return licenseLink;

  } else {

    return licenseLink;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let content = '';

  if (license) {
    console.log(license);
    content = renderLicenseLink(license);

    return content;
  } else if (license === 'I dont want a license') {
    
    return content;

  }
}

// TODO: Create a function to generate markdown for README
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

  ## License
  
  ${renderLicenseSection(data.license)}`;

}

module.exports = generateMarkdown;
