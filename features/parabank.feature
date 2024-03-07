Feature: As a customer I want to navigate to the page so that I can register on the ParaBank Portal
    # Background: 
    #     Given I am on the Parabank Portal 

  @Parabank @Parabankregister
  Scenario: Customer is displayed with ParaBank landing page and is going to register for a new account
    Given I am on the Parabank Portal
    When I click on Register button
    Then I should see Signing up is easy! page
    Given I input the following user information
      | firstName | lastName | address      | city     | state | zipCode | phone        | ssn        | userName  | passWord    | confirm     |
      | John      | Doe      | 123 First St | San Jose | CA    | 95148   | 123-555-6789 | 12-34-5678 | testing12 | tester1234! | tester1234! |
        #| First Name | Last Name | Address      | City     | State | Zip Code | Phone #      | SSN        | Username  | Password    | Confirm     |
    Then I click on Register Button 

  @ParaBank @Parabankcustomerlogin
  Scenario: Customer is displayed with ParaBank landing page and will login into the portal
    Given I am on the Parabank Portal
    Then I should see Customer Login
    Given I should submit the following user information 
    | userNameForCustomerLogin | passwordForCustomerLogin |
    | Johnny Test              | Testing1234!             |
    Then I click on Login In 

    # When I click on username
    # And I enter username
    # When I click on password
    # And I enter password

  @Parabank @Parabankforgotlogininfo
  Scenario: Customer is displayed with https://parabank.parasoft.com/parabank/register.htm landing page and would like to access their account but forgot their login information
    Given I am on the Parabank Portal
    When I click on Forgot login info
    Then I should see Customer Lookup
    Given I enter the following user information
      | firstNameForgot | lastNameForgot | addressForgot | cityForgot | stateForgot | zipCodeForgot | ssnForgot  |
      | John            | Doe            | 123 First St  | San Jose   | CA          | 95148         | 12-34-5678 |
    Then I click on Find My Login Info


