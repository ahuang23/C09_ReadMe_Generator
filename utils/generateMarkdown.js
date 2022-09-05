// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache' || license == 'MIT') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else if (license == 'Mozilla-Public') {
    return '![badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen)';
  } else if (license == 'GNU-General-Public') {
    return '![badge](https://img.shields.io/badge/License-GPLv3-blue)';
  } else if (license == 'Unlicense') {
    return '![badge](https://img.shields.io/badge/license-Unlicense-blue)';
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license == 'MIT') {
    return `[${license}](https://choosealicense.com/licenses/mit/)`;
  } else if (license == 'Mozilla-Public') {
    return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license == 'GNU-General-Public') {
    return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license == 'Unlicense') {
    return `[${license}](https://choosealicense.com/licenses/unlicense/)`;
  } else {
    return ' ';
  }

}

function renderLicenseTOC(license){
  if (license != 'None') {
    return `* [License](#license)`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## [License](#table-of-contents)
    ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseTOC(data.license)}
 
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please reach out to me at the following:
  - GitHub: https://github.com/${data.github}
  - Email: ${data.email}

  ${renderLicenseSection(data.license)}



`;
}

module.exports = generateMarkdown;
