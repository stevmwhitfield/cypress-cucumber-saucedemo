@cart
Feature: Cart Management

    Background:
        Given I visit the home page
        When I login as a standard user
        Then I should see the inventory page

    Scenario: Add product to Cart
        When I add a product to the cart
        Then I should see a cart badge with the number of products
        And I should see a button to remove the product

    Scenario: Remove product from Cart
        When I add a product to the cart
        And I remove the product from the cart
        Then I should not see the cart badge
        And I should see a button to add the product

    Scenario: View cart
        When I add a product to the cart
        And I click the cart button
        Then I should visit the cart page
        And I should see the product details