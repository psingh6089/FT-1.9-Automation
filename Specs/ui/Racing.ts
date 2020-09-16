import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const Racing = {
    MyDogs: element(by.cssContainingText('div.nav-item', ' My Dogs')),
    DogDetails: element(by.xpath("//app-dog-card-header[@class='dog-card-header']")),

    Breeding: element(by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')),
    Racing: element(by.css('a.mat-tab-label-active')),
    Dog1: element(by.xpath('//app-dog-card[1]//app-dog-card-header[1]')),
    DogAcceptBreeding: element(by.xpath('//app-dog-card[7]//app-dog-card-header[1]//div[1]//button[1]//span[1]//mat-icon[1]')),
    DogCheckTransferKey: element(by.xpath("//app-dog-card[3]/div[1]/div[2]/app-dog-card-tooltip[1]/h6[1]")),
    Dog: element(by.xpath('//app-dog-card-header[1]//div[1]//button[1]//span[1]//mat-icon[1]')),
    Dog16: element(by.xpath('//app-dog-card[16]//app-dog-card-header[1]//div[1]//button[1]//span[1]//mat-icon[1]')),
    Dog2: element(by.xpath('//app-dog-card[2]//app-dog-card-header[1]//div[1]//button[1]//span[1]//mat-icon[1]')),
    NavigateBackPage: element(by.xpath('//i[contains(text(), " navigate_before")]')),
    DogList: element.all(by.css('.dog-card.ng-star-inserted')),
    DogAction: element(by.cssContainingText('mat-icon', 'subject')),
    LoadMore: element(by.cssContainingText('span.mat-button-wrapper', 'Load more')),

    EndBreedingAuthority: element(by.cssContainingText('span.mat-button-wrapper', ' End breeding authority ')),
    VerifyEndBreedingDog: element(by.css('b.ng-star-inserted')),

    IssueBreedingAuthority: element(by.cssContainingText('span.mat-button-wrapper', ' Issue breeding authority ')),
    SelectVictoria: element(by.cssContainingText('div.mat-tab-label-content', 'Victoria')),
    Interstate: element(by.cssContainingText('div.mat-tab-label-content', 'Interstate')),
    IAgreeStatement: element(by.cssContainingText('span.mat-checkbox-label', 'I agree to the above conditions')),
    IAgree: element(by.cssContainingText('span.mat-checkbox-label', 'I Agree')),
    InputFirstName1: element(by.id('mat-input-1')),
    InputLastName1: element(by.id('mat-input-2')),

    InputFirstName: element(by.id('mat-input-3')),
    InputLastName: element(by.id('mat-input-4')),
    Inputstreet: element(by.id('mat-input-5')),
    InputSuburb: element(by.id('mat-input-6')),
    InputState: element(by.css('div.mat-select-value.ng-tns-c153-9')),
    SelectVic: element(by.cssContainingText('span.mat-option-text', ' New South Wales ')),
    InputPostCode: element(by.id('mat-input-7')),

    ConfirmBreedingHeader: element(by.css('div.confirmation-heading')),
    GetKey: element(by.xpath('//app-confirmation//div/p')),

    Back: element(by.cssContainingText('span.mat-button-wrapper', ' Back ')),
    Submit: element(by.cssContainingText('span.mat-button-wrapper', ' Submit ')),
    Cancel: element(by.cssContainingText('span.mat-button-wrapper', ' Cancel ')),
    Continue: element(by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    Confirmation: element(by.css('div.confirmation-heading')),
    Next: element(by.cssContainingText('span.mat-button-wrapper', ' Next ')),
    Save: element(by.cssContainingText('span.mat-button-wrapper', ' Save ')),
    Validate: element(by.cssContainingText('span.mat-button-wrapper', ' Validate ')),
    SaveChanges: element(by.cssContainingText('span.mat-button-wrapper', ' Save Changes ')),
    Begin: element(by.cssContainingText('span.mat-button-wrapper', ' Begin ')),

    AcceptBreeding: element(by.cssContainingText('span.mat-button-wrapper', ' Accept breeding authority ')),
    AddAuthorityKey: element(by.id('mat-input-0')),
    AddEarBrand: element(by.id('mat-input-1')),
    SelfOwnership: element(by.cssContainingText('div.mat-radio-label-content', ' Self Ownership ')),
    SyndicateOwnership: element(by.cssContainingText('div.mat-radio-label-content', ' Self Ownership ')),

    AcceptTransferOwnership: element(by.cssContainingText('span.mat-button-wrapper', ' Accept breeding authority ')),
    // AcceptOwnership: element(by.xpath('//button[2]')),
    Transfer: element(by.cssContainingText('span.mat-button-wrapper', ' Transfer ownership ')),
    TransferIAgree: element(by.css('div.mat-checkbox-inner-container')),
    FirstName: element(by.id('mat-input-0')),
    LastName: element(by.id('mat-input-1')),
    PhoneNo: element(by.id('mat-input-2')),

    // Confirm:          element(by.id('mat-checkbox-2')),
    //Register service
    RegisterService: element(by.cssContainingText('span.mat-button-wrapper', ' Register a service ')),
    RegisterService1: element(by.xpath('//mat-bottom-sheet-container[1]/div[1]/div[1]/button[1]')),
    Retire: element(by.css('div.actions')).element(by.css('button:nth-child(3)')).element(by.xpath('//span[contains(text(), " Retire ")]')),
    Earbrand: element(by.id('mat-input-1')),
    DamName: element(by.id('mat-input-2')),
    CancelDam: element(by.css('button.nested-cancel-button')),
    Search: element(by.css('button.form-submit-button')),
    ClickCancel: element(by.css('div.mat-button-focus-overlay')),
    Artificial: element(by.cssContainingText('div.mat-radio-label-content', 'Artificial')),
    ThirdPartyWitness: element(by.xpath("//app-service-form/div/form/mat-form-field[1]/div/div[1]/div/input")),
    DateArrivedCalender: element(by.xpath("//app-service-form/div/form/mat-form-field[2]/div/div[1]/div[1]/input")),
    PreviousMonth: element(by.css('.cdk-overlay-container mat-calendar [aria-label="Previous month"]')),
    DateArrivedSelection: element(by.xpath('//mat-month-view[1]/table[1]/tbody[1]/tr[2]/td[6]')),
    ServiceDateCalender: element(by.xpath("//app-service-form/div/form/mat-form-field[3]/div/div[1]/div[1]/input")),
    ServiceDateSelection: element(by.xpath("//mat-month-view[1]/table[1]/tbody[1]/tr[3]/td[5]")),
    DepartedDateCalender: element(by.xpath("//app-service-form/div/form/mat-form-field[4]/div/div[1]/div[1]/input")),
    DepartedDateSelection: element(by.xpath("//mat-month-view[1]/table[1]/tbody[1]/tr[4]/td[2]")),
    // Add:                   element(by.cssContainingText('button.form-submit-button', 'Add')),
    AddDam: element(by.cssContainingText('span.mat-button-wrapper', ' Add another dam ')),

    // Payment
    switchframe: element(by.xpath("//iframe[@id='payway-credit-card-iframe0']")),
    NameOnCard: element(by.cssContainingText('label.payway-name', 'Name on Card')),
    CardNo: element(by.css('.payway-number-formatted')),
    ExpMonth: element(by.css('.payway-month')),
    ExpYr: element(by.css('.payway-year')),
    SecCode: element(by.cssContainingText('label.payway-csc', 'Security Code')).element(by.css('.payway-csc')),
    PayNow: element(by.css('.with-submit')),
    ValidateAmount: element(by.xpath('//app-payment-invoice/div/table/tr/td[2]')),
    ValidatePayment: element(by.css('div.invoice-total-container')),
    //*[@id="payway-creditcard-form"]/div/fieldset/select[1]/option[2]

    TrackDog: element(by.cssContainingText('span.mat-button-wrapper', ' Track the dog ')),
    TrackDogCheckbox: element(by.cssContainingText('div.mat-radio-label-content', ' Track this dog (receive email notification) ')),
    VerifyName: element(by.xpath("//h3[@class='dog']")),

    VerifyGST: element(by.xpath("//input[@id='mat-radio-6-input']")),

    Form: element(by.cssContainingText('button.mat-ripple.button', 'form')),
    History: element(by.cssContainingText('button.mat-ripple.button', 'history')),
    Pedigree: element(by.cssContainingText('button.mat-ripple.button', 'pedigree')),
    Litter: element(by.cssContainingText('button.mat-ripple.button', 'litter')),
    Grades: element(by.cssContainingText('button.mat-ripple.button', 'grades')),
    CoursingForm: element(by.cssContainingText('button.mat-ripple.button', 'coursing form')),
    TrialHistory: element(by.cssContainingText('button.mat-ripple.button', 'trial history')),
    RacingOffences: element(by.cssContainingText('button.mat-ripple.button', 'racing offences')),
}
