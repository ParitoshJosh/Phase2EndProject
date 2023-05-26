package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCartStepDefs {

	WebDriver driver = Hooks.driver;

	@When("Click on add to cart for product {string}")
	public void click_on_add_to_cart_for_product(String productName) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		String xpath = "//*[@class='inventory_item_name' and text()='kuch bhi']";
		String Product = xpath.replace("kuch bhi", productName);
		WebElement addToCartBtn = driver.findElement(By.xpath(Product + "/following::button[1]"));
		Thread.sleep(1000);
		addToCartBtn.click();
		
	}

	@When("Click on the link to open the cart")
	public void click_on_the_link_to_open_the_cart() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement cartBtn = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		Thread.sleep(1000);
		cartBtn.click();

	}

	@Then("Verify the product that has been added to the cart")
	public void verify_the_product_that_has_been_added_to_the_cart() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement prodInCart = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
		Thread.sleep(1000);
		String actualProductName = prodInCart.getText();
		String expectedProductName = "Sauce Labs Backpack";
		Assert.assertEquals(actualProductName, expectedProductName);
	}

}
