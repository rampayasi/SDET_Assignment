package util;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Base {
	
	public static WebDriver driver;

	@Before
	public void initdriver() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\SDET\\Assignment1_SDET_Ram\\driver\\chromedriver.exe");

		driver = new ChromeDriver();
		
		System.out.println("in before Annotation");

	}
	
	@After
	public void exitdriver()
	{
		driver.quit();
		System.out.println("in after Annotayion");

	}

}
