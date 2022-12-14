const Manager = require("../lib/manager");
const manager = new Manager("Hernandez", "60", "Hrn@gmail.com", "5675")

test("getName function returns name", () => {
    expect(manager.getName()).toBe("Hernandez");
})

test("getId function returns id", () => {
    expect(manager.getId()).toBe("60");
})

test("getEmail function returns email", () => {
    expect(manager.getEmail()).toBe("Hrn@gmail.com");
})

test("getRole function returns role", () => {
    expect(manager.getRole()).toBe("Manager");
}
)
test("getOfficeNumber function returns office number", () => {
    expect(manager.getOfficeNumber()).toBe("5675");
})

