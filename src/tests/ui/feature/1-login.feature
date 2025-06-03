@login
Feature: Login Page
  Background:
    Given I am on the "https://www.saucedemo.com" page

@login_correct_cred 
@products_load 
@addToCart 
@RemoveFromCart
@Checkout
  Scenario: Login with standard_user and and validate successful login with correct credentials
    When I provide correct username "standard_user"
    When I provide correct password "secret_sauce"
    When I click login button
    Then I should login successfully

@login_incorrect_cred
  Scenario: Login with standard_user validate error message with incorrect credentials
    When I provide incorrect username "standard_user222"
    When I provide incorrect password "secret_sauce222"
    When I click login button
    Then I should get error message
