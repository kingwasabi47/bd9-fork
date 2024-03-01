const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.collegeboard.org/',

    elements: {
        homeSigninButton: '//*[@id="block-cborghomepage"]/div/div[1]/div[3]/div/div[2]/div/div/a',
        studentButton: '//*[@id="content"]/div/div[2]/div/div/a[1]',
        emailAddressEntry: '//*[@id="idp-discovery-username"]',
        checkBoxRememberMyEmailAddress: '//*[@id="form32"]/div[1]/div[2]/div[2]/div/span/div/label',
        nextButton: '//*[@id="idp-discovery-submit"]',
        password: '//*[@id="okta-signin-password"]',
        submitSigninButton: '//*[@id="okta-signin-submit"]',
        errorBox: '//*[@id="form19"]/div[1]/div[1]/div',
    },
    scrollToElement: async function (objectKey) {
        console.log('objectkey= ' + objectKey)
        var selector = page.board.elements[objectKey];
        console.log('selector= ' + selector)
        await driver.sleep(2000);
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    },
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.board.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function (val) {
        var selector = page.board.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function (val) {
        var selector = page.board.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function (name, val) {
        var selector = page.board.elements[name];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.board.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
    loginPortal: async function (username) {
        await helpers.loadPage(page.board.url);
        await this.inputUserName(username)
        await this.inputPassword(page.board.elements['PasswordVal'])
        await this.clickElement('LoginBtn')
        await driver.sleep(2000);
        return;
    },
    verifyApproverName: async function (val) {
        var selector = page.board.elements['approverName'];
        var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
        assert.equal(page.board.content[val], result);
        
    },

    inputEmailAddress: async function (val) {
        var selector = page.board.elements['emailAddressEntry'];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
      },

      inputEnterPassword: async function (val) {
        var selector = page.board.elements['password'];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
      },

      checkErrorMessage: async function () {
        await driver.sleep(2000);
        //return driver.find_elements_by_xpath("//*[contains(text(), 'Unable to sign in')]")
        return driver.findElement(By.xpath("//*[text()='Unable to sign in']"))
      },
      

};
    