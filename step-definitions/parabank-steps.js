module.exports = function () {
  this.Given("I am on the Parabank Portal", function () {
    return helpers.loadPage(page.parabank.url);
  });

  this.When("I click on Register button", function () {
    return page.parabank.clickElement("registerButton");
  });

  this.Then("I should see Signing up is easy! page", function () {
    return page.parabank.checkForText("Signing up is easy!");
  });

  this.Given("I have the following user information", function () {
    return helpers.loadPage(page.parabank.url);
  });

  this.Given("I input the following user information", async function (dataTable) {
    const data = dataTable.raw();
    var headings = data[0]; //headings is the 0th row
    for (let i = 1; i < data.length; i = i + 1) {
      var row = data[i]; //i is the row number
      for (let u = 0; u < row.length; u = u + 1) {
        var generic = data[i][u]; //u is the column number
        var xPath = headings[u]; //gets each column of 0th row (headings:firstName,lastName,etc)
        page.parabank.inputValueAtName(xPath, generic);
      }
    }
    await driver.sleep(5000);
    return;
  });
};
