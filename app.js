const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const askUserForManagerInfo = require("./lib/askUserForManagerInfo");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//Create an employee list
const employeeArray=[];


//Ask for manager info: name, id email office number...
// function askUserForManagerInfo(){

//     return inquirer.prompt([
//         {
//             message:"What is the Manger's Name: ",
//             name:"managerName",
//             type:"input",
//         },
//         {
//             message:"What is the Manger's ID: ",
//             name:"managerID",
//             type:"input",
//         },
//         {
//             message:"What is the Manger's Email: ",
//             name:"managerEmail",
//             type:"input",
//         },
//         {
//             message:"What is the Manger's Number: ",
//             name:"managerOfficeNumber",
//             type:"input",
//         }
//     ]).then((managerData) => {
//         //pass the data to the class constructor

//         const newManager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNumber)

//         employeeArray.push(newManager);
//         // console.log(newManager)
//         // console.log(employeeArray)

//         askUserForEmployeeType()

//     });

// }

//Ask uer for next employee type; provide a list: Engineer, intern, i dont want to add any more team members
function askUserForEmployeeType(){
    return inquirer.prompt([
        {
        type:"list", 
        name:"newMember",
        message:"Would you like to add another member?",
        choices:[
            'Engineer',
            'Intern',
            'I do not want to add anyone else.',
        ]

        }
    ]).then((newEmployeeChoiceData) => {
        //IF the selected new engineer
        // console.log(newEmployeeChoiceData.newMember)
        if(newEmployeeChoiceData.newMember == "Engineer"){
            askUserForEngineerInfo()
        }
    
        //ELSE IF the user selected a new intern
        else if(newEmployeeChoiceData.newMember == "Intern"){
            askUserForInternInfo()
        }
        else{
        // console.log(employeeArray)
        createHtmlFile()
        }
    });
    
}

//ASK user for engineer info
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
    ]).then((engineerData) => {
        //PASS the data to the class constructor
        const newEngineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub)

        employeeArray.push(newEngineer);
        // console.log(newEngineer)
        // console.log(employeeArray)
        askUserForEmployeeType()
    });
}

//ask user for intern info
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
    ]).then((internData) => {
        //PASS the data to the class constructor
        const newIntern = new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool)

        employeeArray.push(newIntern);
        // console.log(newIntern)
        // console.log(employeeArray)
        askUserForEmployeeType()
    });
}


//to polish this, move the functions here into their own files
//add some more functionality to play with the way this appears in the console.log with colors or extra whitespace

function createHtmlFile(){
    // console.log("hi",employeeArray)
    const htmlContent = render(employeeArray) ; 

    fs.writeFile("./output/team.html", htmlContent, (err) => {
        err?
        console.log('failed to write file'):
        console.log('wrote file')
    })
}

askUserForManagerInfo().then((managerData) => {
    //pass the data to the class constructor

    const newManager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNumber)

    employeeArray.push(newManager);
    // console.log(newManager)
    // console.log(employeeArray)

    askUserForEmployeeType()

});

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
