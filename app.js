const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Create an employee list
const employeeArray=[];


//Ask for manager info: name, id email office number...
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
    ]).then((managerData) => {
        //pass the data to the class constructor

        const newManager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNumber)

        employeeArray.push(newManager);
        console.log(newManager)
        console.log(employeeArray)

        // askUserForEmployeeType()

    });

}
//Ask uer for next employee type; provide a list: Engineer, intern, i dont want to add any more team members
function askUserForEmployeeType(){
    return inquirer.prompt([
        {
        message:"Ask a question: ",
        name:"name",
        type:"list",
        }
    ]).then((newEmployeeChoiceData) => {
        //if the selected new engineer
        askUserForEngineerInfo()
        //else if the user selected a new intern
        askUserForInternInfo()
        //else 
        createHtmlFile() //this is the code from  
    });
    
}

//ask user for engineer info
function askUserForEngineerInfo(){

}

//ask user for intern info
function askUserForInternInfo(){
    
}
//to polish this, move the functions here into their own files
//add some more functionality to play with the way this appears in the console.log with colors or extra whitespace



function createHtmlFile(){
    const htmlContent = render(employeeArray) ; 
}


askUserForManagerInfo()
//return to ask fro next employee and dont seelect any more
//when finished an html file should show up in the browser from the htmlRenderer.js file





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
