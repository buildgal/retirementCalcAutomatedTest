Feature: Test the additional social security benefit toggle 

Background: As a user I open the retirement calculator 
    Given I open the retirement calculator

Scenario: 1. As a user, I can switch between selecting yes and no to the social security benefit  
    When I select yes to social security benefits
    Then I select no to social security benefits  

Scenario: 2. As a user, when I select yes to social security benefits I can switch between single and married    
    When I select yes to social security benefits
    When I change marital status to is married
    Then I change marital status to is single

Scenario: 3. As a user, when I select yes to social security benefits  I can enter a social security override amount
    When I select yes to social security benefits
    Then I enter a social security override amount