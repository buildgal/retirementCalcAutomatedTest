Feature: User should be able to update default calculator values

Background: Open retirement calculator and enter required fields
    Given I open the retirement calculator 
    When I enter current age
    When I enter a retirement age  
    When I enter current income
    When I enter current retirement savings balance
    When I enter the annual savings
    When I enter the rate of increase

Scenario: 1. As as user, I should be able to edit default values and cancel 
    When I select adjust default values link 
    When I change the default values
    Then I select cancel to default values 
    Then I submit all required fields
    Then I record results scenario 1

Scenario: 2. As as user, I should be able to adjust default values save changes and compare results 
    When I select adjust default values link 
    When I change the default values
    Then I submit all required fields
    Then I record results scenario 2 and compare

