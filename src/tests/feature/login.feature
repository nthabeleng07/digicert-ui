@login
Feature: Login Page
  Background:
    Given I am on the "https://www.saucedemo.com/" page

@login_correct_cred
  Scenario: Login with standard_user and and validate successful login with correct credentials
    When I provide correct credentials
    Then I should login successfully

@login_incorrect_cred
  Scenario: Login with standard_user validate error message with incorrect credentials
    When I provide incorrect credentials
    Then I should get error message "something"
