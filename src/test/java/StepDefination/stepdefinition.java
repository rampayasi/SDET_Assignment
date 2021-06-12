/*
 * 
 * 
 * Ramprakash Payasi
 */


package StepDefination;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.Base;


public class stepdefinition {
	
	WebDriver driver = Base.driver;
	WebDriverWait wait = new WebDriverWait(driver, 50);

	@Given("^user should be on the home page$")
	public void user_should_be_on_the_home_page() throws Throwable {
	    driver.get("http://elearningm1.upskills.in/index.php");
	    wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//a[contains(text(),'Homepage')]"))));  
	    Thread.sleep(3000);
	  
	}

	@When("^user clicks on the Signup! link$")
	public void user_clicks_on_the_Signup_link() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(text(),'Sign up!')]")).click();
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//p[contains(text(),'Follow courses')]")))); 
	   
	}

	@Then("^Registration page should display$")
	public void registration_page_should_display() throws Throwable {
		String registration_page = driver.findElement(By.xpath("//h2[contains(text(),'Registration')]")).getText();
		System.out.println("registration_page" +registration_page);
		Thread.sleep(3000);
	    
	}

	@Then("^enter all madatory info \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void enter_all_madatory_info(String Follow_Course, String firstname, String lastname, String email, String username, String passnumber, String conf_pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String fol_course = driver.findElement(By.xpath("//p[contains(text(),'Follow courses')]")).getText();
		
		driver.findElement(By.xpath("//input[@id='registration_firstname']")).sendKeys(firstname);
		driver.findElement(By.xpath("//input[@id='registration_lastname']")).sendKeys(lastname);
		driver.findElement(By.xpath("//input[@id='registration_email']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='pass1']")).sendKeys(passnumber);
		driver.findElement(By.xpath("//input[@id='pass2']")).sendKeys(conf_pass);
		
	
	}

	@Then("^click on the Submit button$")
	public void click_on_the_Submit_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		driver.findElement(By.id("registration_submit")).click();
		Thread.sleep(3000);
		
	}

	@Then("^Signup confirmation page is displaying with user info \"([^\"]*)\",\"([^\"]*)\"$")
	public void signup_confirmation_page_is_displaying_with_user_info(String firstname, String lastname) throws Throwable {
		driver.getPageSource().contains(lastname);
		
		//assertTrue(usname.contains(firstname));
		//assertTrue(usname.contains(lastname));
		Thread.sleep(3000);
	    
	}

	//**********Scenario 2*******************
	
	@Given("^Login with valid name$")
	public void Login_with_valid_name() throws Throwable {
		driver.manage().window().maximize();
	    driver.get("http://elearningm1.upskills.in/index.php");
	    wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//a[contains(text(),'Homepage')]"))));  
		driver.findElement(By.xpath("//input[@id='login']")).sendKeys("TestSDETRam_c");
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Test_c");
		driver.findElement(By.xpath("//button[@id='form-login_submitAuth']")).click();
		Thread.sleep(3000);
		
	}

	@When("^click on the user icon$")
	public void click_on_the_user_icon() throws Throwable {
		driver.findElement(By.xpath("//li[@class='dropdown avatar-user']")).click();
		Thread.sleep(3000);
	    
	}

	@When("^click on the link \"([^\"]*)\"$")
	public void click_on_the_link(String option) throws Throwable {
		driver.findElement(By.partialLinkText(option)).click();
		Thread.sleep(2000);
	}

	@When("^click on the compose$")
	public void click_on_the_compose() throws Throwable {
		driver.findElement(By.xpath("//div[@class='col-sm-6']/a")).click();
	    Thread.sleep(3000);
		
	}

	@When("^Enter Send To, Subject, Message \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\"$")
	public void enter_Send_To_Subject_Message(String send_to, String subject, String message) throws Throwable {
	    //driver.switchTo().frame("compose_message");
		driver.findElement(By.xpath("//li[@class='select2-search select2-search--inline']/input")).sendKeys(send_to); 
		List<WebElement> dropdown = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//li[@class='select2-results__option select2-results__option--highlighted']")));
	     dropdown.get(0).click();
	     
		
	    driver.findElement(By.id("compose_message_title")).sendKeys(subject);
	    List<WebElement> iframe_a = driver.findElements(By.tagName("iframe"));
	    driver.switchTo().frame(driver.findElement(By.xpath("//div[@class='cke_contents cke_reset']/iframe[1]")));
	    //driver.findElement(By.xpath("//body[@class='cke_editable cke_editable_themed cke_contents_ltr cke_show_borders']/p[1]")).sendKeys(message);
	    WebElement m = driver.findElement(By.cssSelector("body"));
	    m.sendKeys(message);
	    
	    
		
	}

	@When("^click on the Send Message$")
	public void click_on_the_Send_Message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.switchTo().defaultContent();
		Thread.sleep(3000);
		driver.findElement(By.name("compose")).click();
	   
	}

	@Then("^Message should be send successfully$")
	public void message_should_be_send_successfully() throws Throwable {
	   String alert =  driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	   assertTrue(alert.contentEquals("The message has been sent to virat kohli (virat)"));
	}


	
	
}
