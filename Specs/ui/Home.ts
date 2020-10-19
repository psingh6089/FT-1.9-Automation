import { by, element } from 'protractor';
export const Home = {

    Login: element(by.cssContainingText('span.mat-button-wrapper', 'Log In')),
    UserName: element(by.id('username')),
    Password: element(by.id('password')),
    LoginContinue: element(by.cssContainingText('button', 'Continue')),
    WelcomeText: element(by.css('h2')),

    Logout: element(by.cssContainingText('span.mat-button-wrapper', ' Log Out ')),

    MyDogs: element(by.cssContainingText('div.nav-item', ' My Dogs')),
    NonRacing: element(by.cssContainingText('a.mat-tab-link.mat-focus-indicator.ng-star-inserted', ' Non Racing Dogs ')),
    Breeding: element(by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')),
    BlackBook: element(by.cssContainingText('a.mat-tab-label-active', ' Blackbook ')),
    Racing: element(by.cssContainingText('a.mat-tab-label-active', ' Racing Dogs ')),
    Dog: element(by.css('app-dog-card:nth-child(1)')).element(by.css('app-dog-card-header')).element(by.css('div.right')).element(by.css('button')).element(by.css('span.mat-button-wrapper')).element(by.css('mat-icon')),

    GotIt: element(by.cssContainingText('button.next-button.shepherd-button ', 'Got it!')),
    SkipOverlay: element(by.cssContainingText('button.cancel-button.shepherd-button.shepherd-button-secondary', 'Done? Click here to skip'))
};
