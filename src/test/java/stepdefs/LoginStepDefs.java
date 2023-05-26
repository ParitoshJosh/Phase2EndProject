package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ById;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {

	WebDriver driver = Hooks.driver;

	@Given("Launch the saucedemo website")
	public void launch_the_saucedemo_website() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(2000);

	}

	@When("Enter username as {string}")
	public void enter_username_as(String usernameVal) {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(usernameVal);

	}

	@When("Enter password as {string}")
	public void enter_password_as(String passwordVal) {
		// Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(passwordVal);
	}

	@When("click on login button")
	public void click_on_login_button() {
		// Write code here that turns the phrase above into concrete actions
		WebElement loginButton = driver.findElement(By.id("login-button"));
		loginButton.click();
	}

	@Then("Land on products page")
	public void land_on_products_page() {
		// Write code here that turns the phrase above into concrete actions
		String expUrl = driver.getCurrentUrl();
		String actualUrl = "https://www.saucedemo.com/inventory.html";
		Assert.assertEquals(expUrl, actualUrl);
	}

	@Then("Should be getting the error message {string}")
	public void should_be_getting_the_error_messaga(String expErrorMsg) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		WebElement error = driver.findElement(By.xpath("//*[@data-test='error']"));
		Thread.sleep(3000);
		String ActError = error.getText();
		Assert.assertEquals(ActError, expErrorMsg);
	}
}
