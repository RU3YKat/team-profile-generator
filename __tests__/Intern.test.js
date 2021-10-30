const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

// creating intern object add school
test('set intern school using constructor function', () => {
    const school = 'DevSchool';
    const employee = new Intern('Suzi Que', '777', 'suzi.que@gmail.com', school);

    expect(employee.school).toBe(school);
});

// get role from getRole()
test('gets employee role', () => {
    const role = 'Intern';
    const employee = new Intern('Suzi Que', '777', 'suzi.que@gmail.com', role);

    expect(employee.getRole()).toBe(role);
});