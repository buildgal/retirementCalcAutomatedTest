Feature:  Test all the required feilds of the retirement calculator 

Background: Open the retirement calculator 
    Given I open the retirement calculator

Scenario: 1. As as user, I should be able to submit form with all fields filled in including fields that are not required
    When I enter current age
    When I enter a retirement age  
    When I enter current income
    When I enter my spouses annual income
    When I enter current retirement savings balance
    When I enter the annual savings
    When I enter the rate of increase
    When I select yes to social security benefits
    Then I enter a social security override amount
    Then I submit all required fields
    Then I receive results

Scenario: 2. As as user, I should NOT be able to submit when current age is missing and I should receive an error message 
    When I enter a retirement age  
    When I enter current income
    When I enter my spouses annual income
    When I enter current retirement savings balance
    When I enter the annual savings
    When I enter the rate of increase
    When I select yes to social security benefits
    Then I submit all required fields
    Then I receive an error message

Scenario: 3. As as user, I should NOT be able to submit when retirement age is missing and I should receive an error message
    When I enter current age 
    When I enter current income
    When I enter my spouses annual income
    When I enter current retirement savings balance
    When I enter the annual savings
    When I enter the rate of increase
    When I select yes to social security benefits
    Then I submit all required fields
    Then I receive an error message

Scenario: 4. As as user, I should NOT be able to submit when current income is missing and I should receive an error message
    When I enter current age
    When I enter a retirement age  
    When I enter my spouses annual income
    When I enter current retirement savings balance
    When I enter the annual savings
    When I enter the rate of increase
    When I select yes to social security benefits
    Then I submit all required fields
    Then I receive an error message

Scenario: 5. As a user, I should Not be able to submit when the current retirement savings balance is missing and I should receive an error message 
    When I enter current age
    When I enter a retirement age  
    When I enter current income
    When I enter my spouses annual income
    When I enter the annual savings
    When I enter the rate of increase
    When I select yes to social security benefits
    Then I submit all required fields
    Then I receive an error message

Scenario: 6. As as user, I should NOT be able to submit when annual savings is missing and I should receive an error message 
    When I enter current age
    When I enter a retirement age  
    When I enter current income
    When I enter my spouses annual income
    When I enter current retirement savings balance
    When I enter the rate of increase
    When I select yes to social security benefits
    Then I submit all required fields
    Then I receive an error message

Scenario: 7. As as user, I should NOT be able to submit when rate of increase is missing and I should receive and error message
    When I enter current age
    When I enter a retirement age  
    When I enter current income
    When I enter my spouses annual income
    When I enter current retirement savings balance
    When I enter the annual savings
    When I select yes to social security benefits
    Then I submit all required fields
    Then I receive an error message
