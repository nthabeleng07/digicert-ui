Feature: Checkout

@Checkout
Scenario: Checkout and validate order message appears
     When I click the Checkout button
     Then I should provide Checkout information
     When I click continue button
     Then I should see Order information
     When I click the finish button
     Then I should see completion message

