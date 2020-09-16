import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const BreedingAndLitters = {

    WhelpingResult: element(by.cssContainingText('div.level-three-title', 'Whelping Results')),
    SelectParentDog: element(by.css('div.dog-details')),
    ResultOfMating: element(by.css('button.mat-focus-indicator.mat-button.mat-button-base')),
    SelectResultAsWhelped: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Whelped')),
    SelectResultAsMissed: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Missed')),
    SelectResultAsNoLivePUps: element(by.cssContainingText('div.mat-button-toggle-label-content', 'No Live Pups')),
    SelectNoOfFemalePups: element(by.cssContainingText('div.mat-button-toggle-label-content', '1')),
    SelectNoOfMalePups: element(by.xpath("//button[@id='mat-button-toggle-343-button']//div[@class='mat-button-toggle-label-content'][contains(text(),'1')]")),
    WhelpedDate: element(by.id('mat-input-0')),
    ChooseWhelpedDate: element(by.css('.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted')),
    EnterDog1Kennel: element(by.id('mat-input-1')),
    Dog1Color: element(by.xpath("//div[2]//div[1]//div[2]//button[1]//span[1]//mat-icon[1]")),
    SelectDog1Color: element(by.cssContainingText('span.name', 'Black')),
    EnterDog2Kennel: element(by.id('mat-input-2')),
    Dog2Color: element(by.xpath("//div[3]//div[1]//div[2]//button[1]//span[1]//mat-icon[1]")),
    GetAllDogColors: element.all(by.css('mat-button-toggle')),
    SelectDog2Color: element(by.cssContainingText('span.name', 'Dun')),
    VetClinic: element(by.cssContainingText('span.mat-button-wrapper', 'Select Vet Clinic')),
    SelectVetClinic: element(by.id('mat-button-toggle-80')),


}

