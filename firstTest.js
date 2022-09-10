"use strict";

const { Builder, By } = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");

var should = require("chai").should();

var assert = require('assert');


describe("First Test", function(){

  it("Test success",async function(){


      // Start the browser
      let driver = await new Builder().forBrowser("chrome").build();
    
      // set window size
      await driver.manage().window().setRect({ width: 1900, height: 1400 });
      // Get the URL
      await driver.get("https://strategyinrush.com/");
    
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
    
    
        // Chai should assertion
      checkNewsText.should.equal("NEWS");
    console.log("Test is " + checkNewsText)
    
      //Quit the session
      driver.close();
    
  })

})


