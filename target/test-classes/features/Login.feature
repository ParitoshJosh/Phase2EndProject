@Login
Feature: Login test for saucedemo.com

  Background: 
    Given Launch the saucedemo website

  Scenario: Verify login success scenario using parameters
    When Enter username as "standard_user"
    And Enter password as "secret_sauce"
    And click on login button
    Then Land on products page

  Scenario Outline: Verify the error message when we give incorrect username and password
    When Enter username as "<UserName>"
    And Enter password as "<Password>"
    And click on login button
    Then Should be getting the error message "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
