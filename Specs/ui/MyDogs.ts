import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const MyDogs = {
    MyDogs: element(by.cssContainingText('div.nav-item', ' My Dogs')),
    ActiveDogs: element(by.cssContainingText('a', ' Active ')),
    NonActiveDogs: element(by.cssContainingText('a', ' Non-Active ')),
    Litters: element(by.cssContainingText('a', ' Litters ')),
    DogDetails: element(by.css('section.header')),
    DogName: element(by.css('h3.racing-name')),
    NoOfActiveDogs: element(by.xpath("//app-racing-page/section/header/h3[2]")),
    DogList: element(by.css('app-dog-card-new')),
    NoOfNonActiveDogs: element(by.xpath("//app-retired-page/section/header/h3[2]")),
    NoDogText: element(by.xpath("//app-my-dogs/app-racing-page/p")),
    SelectedFilter: element(by.xpath("//app-my-dogs/app-racing-page/app-grouped-dog-list[1]/header/h3")),
    Filter: element(by.css('div.right.group')),
    FilterOnLitters: element(by.cssContainingText('span.mat-button-wrapper', 'expand_more')),
    SortActive: element(by.cssContainingText('span.mat-button-wrapper', ' Sort by ')),
    SortNonActive: element(by.cssContainingText('span.mat-button-wrapper', 'Sort by ')),
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
    Reset: element(by.cssContainingText('a', 'Reset')), 
    Done: element(by.xpath("//mat-icon[contains(text(),'done')]")),
    Cancel: element(by.cssContainingText('span.mat-button-wrapper', 'Cancel')),

    FilterPet: element(by.cssContainingText('div.status-checkbox', ' pet ')),
    FilterGap: element(by.cssContainingText('div.status-checkbox', ' gap ')),
    FilterEuthanised: element(by.cssContainingText('div.status-checkbox', ' euthanised ')),
    FilterExported: element(by.cssContainingText('div.status-checkbox', ' exported ')),
    FilterDeceased: element(by.cssContainingText('div.status-checkbox', ' deceased ')),
    FilterPetThirdParty: element(by.cssContainingText('div.status-checkbox', ' pet-third-party ')),

    FilterAll: element(by.cssContainingText('div.mat-button-toggle-label-content', 'All')),
    FilterPastYear: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Past Year')),
    FilterPast5Years: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Past 5 Years')),

    SortByKennelA_Z: element(by.cssContainingText('div.mat-radio-label-content', 'Kennel name A - Z')),
    SortByKennelZ_A: element(by.cssContainingText('div.mat-radio-label-content', 'Kennel name Z - A')),
    SortByRacingA_Z: element(by.cssContainingText('div.mat-radio-label-content', 'Racing name A - Z')),
    SortByRacingZ_A: element(by.cssContainingText('div.mat-radio-label-content', 'Racing name Z - A')),
    SortByYoungest: element(by.cssContainingText('div.mat-radio-label-content', 'Whelp date - Youngest')),
    SortByOldest: element(by.cssContainingText('div.mat-radio-label-content', 'Whelp date - Oldest')),
    SortByBitchFirst: element(by.cssContainingText('div.mat-radio-label-content', 'Dog Sex - Bitch first')),
    SortByDogFirst: element(by.cssContainingText('div.mat-radio-label-content', 'Dog Sex - Dog first')),
}