package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(
		
	features = "C:\\SDET\\Assignment1_SDET_Ram\\src\\test\\java\\features",
	glue = {"StepDefination","util"},
	//tags ={"@Regression"},
	monochrome = true,
	plugin = {"pretty","junit:target/reports/jreport.xml", "html:target/reports/SDET.html", "json:target/reports/SDET.json"}
	)


public class testrunnerTest {

}
