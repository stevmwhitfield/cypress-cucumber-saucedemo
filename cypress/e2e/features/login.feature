@login
Feature: User can login

    Background: User is on the home page
        Given I visit the home page
        Then I should see the login container

    Scenario: User can login as a standard user
        When I login as a standard user
        Then I should see the inventory page
        And the product images should be unique

    Scenario: User can login as a locked out user
        When I login as a locked out user
        Then I should see a locked out message

    Scenario: User can login as a problem user
        When I login as a problem user
        Then I should see the inventory page
        And the product images should be the same

    Scenario Outline: Invalid credentials are rejected
        When I login with invalid username '<username>' and password '<password>'
        Then I should see an error '<message>'

        Examples:
            | username      | password     | message                                                                   |
            | standard_user |              | Epic sadface: Password is required                                        |
            |               | secret_sauce | Epic sadface: Username is required                                        |
            | abc           | 123          | Epic sadface: Username and password do not match any user in this service |