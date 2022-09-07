import { Given } from '@wdio/cucumber-framework';
import openRetirepg from '../pagesObjects/openRetire.js';

Given(/^I open the retirement calculator/, function () {
  openRetirepg.open();
  browser.pause(17000);
});

