import {$$, browser, by, element, ElementFinder, protractor} from 'protractor';

export class HomePage {
  title = element(by.id('dashboard-navbar'));

  getTitle() {
    return this.title.getText();
  }
}
