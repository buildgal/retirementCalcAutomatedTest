import { Then } from '@wdio/cucumber-framework';
import openRetirepg from '../pagesObjects/openRetire.js';

Then(/^I enter a social security override amount/, async function () {
    
  await openRetirepg.ssAmount.click();
  await openRetirepg.ssAmount.setValue("20000");

});

Then(/^I submit all required fields/, async function () {
 
  await openRetirepg.calBtn.click();


  });

  Then(/^I select no to social security benefits/, async function () {
    await openRetirepg.noSSB.click();
  });

  Then(/^I change marital status to is single/, async function () {
    await openRetirepg.martialSingle.click();
  });

  Then(/^I receive an error message/, async function () {
    
    await expect(openRetirepg.fillOutMsg).toHaveText("Please fill out all required fields");
  
  });

  Then(/^I receive results/, async function () {
    
    await expect(openRetirepg.resultsTitle).toHaveTextContaining("Results");
  
  });




