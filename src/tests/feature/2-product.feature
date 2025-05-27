Feature: Product Page
  Background:
    Given I am have successfully logged in 

@products_load
  Scenario: Verify the product list loads correctly after login
   Then I should see all the products displayed
   Then I should see "6" products displayed
