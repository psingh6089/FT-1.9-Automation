import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const RetireGreyhound = {

RetirementStatusDropdown: element(by.css('span.selected-value-button.ng-star-inserted')),
RetirementStatusList: element(by.css('mat-button-toggle-group')),
SelectPet: element(by.css('//mat-button-toggle-group/mat-button-toggle[1]')),
SelectBreedingAnimal: element(by.css('//mat-button-toggle-group/mat-button-toggle[2]')),
SelectEuthanised: element(by.css('//mat-button-toggle-group/mat-button-toggle[3]')),
SelectExported: element(by.css('//mat-button-toggle-group/mat-button-toggle[4]')),
SelectOther: element(by.css('//mat-button-toggle-group/mat-button-toggle[5]')),
RetiredToOwner: element(by.cssContainingText('div.mat-radio-label-content', 'Owner')),
RetiredToThirdParty: element(by.cssContainingText('div.mat-radio-label-content', 'A Third Party')),
RetiredDate:  element(by.css('button.mat-focus-indicator.mat-icon-button.mat-button-base')),
SelectRetiredDate: element(by.css('td.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted')),
EnterFirstName: element(by.css('button.mat-focus-indicator.mat-icon-button.mat-button-base')),
}