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
//     .then((internData) => {
//         //PASS the data to the class constructor
//         const newIntern = new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool)

//         employeeArray.push(newIntern);
//         // console.log(newIntern)
//         // console.log(employeeArray)
//         askUserForEmployeeType()
//     });
}

module.exports = askUserForInternInfo