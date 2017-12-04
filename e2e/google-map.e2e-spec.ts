import {browser} from 'protractor';
import {HomePage} from './page-objec';

describe('google map view', () => {
  const homePage = new HomePage();
  beforeAll(() => {
    browser.get('/dashboard');
  });
  it('should load google map', () => {
    expect(homePage.getTitle()).toMatch('Sun Electric');
  });
});
