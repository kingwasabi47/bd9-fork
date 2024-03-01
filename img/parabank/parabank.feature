Feature: As a customer I want to able to navigate to the page so that i can view information

    @Parabank @Parabankregister
    Scenario: Customer is displayed with https://parabank.parasoft.com/parabank/register.htm landing page
        Given I am on the Parabank Portal
        When I click on Register button
        Then I should see Signing up is easy! page

        When I click on First Name button
        Then I should enter First Name

        When I click on Last Name
        Then I should enter Last Name

        When I click on Address
        Then I should enter Address

        When I click on City
        Then I should enter City

        When I click on State
        Then I should enter State

        When I click on Zip Code
        Then I should enter Zip Code

        When I click on Phone #
        Then I should enter Phone #

        When I click on SSN
        Then I should Enter SSN

        When I click on Username
        Then I should enter Username

        When I click on Password
        Then I should enter Password

        When I click Confirm
        Then I should enter Confrim

        When I click Register
        Then I should Register


Feature: As a student i want to able to navigate to the page so that i can view information

    @Parabank @Parabankforgotlogininfo
    Scenario: Customer is displayed with https://parabank.parasoft.com/parabank/register.htm landing page

        Given I am on the Parabank Portal
        When I click on Forgot Login Info button
        Then I should see Customer Lookup

        When I click on First Name button
        Then I should enter First Name

        When I click on Last Name
        Then I should enter Last Name

        When I click on Address
        Then I should enter Address

        When I click on City
        Then I should enter City

        When I click on State
        Then I should enter State

        When I click on Zip Code
        Then I should enter Zip Code

        When I click on SSN
        Then I should Enter SSN