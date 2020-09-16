import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const DogDetails = {

    Form: element(by.cssContainingText('button.mat-ripple.button', 'form')),
    History: element(by.cssContainingText('button.mat-ripple.button', 'history')),
    Grades: element(by.cssContainingText('button.mat-ripple.button', 'grades')),
    Litters: element(by.cssContainingText('button.mat-ripple.button', 'litter')),
    Pedigree: element(by.cssContainingText('button.mat-ripple.button', 'pedigree')),
    CoursingForm: element(by.cssContainingText('button.mat-ripple.button', 'coursing form')),
    Trials: element(by.cssContainingText('button.mat-ripple.button', 'trial history')),
    RacingOffences: element(by.cssContainingText('button.mat-ripple.button', 'racing offences')),
    GreyHoundRecord: element(by.cssContainingText('button.mat-ripple.button', 'greyhound record')),
    APM: element(by.xpath("//app-dog-card[1]/div[1]/div[1]/div[1]/app-dog-apm[1]/p[1]")),
    Rank: element(by.xpath("//i[@class='rank-icon']/h5")),
    Microchip: element(by.xpath("//app-dog-microchip[@class='dog-microchip']")),
    Earbrand: element(by.xpath("//app-dog-ear-brand[@class='dog-ear-brand']")),
    DogName: element(by.css('app-dog-details-header')),
    WhelpedDate: element(by.css('app-dog-details-header')),
    DogContentLitter: element(by.xpath("//div[@class='dog-card-content']")),
    DogContentRaces: element(by.xpath("//app-dog-details-litter-card[@class='card litter']//header")),
    FormPage: element(by.css('app-run-result')),
    Toggle: element(by.xpath("//div[@class='mat-slide-toggle-thumb']")),
    ResultTable: element(by.xpath("//body[@class='fast-track']//app-root//main//app-dog-details//main//app-form-page//table//thead//tr")),
    ResultTableData: element(by.xpath("//body[@class='fast-track']//app-root//main//app-dog-details//main//app-form-page//table//tbody")),
    CoursingPage: element(by.css('app-coursing-page')),
    GradesPage: element(by.css('app-grades-page')),
    TrialsPage: element(by.css('app-trial-page')),
    RacingOffencePage: element(by.xpath("//h3[contains(text(),'Victorian racing offences')]")),
    LittersPage: element(by.css('app-litters-page')),
    HistoryPage: element(by.css('app-history-page')),
    PedigreeePage: element(by.css('app-pedigree-page')),




}