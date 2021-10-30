const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('set Engineer github username using constructor function', () => {
    const employee = new Engineer('Suzi Que', '777', 'suzi.que@gmail.com', 'suzique');

    expect(employee.github).toEqual(expect.any(String));
});

test('get role of Engineer', () => {
    const employee = new Engineer('Suzi Que', '777', 'suzi.que@gmail.com', 'suzique');

    expect(employee.getRole()).toEqual('Engineer');
});