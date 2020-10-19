import { by, element } from 'protractor';
export const Home = {

    Login: element(by.cssContainingText('span.mat-button-wrapper', 'Log In')),
    UserName: element(by.id('username')),
    Password: element(by.id('password')),
    LoginContinue: element(by.cssContainingText('button', 'Continue')),
    ForgotPassword: element(by.cssContainingText('p.c66aeac53.c1eb4fc59', 'Forgot password?')),
    WelcomeText: element(by.css('h2')),
    LoginError: element(by.css('li.cc58a9ba3')),
    EmailError: element(by.css('ul.cf754da02')),
    BackToFT :  element(by.cssContainingText('a','Back to FastTrack')),
    Logout: element(by.cssContainingText('span.mat-button-wrapper', ' Log Out ')),
    Home: element(by.cssContainingText('div.nav-item.landing', ' Home')),
    MyDogs: element(by.cssContainingText('div.nav-item', ' My Dogs')),
    NonRacing: element(by.cssContainingText('a.mat-tab-link.mat-focus-indicator.ng-star-inserted', ' Non Racing Dogs ')),
    Breeding: element(by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')),
    BlackBook: element(by.cssContainingText('a.mat-tab-label-active', ' Blackbook ')),
    Racing: element(by.cssContainingText('a.mat-tab-label-active', ' Racing Dogs ')),
    Dog: element(by.css('app-dog-card:nth-child(1)')).element(by.css('app-dog-card-header')).element(by.css('div.right')).element(by.css('button')).element(by.css('span.mat-button-wrapper')).element(by.css('mat-icon')),


    GotIt: element(by.cssContainingText('button.next-button.shepherd-button ', 'Got it!')),
    SkipOverlay: element(by.cssContainingText('button.cancel-button.shepherd-button.shepherd-button-secondary', 'Done? Click here to skip'))
};
