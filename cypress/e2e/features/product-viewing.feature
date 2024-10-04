@products
Feature: Product Viewing

    Background: Logged in as valid user
        Given I visit the home page
        When I login as a standard user
        Then I should see the inventory page
        And I should see a list of products

    Scenario Outline: Products can be sorted
        When I select the "<sort>" sort option
        Then I should see the product "<product1>" first
        And I should see the product "<product2>" second
        And I should see the product "<product3>" third

        Examples:
            | sort | product1                          | product2              | product3                 |
            | az   | Sauce Labs Backpack               | Sauce Labs Bike Light | Sauce Labs Bolt T-Shirt  |
            | za   | Test.allTheThings() T-Shirt (Red) | Sauce Labs Onesie     | Sauce Labs Fleece Jacket |
            | lohi | Sauce Labs Onesie                 | Sauce Labs Bike Light | Sauce Labs Bolt T-Shirt  |
            | hilo | Sauce Labs Fleece Jacket          | Sauce Labs Backpack   | Sauce Labs Bolt T-Shirt  |