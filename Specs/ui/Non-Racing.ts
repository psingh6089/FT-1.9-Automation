    import {by, element} from 'protractor';
    import { spawn } from 'child_process';
    export const NonRacing = {

    NonRacing:       element(by.xpath('.//*[.=" Non Racing Dogs "]')),
    ApplyDogName:    element(by.cssContainingText('span.mat-button-wrapper', ' Apply for a dog name ')),
    AddDog:          element(by.cssContainingText('span.mat-button-wrapper', ' Add Another Name ')),
    EnterName1:      element(by.id('mat-input-0')),    
    EnterName2:      element(by.id('mat-input-1')),
    EnterName3:      element(by.id('mat-input-2')),
    EnterName4:      element(by.id('mat-input-3')),
    EnterName5:      element(by.id('mat-input-4')),
    EnterName6:      element(by.id('mat-input-5')),
    EnterName7:      element(by.id('mat-input-6')),
    EnterName8:      element(by.id('mat-input-7')),
    EnterName9:      element(by.id('mat-input-8')),
    EnterName10:     element(by.id('mat-input-9')),
    Save: element(by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    Cancel: element(by.cssContainingText('span.mat-button-wrapper', ' Cancel '))
    }


