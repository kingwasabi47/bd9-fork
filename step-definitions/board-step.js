module.exports = function () {
//02/26/2024 given=this.given (write this.given for board.js using colleboard.features given)
//each then should be a clickElement
//each when should call elementExists
//When I click on signIn button

    this.Given ('I am on the board Portal',function() {
        return helpers.loadPage(page.board.url);
    });
    this.When('I click on signIn button', function () {
        return page.board.clickElement('homeSigninButton');
    }); 

    //When I click on student button
    this.When('I click on student button', function () {
        return page.board.clickElement('studentButton');
    });

    //Then I should see studentPage
    
    this.Then('I should see student email address entry box', function () {
        return page.board.elementExists('emailAddressEntry');
    });

    //When I enter on emailAddress
    this.When('I click on emailAddress', function () {
        return page.board.clickElement('emailAddressEntry');
    });

    this.When(/^I enter the username "([^"]*)"$/, function (value) {
        return page.board.inputEmailAddress(value);
    });
    //When I click checkBox Remember my Email Address
    this.When('I click checkBox Remember my Email Address', function () {
        return page.board.clickElement('checkBoxRememberMyEmailAddress');
    });

    //When I click next
    this.When('I click next', function () {
        return page.board.clickElement('nextButton');
    });

    //Then I see passWord
    
    this.Then('I see passWord', function () {
        return page.board.elementExists('password');
    });

    //When I click on passWord
    this.When('I click on passWord', function () {
        return page.board.clickElement('password');
    });

    this.When(/^I enter the password "([^"]*)"$/, function (value) {
        return page.board.inputEnterPassword(value);
    });

    //Then I Should see Unable to sign in messege 
    this.Then('I click signIn', function () {
        return page.board.clickElement('submitSigninButton');
    });

    //Then I Should see Unable to sign in messege 
    this.Then('I Should see Unable to sign in message', function () {
        return page.board.checkErrorMessage();
    });
    };

    

