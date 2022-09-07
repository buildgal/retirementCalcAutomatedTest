import Page from './openPage.js';

class openRetirepg extends Page  {
 
  open () {
      super.open('https://www.securian.com/insights-tools/retirement-calculator.html')     
      browser.pause(10000);
  }

  
}

export default new openRetirepg();
