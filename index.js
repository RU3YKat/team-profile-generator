const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateHtml = require('./util/generateHtml');

const Manager = require('./lib/Engineer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

const addManager = () =>{
    return inquirer
        .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                console.log('Please enter the name of the team manager!');
                return false;
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter the team manager ID number:',
            validate: idNumber => {
                if (isNaN(idNumber)) {
                    console.log('Please enter ID number of team manager!');
                    return false;
                }
                    return true;                
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of the team manager:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                console.log('Please enter the email of the team manager!');
                return false;
            }
        },
        {
            type: 'number',
            name: 'office',
            message: 'Enter the office number of the team manager:',
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log('Please enter office number of the team manager!');
                    return false;
                }
                    return true;  
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArr.push(manager);
    })
};

const addEmploy = () => {
    return inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'Select the role of your employee:',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the employee',
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
                message: 'Enter the ID number of the employee:',
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
                type: 'input',
                name: 'type',
                message: 'Enter the GitHub username for the Engineer:',
                when: input => input.role === 'Engineer',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    console.log('Please enter the GitHub username for the Engineer!');
                    return false;
                }
            },
            {
                type: 'input',
                name: 'type',
                message: 'Enter the school the Intern attends:',
                when: input => input.role === 'Intern',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    }
                    console.log('Please enter the school attended by the Intern!');
                    return false;
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmploy',
                message: 'Would you like to add another employee?',
                default: false
            }
        ])
        .then(typeInput => {
            let { name, id, email, role, github, school, confirmAddEmploy } = typeInput;
            let employee = '';
            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
            }

        teamArr.push(employee);

        if(confirmAddEmploy) {
            return(addEmploy);
        } 
        return teamArr;
        })
};

