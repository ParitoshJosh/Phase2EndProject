Feature: To test the Add to Cart functionality of Swag Labs application

  Background: 
    Given Launch the saucedemo website
    When Enter username as "standard_user"
    And Enter password as "secret_sauce"
    And click on login button
    Then Land on products page

  Scenario: Add product to cart and check if it has been added to cart or not
    When Click on add to cart for product "Sauce Labs Backpack"
    And Click on the link to open the cart
    Then Verify the product that has been added to the cart
