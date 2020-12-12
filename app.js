const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//REQUIRE decoupled functions
const askUserForManagerInfo = require("./lib/askUserForManagerInfo");
const askUserForEngineerInfo = require("./lib/askUserForEngineerInfo");
const askUserForInternInfo = require("./lib/askUserForInternInfo");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//Create an employee list
const employeeArray=[];


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
            askUserForEngineerInfo().then((engineerData) => {
                //PASS the data to the class constructor
                const newEngineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub)
        
                employeeArray.push(newEngineer);
                // console.log(newEngineer)
                // console.log(employeeArray)
                askUserForEmployeeType()
            });
        }
    
        //ELSE IF the user selected a new intern
        else if(newEmployeeChoiceData.newMember == "Intern"){
            askUserForInternInfo().then((internData) => {
                //PASS the data to the class constructor
                const newIntern = new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool)
        
                employeeArray.push(newIntern);
                // console.log(newIntern)
                // console.log(employeeArray)
                askUserForEmployeeType()
            });
        }
        else{
        // console.log(employeeArray)
        createHtmlFile()
        }
    });
    
}



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

