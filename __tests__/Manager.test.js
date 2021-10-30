// use Manager constructor
const Manager = require('../lib/Manager');

// creating manager object add office number
test('set manager officeNumber using constructor function', () => {
    const officeNumber = '131313';
    const employee = new Manager('Suzi Que', '777', 'suzi.que@gmailc.om', '131313');

    expect(employee.officeNumber).toBe(officeNumber);
});

// get role from getRole()
test('gets employee role', () => {
    const role = 'Manager';
    const employee = new Manager('Suzi Que', '777', 'suzi.que@gmailc.om', '131313');

    expect(employee.getRole()).toBe(role);
});
