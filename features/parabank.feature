Feature: As a customer I want to able to navigate to the page so that i can view information
    # Background: 
    #     Given I am on the Parabank Portal 
    @Parabank @Parabankregister
    Scenario: Customer is displayed with ParaBank landing page and is going to register for a new account
        Given I am on the Parabank Portal
        When I click on Register button
        Then I should see Signing up is easy! page
        Given I input the following user information
        #| First Name | Last Name | Address      | City     | State | Zip Code | Phone #      | SSN        | Username  | Password    | Confirm     |
        | firstName | lastName | address      | city     | state | zipCode | phone        | ssn        | userName  | passWord    | confirm     |
        | John      | Doe      | 123 First St | San Jose | CA    | 95148   | 123-555-6789 | 12-34-5678 | testing12 | tester1234! | tester1234! |

  @Parabank @Parabankforgotlogininfo

  Scenario: Customer is displayed with https://parabank.parasoft.com/parabank/register.htm landing page
    Given I am on the Parabank Portal
    When I click on Forgot login info
    Then I should see Customer Lookup
    Given I enter the following user information
    | firstNameForgot | lastNameForgot | addressForgot | cityForgot | stateForgot | zipCodeForgot | ssnForgot  |
    | John            | Doe            | 123 First St  | San Jose   | CA          | 95148         | 12-34-5678 |
    

