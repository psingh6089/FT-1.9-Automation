import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const Calendar = {
    PageHeading: element(by.css('div.page-main-heading')),
    Filter: element(by.cssContainingText('span.filter-text-padding', 'Filter')),
    i: element(by.id('Rectangle-path')),
    FilterOptions: element.all(by.css('mat-basic-chip')),
    DogDetails: element(by.css('section.header')),
    FilterMetro: element(by.cssContainingText('mat-basic-chip', 'Metro')),
    FilterPFS: element(by.cssContainingText('mat-basic-chip', 'PFS')),
    FilterTier3: element(by.cssContainingText('mat-basic-chip', 'Tier 3')),
    FilterRLM: element(by.cssContainingText('mat-basic-chip', 'RLM')),
    DogFilterHSM: element(by.cssContainingText('mat-basic-chip', 'HSM')),
    DogFilterCS: element(by.cssContainingText('mat-basic-chip', 'CS')),
    MetroColor: element(by.cssContainingText('span', 'MEA')),
    RacingKeys: element(by.xpath("//app-calender-info-dialog[1]/div[1]"))
}
