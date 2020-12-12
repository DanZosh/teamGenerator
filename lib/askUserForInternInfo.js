const inquirer = require("inquirer");
const Intern = require("./Intern");

function askUserForInternInfo(){
    return inquirer.prompt([
        {
            message:"What is the Intern's Name: ",
            name:"internName",
            type:"input",
        },
        {
            message:"What is the Intern's ID: ",
            name:"internID",
            type:"input",
        },
        {
            message:"What is the Intern's Email: ",
            name:"internEmail",
            type:"input",
        },
        {
            message:"What is the Intern's School: ",
            name:"internSchool",
            type:"input",
        }
    ])

}

module.exports = askUserForInternInfo