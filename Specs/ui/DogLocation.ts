import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const DogLocation = {

Kennel: element(by.cssContainingText('div.level-one-title', 'KENNEL')),
AddToKennel: element(by.cssContainingText('div.level-two-title', ' Add dog to Kennel ')),
RemoveFromKennel: element(by.cssContainingText('div.level-two-title', ' Remove from Kennel ')),
DogName: element(by.id('mat-input-0')),
EarBrand: element(by.id('mat-input-1')),
MicrochipNo: element(by.id('mat-input-2')),
DogActivity: element(by.cssContainingText('strong', 'Dog Activity:')),
SelectActivityAsBreeding: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Breeding')),
SelectActivityAsEducating: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Educating')),
SelectActivityAsRearing: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Rearing')),
SelectActivityAsSpelling: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Spelling')),
SelectActivityAsTraining: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Training')),
SelectActivityAsWhelping: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Whelping')),
DogLocation: element(by.cssContainingText('strong', 'Dog Location:')),
SelectDogLocation: element(by.xpath("//mat-button-toggle-group[1]/mat-button-toggle[1]/button[1]/div[1]")),
InterstateLocation: element(by.cssContainingText('div.mat-button-toggle-label-content', 'Interstate Location')),
Doglist: element.all(by.css('button.mat-focus-indicator.dog-actions-button.mat-icon-button.mat-button-base.mat-primary')),
SelectActionAsChangeDogLocation: element(by.cssContainingText('span.mat-button-wrapper', ' Remove from kennel ')),
EnterName: element(by.id('mat-input-0')),
EnterStreet: element(by.id('mat-input-1')),
EnterSuburb: element(by.id('mat-input-2')),
EnterPostcode: element(by.id('mat-input-3')),
SelectStateDropDown:  element(by.id('mat-select-0')),
EnterState: element(by.cssContainingText('span.mat-option-text', ' NSW ')),
EnterPhone:  element(by.id('mat-input-5')),
SelectDog: element(by.css('app-dog-card.tour-dog-selection-list.dog-card.ng-star-inserted')),
FindDogFabriolaCitrus: element(by.cssContainingText('h3.dog', 'FABRIOLA CITRUS')),
Search: element(by.id('mat-input-0'))

}