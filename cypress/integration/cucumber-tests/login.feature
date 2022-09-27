Feature: Login to meet up group for Test Hive

    As a Test Hive member
    I want to login into meet up application
    So that I can follow upcoming events

    Scenario: Invalid Login
    Given I am in the login page
    And I want to wait 2000 milliseconds
    When I type my username
    And I type my password
    And I see url "login"
    And I click on submit button
    Then I should see error message

    #@focus
    Scenario: Invalid Login with parameters
    Given I am in the login page
    When I type my "username"
    And I type my "password"
    And I click on submit button
    Then I should see error message
   