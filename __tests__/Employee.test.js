const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Suzi Que', 777, 'suzi.que@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
    
});

test('gets employee name', () => {
    const employee = new Employee('Suzi Que', 777, 'suzi.que@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Suzi Que', 777, 'suzi.que@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Suzi Que', 777, 'suzi.que@gmail.com');

    expect(employee.getEmail()).toContain('@');
});

test('gets employee role', () => {
    const employee = new Employee('Suzi Que', 777, 'suzi.que@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});