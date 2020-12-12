const inquirer = require("inquirer");
const Engineer = require("./Engineer");

function askUserForEngineerInfo(){
    return inquirer.prompt([
        {
            message:"What is the Engineer's Name: ",
            name:"engineerName",
            type:"input",
        },
        {
            message:"What is the Engineer's ID: ",
            name:"engineerID",
            type:"input",
        },
        {
            message:"What is the Engineer's Email: ",
            name:"engineerEmail",
            type:"input",
        },
        {
            message:"What is the Engineer's Github: ",
            name:"engineerGithub",
            type:"input",
        }
    ])
    // .then((engineerData) => {
    //     //PASS the data to the class constructor
    //     const newEngineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub)

    //     employeeArray.push(newEngineer);
    //     // console.log(newEngineer)
    //     // console.log(employeeArray)
    //     askUserForEmployeeType()
    // });
}
module.exports = askUserForEngineerInfo;