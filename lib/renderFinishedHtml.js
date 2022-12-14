const path = require("path");
const fs = require("fs");

const distDirectory = path.resolve(__dirname, "../dist");

const renderHtml = (Employees) => {
  const htmlInformation = [];

  htmlInformation.push(
    Employees
      .filter((Employee) => Employee.getRole() === "Manager")
      .map((Manager) => transportManagerInfo(Manager))
  );
  htmlInformation.push(
    Employees
      .filter((Employee) => Employee.getRole() === "Engineer")
      .map((Engineer) => transportEngineerInfo(Engineer))
  );
  htmlInformation.push(
    Employees
      .filter((Employee) => Employee.getRole() === "Intern")
      .map((Intern) => transportInternInfo(Intern))
  );

  return renderFinishedHtml(htmlInformation.join(""));
};

const transportManagerInfo = (Manager) => {
  let cards = fs.readFileSync(
    path.resolve(distDirectory, "manager.html"),
    "utf8"
  );
  cards = inputInformation(cards, "Mname", Manager.getName());
  cards = inputInformation(cards, "role", Manager.getRole());
  cards = inputInformation(cards, "email", Manager.getEmail());
  cards = inputInformation(cards, "id", Manager.getId());
  cards = inputInformation(cards, "officeNumber", Manager.getOfficeNumber()
  );
  return cards;
};

const transportEngineerInfo = (Engineer) => {
  let cards = fs.readFileSync(
    path.resolve(distDirectory, "engineer.html"),
    "utf8"
  );
  cards = inputInformation(cards, "Ename", Engineer.getName());
  cards = inputInformation(cards, "role", Engineer.getRole());
  cards = inputInformation(cards, "email", Engineer.getEmail());
  cards = inputInformation(cards, "id", Engineer.getId());
  cards = inputInformation(cards, "github", Engineer.getGithub());
  return cards;
};

const transportInternInfo = (Intern) => {
  let cards = fs.readFileSync(
    path.resolve(distDirectory, "intern.html"),
    "utf8"
  );
  cards = inputInformation(cards, "Iname", Intern.getName());
  cards = inputInformation(cards, "role", Intern.getRole());
  cards = inputInformation(cards, "email", Intern.getEmail());
  cards = inputInformation(cards, "id", Intern.getId());
  cards = inputInformation(cards, "school", Intern.getSchool());
  return cards;
};

const renderFinishedHtml = (html) => {
  const layout = fs.readFileSync(
    path.resolve(distDirectory, "header.html"),
    "utf8"
  );
  return inputInformation(layout, "Finished", html);
};

const inputInformation = (cards, inputInformation, value) => {
  const algo = new RegExp("{{ " + inputInformation + " }}", "gm");
  return cards.replace(algo, value);
};

module.exports = renderHtml;
