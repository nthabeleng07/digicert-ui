@createUser
Feature: Create a new user

  Scenario: Send user data and validate creation
    Given I send a POST request to "/api/users"
    Then the post response status code should be 201
    Then the response should contain name "Sam"

   
