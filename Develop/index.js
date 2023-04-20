// TODO: Include packages needed for this application
const inq = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [

 {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
 },

{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},


];

// TODO: Create a function to write README file
function writeReadmeFile(README, , filename = 'README.md') {
    const content = `# ${title}
  
  ${description}`;
  
    fs.writeFile(filename, content, (err) => {
      if (err) throw err;
      console.log(`${filename} has been created successfully.`);
    });
  }
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
