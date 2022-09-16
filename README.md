  <h3 align="center">Automated tests using Selenium with JS</h3>

  <p align="center">
    Some of the tests that I used to automate some manual tests using Selenium WebDriver
    <br />
    <a href="https://www.linkedin.com/in/sava-barbarov-79a898232/"><strong>My Linkedin»</strong></a>
    <br />
    <br />
  </p>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The tests were build with Selenium WebDriver and the code is JavaScript.

Additional libraries that were used.

- <b>JavaScript</b>
- <b>Mocha</b>
- <b>Mochawesome</b>
- <b>Chai</b>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow the step-by-step to set up the working enviorment.

### Prerequisites

Install Node.js from the website https://nodejs.org/en/

Open CMD Promt and check the version

- npm
  ```sh
  node --v
  ```

### Installation

Create new test project folder
Open CMD terminal and navigate to the directory of the folder (cd /path/)

1. Once navigated type in the following command
2. Clone the repo
   ```sh
   npm init
   ```
3. Install NPM package Selenium-Webdriver
   ```sh
   npm install selenium-webdriver
   ```
4. Set up PATH Environmentals Method 2: Setting ChromeDriver Path in Windows Environment Variables • Step 1: Go to My Computer and Right click to get the context menu. MyComputer Properties • Step 2: Click on the Change Setting on the opened window. Change Settings • Step 3: Click on Advance tab and click on Environment Variables.

5. Select Path under System Variables and click on Edit.

6. Step 5: At the end of the string use semicolon and paste the path of the ChromeDriver. On my machine my ChromeDriver exe resides in D:\Drivers\

7. Install NPM package Google Chrome Driver

   ```sh
   Npm install chromedriver
   ```

8. Install NPM Firefox driver
   ```sh
   npm install geckodriver
   ```

Install Chai /for assertions/

Install Mocha for test reporting

We can run the code with npx mocha --no-timeouts /Tests/*.js (the path of the tests) 11.1 We can modify the package.json to "scripts": { "test": "mocha --no-timeouts *js" }
and then proceed to execute the tests using the "npm test" in the terminal

We can add --parallel to the package.json - npx mocha --no-timeouts --parallel \*.js to run tests simunteniously.

Generating test visualization reports with mochawesome

3. Install NPM Mochawesome
   ```sh
   npm install mochawesome
   ```
   update the package.json to include the following:

"scripts": { "test": "mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register \*.js" },

Run using npm test

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_If you have any jobs offers you can reach me at [LinkedIn](https://www.linkedin.com/in/sava-barbarov-79a898232/)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add README
- [x] Update some tests to run in a cloud.
- [ ] Add the tests to Selenium Grid
- [ ] Add some API testing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sava Barbarov - savabarbarov96@gmail.com

Project Link: [https://github.com/savabarbarov96/testing-repo](https://github.com/savabarbarov96/testing-repo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
