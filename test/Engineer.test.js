const Engineer = require("../lib/engineer");
const engineer = new Engineer("Christophe", "18", "Christophe@gmail.com", "dawki5")

test("getName function returns name", () => {
    expect(engineer.getName()).toBe("Christophe");
})

test("getId function returns id", () => {
    expect(engineer.getId()).toBe("18");
})

test("getEmail function returns email", () => {
    expect(engineer.getEmail()).toBe("Christophe@gmail.com");
})

test("getRole function returns role", () => {
    expect(engineer.getRole()).toBe("Engineer");
}
)
test("getGithub function returns github", () => {
    expect(engineer.getGithub()).toBe("dawki5");
})