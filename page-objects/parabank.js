const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://parabank.parasoft.com/parabank/register.htm',

    elements: {
        Register: '//*[@id="loginPanel"]/p[2]/a',
        firstName: '//*[@id="customer.firstName"]',
        lastName: '//*[@id="customer.lastName"]',
        address: '//*[@id="customer.address.street"]',
        city: '//*[@id="customer.address.city"]',
        state: '//*[@id="customer.address.state"]',
        zipCode: '//*[@id="customer.address.zipCode"]',
        phone: '//*[@id="customer.phoneNumber"]',
        SSN: '//*[@id="customer.ssn"]',
        userName: '//*[@id="customer.username"]',
        passWord: '//*[@id="customer.password"]',
        confirm: '//*[@id="repeatedPassword"]',
        forgotLogininfo: '//*[@id="loginPanel"]/p[1]/a',
        findMylogininfo: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
    },

    
};