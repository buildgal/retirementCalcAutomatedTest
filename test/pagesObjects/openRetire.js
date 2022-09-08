import Page from './openPage.js';

class openRetirepg extends Page  {
 
  open () {
      super.open('https://www.securian.com/insights-tools/retirement-calculator.html')     
      ;
  }

get currentAge() {
    return $('#current-age');
}

get retireAge() {
  return $('#retirement-age');
}

get currentIncome() {
  return $('#current-income');
}

get spouseIncome() {
  return $('#spouse-income');
}

get savingBal() {
  return $('#current-total-savings');
}

get annualSaving() {
  return $('#current-annual-savings');
}

get rateIncrease() {
  return $('#savings-increase-rate');
}

get yesSSB(){
  return $('#include-social-container > ul > li:nth-child(1) > label');
}

get noSSB(){
  return $('#include-social-container > ul > li:nth-child(2) > label');
}

get martialSingle(){
  return $('#marital-status-ul > li:nth-child(1) > label');
}

get martialMarried(){
  return $('#marital-status-ul > li:nth-child(2) > label');
}

get ssAmount(){
  return $('#social-security-override');
}

get calBtn(){
  return $('#retirement-form > div:nth-child(7) > div:nth-child(2) > div.col-sm-4 > button');
}

get fillOutMsg(){
  return $('#calculator-input-alert');
}

get resultsTitle(){
  return $('#calculator-results-container > h3');
}

get advLink(){
  return $('#retirement-form > div:nth-child(7) > div:nth-child(1) > div > div > div > ul > li:nth-child(2) > a');
}

//selectors for the modal titled default calculator values 
get addIncome (){
  return $('#additional-income');
}

get retireDur (){
  return $('#retirement-duration');
}

get incInfl (){
  return $('#include-inflation-container > ul > li:nth-child(1) > label');
}

get decInfl (){
  return $('#include-inflation-container > ul > li:nth-child(2) > label');
}

get finalInc (){
  return $('#retirement-annual-income');
}

get preRoi (){
  return $('#pre-retirement-roi');
}

get postRoi (){
  return $('#post-retirement-roi');
}

get inflRate (){
  return $('#expected-inflation-rate');
}

get saveChgBtn (){
  return $('#default-values-form > div:nth-child(3) > div > div.col-sm-4 > button');
}

get cancelBtn(){
  return $('#default-values-form > div:nth-child(3) > div > div.col-sm-3 > button');
}

  //recording results 

  get retireAmt() {
    return $('#retirement-amount-results');
  }

  get currSavResult(){
    return $('#current-savings-results');
  }
}

export default new openRetirepg();
