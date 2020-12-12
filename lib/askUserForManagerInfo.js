const inquirer = require("inquirer");
const Manager = require("./Manager");

function askUserForManagerInfo(){

    return inquirer.prompt([
        {
            message:"What is the Manger's Name: ",
            name:"managerName",
            type:"input",
        },
        {
            message:"What is the Manger's ID: ",
            name:"managerID",
            type:"input",
        },
        {
            message:"What is the Manger's Email: ",
            name:"managerEmail",
            type:"input",
        },
        {
            message:"What is the Manger's Number: ",
            name:"managerOfficeNumber",
            type:"input",
        }
    ])

}
module.exports = askUserForManagerInfo