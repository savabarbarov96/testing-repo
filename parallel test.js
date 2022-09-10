"use strict";

const { Builder, By } = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");

var should = require("chai").should();

var assert = require('assert');


// Verify contact page elements

describe('Contact Page presence ', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Contact Page presence ', async function() {
    await driver.get("https://strategyinrush.com/")
    await driver.manage().window().setRect({ width: 1936, height: 1056 })
    await driver.findElement(By.css("#menu-item-73869 > a")).click()
    {
      const elements = await driver.findElements(By.name("your-name"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.name("your-email"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.name("your-subject"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.name("your-message"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".has-spinner"))
      assert(elements.length)
    }
    await driver.findElement(By.name("your-message")).click()
  })
})



