Feature: As a student i want to able to navigate to the page so that i can view information
@board @Boardsignin
  Scenario: Customer is displayed with collegeboard.org landing page
    Given I am on the board Portal
    When I click on signIn button

    When I click on student button
    Then I should see student email address entry box 

    When I click on emailAddress
    When I enter the username "test@gmail.com"
    When I click checkBox Remember my Email Address
    When I click next

    Then I see passWord
    When I click on passWord
    When I enter the password "testing1234"

    When I click signIn
    Then I Should see Unable to sign in message 