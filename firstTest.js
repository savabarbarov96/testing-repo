"use strict";

const { Builder, By } = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");

// const ltCapabilities = require("../testing-repo/capabilities"); //lambdatest

var should = require("chai").should();

var assert = require("assert");

// url
const urlEndPoint = "https://strategyinrush.com/";

//lambdatest
describe("First Test", function () {
  // var driver; //lambdatest

  // //username
  // const USERNAME = "savabarbarov96";
  // //key
  // const KEY = "43rlSblNKFQrmjFXxjwj6odqbteFTSrAGjQEqel36LLhTpJroQ";

  // //host
  // const GRID_HOST = "hub.lambdatest.com/wd/hub";

  // const gridUrl = "https://" + USERNAME + ':' + KEY + '@' + GRID_HOST;

  // beforeEach(function () {
  //   driver = new Builder()
  //     .usingServer(gridUrl)
  //     .withCapabilities(ltCapabilities.capabilities)
  //     .build();
  // });

  // afterEach(async function () {
  //   await driver.quit();
  // });
  // //lambdatest

  it("First test", async function () {
    // Start the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // Get the URL
    await driver.get(urlEndPoint);
    // set window size
    await driver.manage().window().setRect({ width: 1900, height: 1400 });

    // Click news BY ID
    // await driver.findElement(By.id("menu-item-73864")).click()

    // By CSS
    // await driver.findElement(By.css("#menu-item-73864 > a")).click()

    await driver.findElement(By.css("#menu-item-73864 > a")).click();

    // Let checkNewsText assertion to variable
    let checkNewsText = await driver
      .findElement(By.css("h1"))
      .getText()
      .then(function (value) {
        return value;
      });

    console.log(checkNewsText);
    // Chai should assertion
    checkNewsText.should.equal("NEWS");
    console.log("Test is " + checkNewsText);

    //Quit the session
    driver.close();
  });
});
