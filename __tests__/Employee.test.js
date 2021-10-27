const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Suzi');

    expect(employee.name).toBe('Suzi');
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

