const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://parabank.parasoft.com/parabank/register.htm',

    elements: {
        registerButton: '//*[@id="loginPanel"]/p[2]/a',
        firstName: '//*[@id="customer.firstName"]',
        firstNameForgot: '//*[@id="firstName"]',
        lastName: '//*[@id="customer.lastName"]',
        lastNameForgot: '//*[@id="lastName"]',
        address: '//*[@id="customer.address.street"]',
        addressForgot: '//*[@id="address.street"]',
        city: '//*[@id="customer.address.city"]',
        cityForgot: '//*[@id="address.city"]',
        state: '//*[@id="customer.address.state"]',
        stateForgot:'//*[@id="address.state"]',
        zipCode: '//*[@id="customer.address.zipCode"]',
        zipCodeForgot:'//*[@id="address.zipCode"]',
        phone: '//*[@id="customer.phoneNumber"]',
        ssn: '//*[@id="customer.ssn"]',
        ssnForgot:'//*[@id="ssn"]',
        userName: '//*[@id="customer.username"]',
        passWord: '//*[@id="customer.password"]',
        confirm: '//*[@id="repeatedPassword"]',
        forgotLoginInfo: '//*[@id="loginPanel"]/p[1]/a',
        findMyLoginInfo: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        customerLookUp: '//*[@id="rightPanel"]/h1',
        userNameForCustomerLogin: '//*[@id="loginPanel"]/form/div[1]/input',
        passwordForCustomerLogin: '//*[@id="loginPanel"]/form/div[2]/input',
        customerLogin: '//*[@id="leftPanel"]/h2',
        loginInButton:'//*[@id="loginPanel"]/form/div[3]/input',
        findMyLoginInfoButton:'//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
    },

    checkForText: async function (text) {
        await driver.sleep(2000);
        var regEx = `//*[text()='${text}']`;
        return driver.findElement(By.xpath(regEx));
    },

    inputValueAtName: async function (name,val) {
        var selector = page.parabank.elements[name];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.parabank.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.parabank.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
};
