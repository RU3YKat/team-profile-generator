const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateHtml = require('./util/generateHtml');

const Manager = require('./lib/Engineer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addManager = () =>{
    return inquirer
        .prompt ([
        {
            type: 'input',
            
        }
    ])
}
