const Employee = require("../lib/employee");
const employee = new Employee("Christophe", "14", "christophe@gmail.com")

test("get name function returns name", () => {
    expect(employee.getName()).toBe("Christophe");
})

test("get id function returns id", () => {
    expect(employee.getId()).toBe("14");
})

test("get email function returns email", () => {
    expect(employee.getEmail()).toBe("christophe@gmail.com");
})

test("get role function returns role", () => {
    expect(employee.getRole()).toBe("Employee");
})