// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;

  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `- [License](#license) `;

  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `# License\n This project is licensed under the ${license} license. `;

  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of contents
- [Installation](#installation)

- [Usage](#usage)

- [Contribution](#contribution)

- [Test instruction](#test-instructions)

${renderLicenseLink(data.license)}

- [Questions](#questions)

## Installation
${data.instructions}

## Usage
${data.usage}

## Guidelines
${data.guidelines}

## Test Instructions
${data.test}

${renderLicenseSection(data.license)}

## Questions
If you have any questions you can email me at ${data.email}

If you want to see more of my work you can visit my github page at [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;