import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const ActiveDogs = {
    MyDogs: element(by.cssContainingText('div.nav-item', ' My Dogs')),
    DogDetails: element(by.css('section.header')),
    DogName: element(by.css('h3.racing-name')),
    NoOfDogs: element(by.xpath("//app-my-dogs/app-racing-page/section/header/h3[2]")),
    Filter: element(by.xpath("//app-my-dogs[1]/app-racing-page[1]/section[1]/div[1]/div[1]/button[1]/span[1]/mat-icon[1]")),
    AllFilters: element(by.css('mat-checkbox')),
    FilterNames: element.all(by.css('div.status-checkbox')),
    FilterRacing: element(by.cssContainingText('div.status-checkbox', 'racing')),
    FilterNominate: element(by.cssContainingText('div.status-checkbox', ' nominated ')),
    FilterWarning: element(by.cssContainingText('div.status-checkbox', ' warning ')),
    FilterIssue: element(by.cssContainingText('div.status-checkbox', ' issue ')),
    FilterOwned: element(by.cssContainingText('div.status-checkbox', ' owned ')),
    FilterTraining: element(by.cssContainingText('div.status-checkbox', 'training')),
    FilterSpelling: element(by.cssContainingText('div.status-checkbox', ' spelling ')),
    FilterEducating: element(by.cssContainingText('div.status-checkbox', ' educating ')),
    FilterBreeding: element(by.cssContainingText('div.status-checkbox', ' breeding ')),
    FilterWhelping: element(by.cssContainingText('div.status-checkbox', ' whelping ')),
    FilterRearing: element(by.cssContainingText('div.status-checkbox', 'rearing')),
    FilterDefault: element(by.cssContainingText('div.status-checkbox', ' default ')),
    Close: element(by.cssContainingText('span.mat-button-wrapper', ' Close ')),
    Reset: element(by.cssContainingText('div.heading', 'Reset'))
}