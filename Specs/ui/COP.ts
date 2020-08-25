import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const COP = {
    
    
    ViewHealthRecord: element(by.cssContainingText('span.mat-button-wrapper', 'View health record ')),

    Illness: element(by.cssContainingText('a', ' Illness ')),
    Injury: element(by.cssContainingText('a', ' Injury ')),
    Health: element(by.cssContainingText('a', ' Health ')),    
    PrintRecord: element(by.cssContainingText('span.mat-button-wrapper', '  ')),    
    AddInjuryEvent: element(by.cssContainingText('span.mat-button-wrapper', ' Add Injury Event ')),    
    TrackOrNonTrack:  element(by.id('mat-select-0')),  


   SelectTrack: element(by.cssContainingText('span.mat-option-text', ' Track ')),  
    SelectNonTrack:  element(by.cssContainingText('span.mat-option-text', ' Non-Track ')), 
    TrackName:   element(by.id('mat-select-1')),  
    GetAllTrackNames: element.all(by.xpath("//div[@id='cdk-overlay-1']/div/div/mat-option")),
    SelectTRackNameAsBendigo: element(by.cssContainingText('span.mat-option-text', ' Bendigo ')),
    InjuryType:  element(by.id('mat-select-2')),    
    GetAllInjuryTypes: element.all(by.xpath("//div[@id='cdk-overlay-2']/div/div/mat-option")),
    SelectInjuryTypeAsBone: element(by.cssContainingText('span.mat-option-text', ' Bone ')),
    SelectInjuryTypeAsJoint: element(by.cssContainingText('span.mat-option-text', ' Joint ')),
    SelectInjuryTypeAsMuscle: element(by.cssContainingText('span.mat-option-text', ' Muscle ')),
    SelectInjuryTypeAsSkin: element(by.cssContainingText('span.mat-option-text', ' Skin ')),
    SelectInjuryTypeAsOther: element(by.cssContainingText('span.mat-option-text', ' Other ')),
    InjuryLocation:  element(by.id('mat-select-3')),    
    GetAllInjuryLocations: element.all(by.xpath("//div[@id='cdk-overlay-3']/div/div/mat-option")),
    SelectInjuryLocationAsChest: element(by.cssContainingText('span.mat-option-text', ' Chest ')),
    InjuryDetail:  element(by.id('mat-select-4')), 
    GetAllInjuryDetails: element.all(by.xpath("//div[@id='cdk-overlay-5']/div/div/mat-option")),
    SelectInjuryDetailAsOther: element(by.cssContainingText('span.mat-option-text', ' Other ')),
    EnterOtherInjuryDetails: element(by.id('mat-input-2')), 
    InjuryDate:  element(by.id('mat-input-3')),     
    SelectInjuryDate:   element(by.css('.cdk-overlay-container mat-month-view [aria-label="6 August 2020"]')), 
    Treatment:  element(by.id('mat-select-5')), 
    GetAllTreatmentList: element.all(by.xpath("//div[@id='cdk-overlay-6']/div/div/mat-option")),
    SelectTreatmentAsUltraSound: element(by.cssContainingText('span.mat-option-text', ' Ultrasound ')),
    Frequency:  element(by.id('mat-select-7')), 
    GetAllFrequencyList: element.all(by.xpath("//div[@id='cdk-overlay-7']/div/div/mat-option")),
    SelectFrequencyAs1X:  element(by.cssContainingText('span.mat-option-text', ' 1 x Daily ')),
    TreatmentDate:  element(by.id('mat-input-6')),  
    SelectTreatmentDate:  element(by.css('.cdk-overlay-container mat-month-view [aria-label="6 August 2020"]')), 
    AdministeredBy:  element(by.xpath("//input[@id='mat-input-7']")),    
    AuthorisedBy: element(by.id('mat-input-8')),    
    Comment:  element(by.id('mat-input-9')),    

    VerifyInjuryList: element(by.css('//app-injury-event-list/div')),
    VerifyDate: element(by.xpath("//app-injury-event/app-injury-event-list/div[1]/div[1]/span")),
    VerifyInjuryType: element(by.xpath("//app-injury-event/app-injury-event-list/div[1]/div[2]/div[1]/div[2]")),
    VerifyTreatmentType: element(by.xpath("//app-injury-event/app-injury-event-list/div[1]/div[2]/div[2]/div[2]")),
   
    AddIllnessManagement:  element(by.cssContainingText('span.mat-button-wrapper', ' Add Illness Management ')),  
    IllnessType:    element(by.id('mat-select-0')), 
    GetAllIllnessType:  element.all(by.xpath("//div[@id='cdk-overlay-0']/div/div/mat-option")),
    SelectIllnessType:  element(by.cssContainingText('span.mat-option-text', ' Dehydration ')),   
    IllnessTreatment: element(by.id('mat-select-1')),
    GetAllIllnessTreatmentList:  element.all(by.xpath("//div[@id='cdk-overlay-1']/div/div/mat-option")),
    IllnessFrequency: element(by.id('mat-select-3')),
    IllnessTreatmentDate: element(by.id('mat-input-3')),
    IllnessAdminiteredBy: element(by.id('mat-input-4')),
    IllnessAuthorisedBy: element(by.id('mat-input-5')),
    IllnessComment: element(by.id('mat-input-6')),

    VerifyIllnessList: element(by.css('/app-illness-management-list/div')),
    VerifyIllnessDate: element(by.xpath("//app-illness-management/app-illness-management-list/div/div[1]/span")),
    VerifyIllnessType: element(by.xpath("//app-illness-management/app-illness-management-list/div/div[1]/span")),
    VerifyIllnessTreatmentType: element(by.xpath("//app-illness-management/app-illness-management-list/div/div[2]/div[2]/div[2]")),
   
    AddHealthManagement:  element(by.cssContainingText('span.mat-button-wrapper', ' Add Health Management ')),  
    HealthType: element(by.id('mat-select-0')), 
    GetAllHealthTypeList: element.all(by.xpath("//div[@id='cdk-overlay-0']/div/div/mat-option")),
    SelectHealthTypeAsSupplement:  element(by.cssContainingText('span.mat-option-text', ' Supplement ')), 
    SupplementName: element(by.id('mat-input-0')), 
    RouteOfAdmin:   element(by.id('mat-select-3')), 
    GetAllRouteOfAdmin: element.all(by.xpath("//div[@id='cdk-overlay-1']/div/div/mat-option")),
    SelectRouteOfAdmin:  element(by.cssContainingText('span.mat-option-text', ' Subcutaneous (under the skin) ')), 
    HealthTreatmentDate: element(by.id('mat-input-8')),
    HealthAdminsteredBy: element(by.id('mat-input-9')),
    HealthAuthorisedBy: element(by.id('mat-input-10')),
    HealthComment: element(by.id('mat-input-11')),

   }    

