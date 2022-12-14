const Intern = require("../lib/intern");
const intern = new Intern("Ryan", "20", "Ryan@gmail.com", "Ryanuno9")

test("getName function returns name", () => {
    expect(intern.getName()).toBe("Ryan");
})

test("getId function returns id", () => {
    expect(intern.getId()).toBe("20");
})

test("getEmail function returns email", () => {
    expect(intern.getEmail()).toBe("Ryan@gmail.com");
})

test("getRole function returns role", () => {
    expect(intern.getRole()).toBe("Intern");
}
)
test("getGithub function returns github", () => {
    expect(intern.getSchool()).toBe("Ryanuno9");
})