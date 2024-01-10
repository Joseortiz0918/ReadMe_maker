const fs = require('fs');

function licenseBadge(license){
    if(!license){
        return '';
    }else{
        return`[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
  }

function licenseLink(license) {
    if(license === 'MIT'){
        return`https://lbesson.mit-license.org/`
   }
    if(license === 'GPL'){
        return `http://perso.crans.org/besson/LICENSE.html`
   }
    if(license === 'CC--0'){
        return `https://creativecommons.org/licenses/by-nd/4.0`
   }
}
function licenseSection(license) {
    if (!license) {
      return ``;
    } else {
      return `## Licenses
      This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
    }
  }

function generateREADME(data) {
    return `# ${data.title}

    ${licenseBadge(data.license)}
   
    ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ${licenseSection(data.license)}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    If you have questions about this project feel free to contact me via github or email
    
    GitHub:https://github.com/${data.github}  
    Email: ${data.email}
    
    ## Credits
    ${data.name}
    `;
}
module.exports = generateREADME;