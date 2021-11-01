const fs = require('fs');
const inquirer = require('inquirer');
const createHtml = require('./util/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArr = [];

// questions array for all employees
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the employee name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            console.log('Please enter the name of the employee!');
            return false;
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter the employee ID number:',
        validate: idNumber => {
            if (isNaN(idNumber)) {
                console.log('Please enter ID number of the employee!');
                return false;
            }
                return true;                
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the employee:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            console.log('Please enter the email of the employee!');
            return false;
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select the role of the employee: ',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

managerQuestion = [
    {
        type: 'number',
        name: 'office',
        message: 'Enter the office number of the team manager:',
        validate: officeNumber => {
            if (Number.isNaN(officeNumber)) {
                console.log('Please enter office number of the team manager!');
                return false;
            }
                return true;  
        }
    }
]

engineerQuestion = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub username for the Engineer:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            console.log('Please enter the GitHub username for the Engineer!');
            return false;
        }
    }
]

internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school the Intern attends:',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            }
            console.log('Please enter the school attended by the Intern!');
            return false;
        }
    }
]

const init = () => {
    console.log('Please answer the following questions to build your team profile: ');
    addNewEmployee();
};

const addNewEmployee = async () => {
    await inquirer
        .prompt(questions)
        .then((answers) => {
            let name = answers.name;
            let id = answers.id;
            let email = answers.email;
            let role = answers.role;
            let officeNumber;
            let github;
            let school;

            if (role === 'Intern') {
                inquirer
                    .prompt(internQuestion)
                    .then((answers) => {
                        school = answers.school;
                        let employee = new Intern(name, id, email, school);
                        teamArr.push(employee);
                        newEmployee(teamArr);
                    })
            }

            else if (role === 'Engineer') {
                inquirer
                    .prompt(engineerQuestion)
                    .then((answers) => {
                        github = answers.github;
                        let employee = new Engineer(name, id, email, github);
                        teamArr.push(employee);
                        newEmployee(teamArr);
                    });
            }

            else if (role === 'Manager') {
                inquirer
                    .prompt(managerQuestion)
                    .then((answers) => {
                        officeNumber = answers.office;
                        let employee = new Manager(name, id, email, officeNumber);
                        teamArr.push(employee);
                        newEmployee(teamArr);
                    })
            }
        })
};

const newEmployee = async (array) => {
    await inquirer
        .prompt({
            type: 'confirm',
            name: 'newEmployee',
            message: 'Add an employee?'
        })
        .then(async (answer) => {
            var buildEmployee = answer.newEmployee;
            if (await buildEmployee === true) {
                addNewEmployee();
            }
            else if (await buildEmployee === false) {
                fs.writeFile('./dist/index.html', createHtml(array), (err) => {
                    console.log(array);
                    if (err){
                        return console.log(err);
                    }
                    console.log('Your team profile has been successsfully created! Please see index.html file in dist folder.');
                })
                }
        })
};

init();