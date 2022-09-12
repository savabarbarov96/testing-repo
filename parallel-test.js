"use strict";

const { Builder, By } = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");


const ltCapabilities = require("../testing-repo/capabilities")

// const ltCapabilities = require("../testing-repo/capabilities"); // Lambdatest 

var should = require("chai").should();

var assert = require("assert");

// lambdatest 


// Verify contact page elements

describe("Contact Page presence ", function () {

  var driver;
  this.timeout(30000);
  let vars;

  beforeEach(function(done) {
     driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(ltCapabilities.capabilities)
      .build();
      done();
  });
  // afterEach(async function () {g
  //   await driver.quit();
  // });

  const USERNAME = "savabarbarov96";
  //key
  const KEY = "43rlSblNKFQrmjFXxjwj6odqbteFTSrAGjQEqel36LLhTpJroQ";

  //host
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  const gridUrl = "https://" + USERNAME + ':' + KEY + '@' + GRID_HOST;


  it("Contact Page presence ", async function () {
    // Verify all contact form elements are present
    // let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://strategyinrush.com/");
    await driver.manage().window().setRect({ width: 1936, height: 1056 });
    await driver.findElement(By.css("#menu-item-73869 > a")).click();
    {
      const elements = await driver.findElements(By.name("your-name"));
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(By.name("your-email"));
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(By.name("your-subject"));
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(By.name("your-message"));
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(By.css(".has-spinner"));
      assert(elements.length);
    }
    await driver.findElement(By.name("your-message")).click();
    driver.close();
  });

  // Verify search team function is working
  it("Verify search teams function is working", async function () {
    // let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://strategyinrush.com/");
    await driver.manage().window().setRect({ width: 1936, height: 1056 });
    await driver.switchTo().frame(0);
    await driver.executeScript("window.scrollTo(0,0)");
    await driver.switchTo().defaultContent();
    await driver.findElement(By.id("cookie_action_close_header")).click();
    await driver
      .findElement(By.css(".elementor-animation-buzz .elementor-button-text"))
      .click();
    await driver.findElement(By.id("team_name")).click();
    await driver.findElement(By.id("team_name")).sendKeys("Test");
    driver.close();
  });
});