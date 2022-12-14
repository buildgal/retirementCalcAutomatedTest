import { When } from '@wdio/cucumber-framework';
import openRetirepg from '../pagesObjects/openRetire.js';

When(/^I enter current age/, async function () {
    
    await browser.pause(3000);
    await openRetirepg.currentAge.setValue("45"); 
    
  });


 When(/^I enter a retirement age/, async function () {
    
  await openRetirepg.retireAge.click();
  await openRetirepg.retireAge.setValue("65"); 
});

  When(/^I enter current income/, async function () {

    await openRetirepg.currentIncome.click();
    await openRetirepg.currentIncome.setValue("150000");
  
  });

  When(/^I enter my spouses annual income/, async function () {

    await openRetirepg.spouseIncome.click();
    await openRetirepg.spouseIncome.setValue("140000");
  
  });
  
  When(/^I enter current retirement savings balance/, async function () {

    await openRetirepg.savingBal.click();
    await openRetirepg.savingBal.setValue("3000000");
  
  });

  When(/^I enter the annual savings/, async function () {
    
    await openRetirepg.annualSaving.click();
    await openRetirepg.annualSaving.setValue("50000");
  
  });
  
  When(/^I enter the rate of increase/, async function () {
    
    await openRetirepg.rateIncrease.click();
    await openRetirepg.rateIncrease.setValue("10");
  
  });
  
  //social security steps 
  When(/^I select yes to social security benefits/, async function () {
    await openRetirepg.yesSSB.click();
    await browser.pause(1000);
  });

  When(/^I change marital status to is married/, async function () {
    await openRetirepg.martialMarried.click();
  });

//adjust default values test 

When(/^I select adjust default values link/, async function () {
  
  await openRetirepg.advLink.click();
  await browser.pause(2000);
    
});

When(/^I change the default values/, async function () {

  await openRetirepg.addIncome.click();
  await openRetirepg.addIncome.setValue('500');

  await openRetirepg.retireDur.click();
  await openRetirepg.retireDur.setValue('20');

  await openRetirepg.incInfl.click();
  await browser.pause(1000)
  
  await openRetirepg.expInRate.click();
  await openRetirepg.expInRate.setValue('10');
  

  await openRetirepg.finalInc.click();
  await openRetirepg.finalInc.setValue('75');

  await openRetirepg.preRoi.click();
  await openRetirepg.preRoi.setValue('8');

  await openRetirepg.postRoi.click();
  await openRetirepg.postRoi.setValue('4');

});

When(/^I select cancel to default values/, async function () {
  await browser.pause(3000); 
  await openRetirepg.cancelBtn.click();
});

When(/^I select save changes to default values/, async function () {
  await browser.pause(3000); 
  await openRetirepg.saveChgBtn.click();
});

