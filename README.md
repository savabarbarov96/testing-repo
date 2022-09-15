
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

* JavaScript
* Mocha
* Mochawesome
* Chai


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow the step-by-step to set up the working enviorment.

### Prerequisites

Install Node.js from the website https://nodejs.org/en/

Open CMD Promt and check the version
* npm
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


We can add --parallel to the package.json - npx mocha --no-timeouts --parallel *.js to run tests simunteniously.




Generating test visualization reports with mochawesome 

9. Install NPM Firefox driver
   ```sh
  npm install mochawesome
   ```
update the package.json to include the following:

"scripts": { "test": "mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register *.js" },

Run using npm test


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_If you have any jobs offers you can reach me at  [LinkedIn](https://www.linkedin.com/in/sava-barbarov-79a898232/)_

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



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
