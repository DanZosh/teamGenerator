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
    // .then((managerData) => {
    //     //pass the data to the class constructor

    //     const newManager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNumber)

    //     employeeArray.push(newManager);
    //     // console.log(newManager)
    //     // console.log(employeeArray)

    //     askUserForEmployeeType()

    // });

}
module.exports = askUserForManagerInfo