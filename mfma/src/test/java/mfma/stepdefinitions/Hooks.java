package mfma.stepdefinitions;

import java.net.URL;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Reporter;
import org.testng.xml.XmlTest;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import mfproject.main.Session;

public class Hooks {
    
	@Before
	public static void launchApp(){
		
		try{
			
		XmlTest test = Reporter.getCurrentTestResult().getTestContext().getCurrentXmlTest();
		final String platform = test.getParameter("platform");
		final String device = test.getParameter("deviceName");

		switch(platform.toUpperCase()) {
    		case "ANDROID":{
    			DesiredCapabilities capabilities = new DesiredCapabilities();
    	    	capabilities.setCapability("device",platform);
    	    	capabilities.setCapability("deviceName",device);
    	    	capabilities.setCapability("platformName", platform);
    	    	capabilities.setCapability("appPackage", "com.mfiles.mobile"); 
    	    	capabilities.setCapability("app", "D:/MFMA/mfma/TestApps/mFiles-production-release-Q2.apk");
    	    	Session.driver =  new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
    	    	break;
    		}	
    		case "IOS":{
    			DesiredCapabilities capabilities = new DesiredCapabilities();
    	    	capabilities.setCapability("device",platform);
    	    	capabilities.setCapability("deviceName",device);
    	    	capabilities.setCapability("platformName", platform);
    	    	capabilities.setCapability("appPackage", "com.mfiles.mobile"); 
    	    	capabilities.setCapability("app", "D:/MFMA/mfma/TestApps/mFiles-production-release-Q2.ipa");
    	    	Session.driver =  new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
    	    	break;
    		}	
    		default:{
    			DesiredCapabilities capabilities = new DesiredCapabilities();
    	    	capabilities.setCapability("device","Android");
    	    	capabilities.setCapability("deviceName","emulator-5554");
    	    	capabilities.setCapability("platformName", "Android");
    	    	capabilities.setCapability("appPackage", "com.mfiles.mobile"); 
    	    	capabilities.setCapability("app", "D:/MFMA/mfma/TestApps/mFiles-production-release-Q2.apk");
    	    	Session.driver =  new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
    			}	
    		}
		}
		catch(Exception e){
			e.printStackTrace();
		}
    	
    }
    
    @After
    public static void quitDriver(){
    	Session.driver.quit();
    	Session.driver = null;
    }
}
