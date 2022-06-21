Feature: Shopping Cart

  This feature covers all around the shopping cart

  Scenario: Adding an item to the shopping cart
    Given a shopping cart
    And a product called 'apple' that costs 1.00
    When I add 1 'apple' to the shopping cart
    Then the cart should have a total item count of 1
    And there should be 1 cart item in the cart
    And the total should be 1.00


  Scenario: Adding an item that is already in the cart
    Given a shopping cart
    And a product called 'apple' that costs 1.00
    And the cart already contains 1 'apple'
    When I add 1 'apple' to the shopping cart
    Then the cart should have a total item count of 2
    And there should be 1 cart item in the cart
    And the total should be 2.00