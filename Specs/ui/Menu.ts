import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const Menu = {

    Menu: element(by.xpath("//i[contains(text(),'menu')]")),
    ApplyToParticipate: element(by.cssContainingText('a', 'Apply to Participate')),
    ClickPage: element(by.xpath("/html[1]/body[1]/app-root[1]/mat-sidenav-container[1]/div[1]")),
    Owner: element(by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    Begin: element(by.cssContainingText('span.mat-button-wrapper', ' Begin ')),
    Checkbox1: element(by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the declaration above.')),
    Checkbox2: element(by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the conditions of ownership above.')),
    Continue:  element(by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    EnterPhone: element(by.id('mat-input-5))')),



    
   }

