const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('set Engineer github username using constructor function', () => {
    const github = 'suzique';
    const employee = new Engineer('Suzi Que', '777', 'suzi.que@gmail.com', github);

    expect(employee.github).toBe(github);
});

test('get role of Engineer', () => {
    const role = 'Engineer';
    const employee = new Engineer('Suzi Que', '777', 'suzi.que@gmail.com', role);

    expect(employee.getRole()).toBe(role);
});