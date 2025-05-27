Feature: Add to cart

@addToCart
@RemoveFromCart
  Scenario: Add a product to the cart and verify it's listed
   When I add an item to cart
   Then I click on shopping cart
   Then I should see the item in the cart

@RemoveFromCart
  Scenario: Remove the product from the cart and validate.
   When I click on shopping cart
   When I remove an item in cart
   Then I should see it removed from the cart