# retirementCalcAutomatedTest
This repository host automated test for the Securian Retirement Calculator. The framework is built using Webdriver IO and Cucumber. Using the cucmber framework prioritzes the testing of behavior driven development. 

 #### TABLE OF CONTENTS 

  * [Acceptance_Criteria](#Acceptance_Criteria)
  * [Installation](#Installation)
  * [Execute_Test](#Execute_Test)
  * [Cucumber_Format](#Cucumber_Format)
  * [Badges](#Badges)
  * [Website](#Website)


## Acceptence_Criteria 
* User should be able to submit form with all required fields filled in 
* Additional Social Security fields should display/hide based on Social Security benefits toggle 
* User should be able to submit form with all fields filled in 
* User should be able to update default calculator values 

## Installation 
```
$npm i 
```

## Execute_Test
```
$npm run wdio 
```

## Cucumber_Format 
The cucumber format executes the test outlined on the feature files. The feature files outline the given steps a user will take. The steps are outlined under the step folder organized by given, when, and then files. 

Feature tested in are the following: 

* RequiredFields- This feature file test all the required feilds of the retirement calculator 
* SocialSecurityToggle- This feature file test the additional social security benefit toggle
* UpdateCalculator- Test the user should be able to update default calculator values

## Badges 
![JavaScript](https://img.shields.io/badge/JavaScript-62.5%25-yellow)<br/>
![CSS](https://img.shields.io/badge/CSS-21.7%25-purple) <br/>
![HTML](https://img.shields.io/badge/HTML-15.8%25-red) <br/>
![Gherkin](https://img.shields.io/badge/gherkin-scripting%20syntax-green)


## Website
Here is the website under test. 
https://www.securian.com/insights-tools/retirement-calculator.html
