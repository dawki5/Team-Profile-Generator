const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const srcOutPut = path.resolve(__dirname, "src");
const htmlOutPut = path.join(srcOutPut, "team.html");

const renderHtml = require("./lib/renderFinishedHtml");


const tMembers = [];

//
function init() {
  managerQuestions();
}

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Managername",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "Idnumber",
        message: "Team Manager's ID number:",
      },
      {
        type: "input",
        name: "Email",
        message: "Team Manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Team Manager's office number:",
      },
    ])
    .then((val) => {
      const managerInfo = new Manager(
        val.Managername,
        val.Idnumber,
        val.Email,
        val.officeNumber
      );
      console.table(managerInfo);
      tMembers.push(managerInfo);
      addTM();
    });
}

function addTM() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addTM",
        message: "Add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "Not at this time"],
      },
    ])
    .then((val) => {
      if (val.addTM === "Engineer") {
        engineerQuestions();
      } else if (val.addTM === "Intern") {
        internQuestions();
      } else {
        createSrc();
      }
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Engineername",
        message: "Engineer's name?",
      },
      {
        type: "input",
        name: "Idnumber",
        message: "Engineer's ID number:",
      },
      {
        type: "input",
        name: "Email",
        message: "Engineer's email address:",
      },
      {
        type: "input",
        name: "Github",
        message: "What is the Engineer's GitHub Username?",
      },
    ])
    .then((val) => {
      const engineerInfo = new Engineer(
        val.Engineername, 
        val.Idnumber, 
        val.Email, 
        val.Github
        );
      console.table(engineerInfo);
      tMembers.push(engineerInfo);
      addTM();
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Internname",
        message: "Intern's name?",
      },
      {
        type: "input",
        name: "Idnumber",
        message: "Intern's ID number:",
      },
      {
        type: "input",
        name: "Email",
        message: "Intern's email address:",
      },
      {
        type: "input",
        name: "School",
        message: "What school does or did the intern attend?",
      },
    ])
    .then((val) => {
      const internInfo = new Intern(
        val.Internname, 
        val.Idnumber, 
        val.Email, 
        val.School
        );
      console.table(internInfo)
      tMembers.push(internInfo);
      addTM();
    });
}

function createSrc() {
  if (!fs.existsSync(srcOutPut)) {
    fs.mkdirSync(srcOutPut);
  } else {

    fs.writeFileSync(htmlOutPut, renderHtml(tMembers), "UTF-8");
    console.log("html created in the src folder");
  }
  
}

init();