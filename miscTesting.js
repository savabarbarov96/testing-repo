"use strict";

const { Builder, By } = require("selenium-webdriver");
require("chromedriver");
require("geckodriver");

var should = require("chai").should();

var assert = require('assert');


// Verify contact page elements

describe('testCommentFunctionality', function() {
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
  // Verify search team function is working
  it('testCommentFunctionality', async function() {
    await driver.get("https://strategyinrush.com/")
    vars["randomEmail"] = await driver.executeScript("return \"username\" + Math.floor(Math.random() * 1000000) +  \"@gmail.com\"") // generate random emaiil
    console.log(vars["randomEmail"])
    await driver.manage().window().setRect({ width: 1382, height: 721 })
    await driver.switchTo().frame(0)
    await driver.executeScript("window.scrollTo(0,300)")
    await driver.switchTo().defaultContent()
    await driver.findElement(By.id("cookie_action_close_header")).click()
    await driver.findElement(By.css("#menu-item-73864 > a")).click()
    await driver.findElement(By.css(".post74292 img")).click()
    await driver.findElement(By.id("comment")).click()
    await driver.findElement(By.id("comment")).sendKeys("Nice!!")
    await driver.findElement(By.id("author")).click()
    await driver.findElement(By.id("author")).sendKeys("Test")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.css(".blog")).click()
    await driver.findElement(By.id("submit")).click()
    await driver.findElement(By.id("email")).sendKeys(vars["randomEmail"])
    await driver.findElement(By.id("submit")).click()
  })
})