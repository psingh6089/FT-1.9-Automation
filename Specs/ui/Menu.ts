import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const Menu = {

    Menu: element(by.xpath("//i[contains(text(),'menu')]")),

    ApplyToParticipate: element(by.cssContainingText('p', 'Apply to Participate')),
    RegistrationStatus: element(by.cssContainingText('p', 'Registration Status')),
    BreederRegistration: element(by.cssContainingText('p', 'Breeder Registration')),
    Notification: element(by.cssContainingText('p', 'Notifications')),
    Tutorial: element(by.cssContainingText('p', 'Tutorial')),
    Help: element(by.cssContainingText('p', 'Help')),
    Watchdog: element(by.cssContainingText('p', 'Watchdog')),
    Logout: element(by.cssContainingText('p', 'Logout')),

    ProgressStatus: element(by.xpath("//app-registration-apply[1]/app-new-progress")),
    CurrentStatus: element(by.css('div.step.first.current.past.ng-star-inserted')),
    ClickPage: element(by.xpath("/html[1]/body[1]/app-root[1]/mat-sidenav-container[1]/div[1]")),
    Owner: element(by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    Catcher: element(by.cssContainingText('div.mat-radio-label-content', 'Catcher')),
    Attendant: element(by.cssContainingText('div.mat-radio-label-content', 'Attendant')),
    OwnerTrainer: element(by.cssContainingText('div.mat-radio-label-content', 'Owner Trainer')),
    PublicTrainer: element(by.cssContainingText('div.mat-radio-label-content', 'Public Trainer')),


    Checkbox1: element(by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the declaration above.')),
    Checkbox2: element(by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the conditions of ownership above.')),
    Continue: element(by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    EnterPhone: element(by.id('mat-input-5))')),
}

