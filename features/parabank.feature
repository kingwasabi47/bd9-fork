Feature: As a customer I want to able to navigate to the page so that i can view information

    @Parabank @Parabankregister
    Scenario: Customer is displayed with ParaBank landing page and is going to register for a new account
        Given I am on the Parabank Portal
        When I click on Register button
        Then I should see Signing up is easy! page

        Given I input the following user information
        #| First Name | Last Name | Address      | City     | State | Zip Code | Phone #      | SSN        | Username  | Password    | Confirm     |
        | firstName | lastName | address      | city     | state | zipCode | phone        | ssn        | userName  | passWord    | confirm     |
        | John      | Doe      | 123 First St | San Jose | CA    | 95148   | 123-555-6789 | 12-34-5678 | testing12 | tester1234! | tester1234! |
        And I see the following array of form fields
        #| firstName | lastName | address | city | state | zipCode | phone | ssn | userName | passWord | confirm |

        # And I enter "firstName" as "<First Name>"
        # And I enter "lastName" as "<Last Name>"
        # And I enter "address" as "<Address>"
        # And I enter "city" as "<City>"
        # And I enter "state" as "<State>"
        # And I enter "zipCode" as "<Zip Code>"
        # And I enter "phone" as "<Phone #>"
        # And I enter "ssn" as "<SSN>"
        # And I enter "userName" as "<Username>" 
        # And I enter "passWord" as "<Password>"
        # And I enter "confirm" as "<Confirm>
        

    #     When I click on Last Name
    #     Then I should enter Last Name

    #     When I click on Address
    #     Then I should enter Address

    #     When I click on City
    #     Then I should enter City

    #     When I click on State
    #     Then I should enter State

    #     When I click on Zip Code
    #     Then I should enter Zip Code

    #     When I click on Phone #
    #     Then I should enter Phone #

    #     When I click on SSN
    #     Then I should Enter SSN

    #     When I click on Username
    #     Then I should enter Username

    #     When I click on Password
    #     Then I should enter Password

    #     When I click Confirm
    #     Then I should enter Confrim

    #     When I click Register
    #     Then I should Register

    # @Parabank @Parabankforgotlogininfo
    # Scenario: Customer is displayed with https://parabank.parasoft.com/parabank/register.htm landing page

    #     Given I am on the Parabank Portal
    #     When I click on Forgot Login Info button
    #     Then I should see Customer Lookup

    #     When I click on First Name button
    #     Then I should enter First Name

    #     When I click on Last Name
    #     Then I should enter Last Name

    #     When I click on Address
    #     Then I should enter Address

    #     When I click on City
    #     Then I should enter City

    #     When I click on State
    #     Then I should enter State

    #     When I click on Zip Code
    #     Then I should enter Zip Code

    #     When I click on SSN
    #     Then I should Enter SSN