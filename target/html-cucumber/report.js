$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "To test the Add to Cart functionality of Swag Labs application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the saucedemo website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.launch_the_saucedemo_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Land on products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.land_on_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to cart and check if it has been added to cart or not",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on add to cart for product \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.click_on_add_to_cart_for_product(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the link to open the cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.click_on_the_link_to_open_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product that has been added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddToCartStepDefs.verify_the_product_that_has_been_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login test for saucedemo.com",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the saucedemo website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.launch_the_saucedemo_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify login success scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "Enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Land on products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.land_on_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Should be getting the error message \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the saucedemo website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.launch_the_saucedemo_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "Enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password as \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Should be getting the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.should_be_getting_the_error_messaga(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the saucedemo website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.launch_the_saucedemo_website()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "Enter username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Should be getting the error message \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.should_be_getting_the_error_messaga(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});