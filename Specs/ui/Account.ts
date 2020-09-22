
import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const Account = {

    Account: element(by.css('[routerlink="/account')),
    MyAccount: element(by.cssContainingText('a.mat-tab-link.mat-focus-indicator', ' My Account ')),
    Finance: element(by.css('[href*="/account/finances"]')),
    Syndicate: element(by.xpath('.//*[.=" Syndicates "]')),
    //Syndicate:   element(by.cssContainingText('a.mat-tab-link.mat-focus-indicator.ng-star-inserted.mat-tab-label-active', ' Syndicates ')),
    BankDetails: element(by.css('a.mat-tab-link.mat-focus-indicator.ng-star-inserted.mat-tab-label-active:nth-child(1)')),

    ScrollRight: element(by.xpath("//div[@class='mat-ripple mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4']//div[@class='mat-tab-header-pagination-chevron']")),
    OutstandingFines: element(by.css('[href*="/account/finances/fines"]')),
    Transaction: element(by.css('[href*="account/finances/transactions"]')),
    Statement: element(by.css('[href*="/account/finances/statements"]')),

    TransactionDownArrow: element(by.css('div.arrow-container')),

    PayFine: element(by.xpath("//div[@class='finances-body']//div[1]//div[2]//button[1]")),
    FineDueDate: element(by.xpath("//div[@class='fines']/div[1]/div[1]/h3[1]")),
    FineNo: element(by.xpath("//div[@class='fines']/div[1]/div[2]/div[1]/h5[2]")),

    ViewDetails: element.all(by.css('div.syndicate-card.ng-star-inserted')),
    selectViewDetail: element(by.xpath('.//*[.="View Details"]')),
    SyndicatePageHeader: element(by.css('h1')),
    SyndicateName: element(by.css('div.syndicate-name')),
    //AccountName:element(by.xpath('//.*[.="Account Name"]')),
    DisplayAcoountName: element(by.cssContainingText('div.label', 'Account Name')).element(by.xpath('following-sibling::div')),
    Members: element(by.css('app-syndicate-member-view-card[1]')),
    greyhounds: element(by.css('syndicate-dog-cardng-star-inserted[1]')),
    UpdateAccountDetails: element(by.xpath('.//*[.="Update Account Details"]')),

    ResAddressEdit: element(by.id("mat-input-1")),
    ResTownEdit: element(by.id("mat-input-2")),
    ResPostCodeEdit: element(by.id("mat-input-3")),

    PostalAddressEdit: element(by.id("mat-input-4")),
    PostalTownEdit: element(by.id("mat-input-5")),
    PostalPostCodeEdit: element(by.id("mat-input-6")),
    Save: element(by.cssContainingText('span.mat-button-wrapper', ' Save ')),
    Cancel: element(by.cssContainingText('span.mat-button-wrapper', ' Cancel ')),
    validateResAddress: element(by.xpath("//app-data-item[4]//div[1]//div[2]")),

    validatePostalAddress: element(by.xpath("//app-data-item[5]//div[1]//div[2]")),

    CreateSyndicate: element(by.cssContainingText('span.mat-button-wrapper', 'Create a new syndicate')),
    EnterSyndicateName: element(by.xpath("//app-syndicate-create[1]/div[1]/div[1]/form[1]/div[1]/mat-form-field[1]")),
    EnterAlternateManager: element(by.id('mat-input-13')),
    AddMemberButton: element(by.xpath('//app-syndicate-edit-members[1]/div[1]/div[1]/div[1]/button[1]')),
    VerifyAddedMemberStatus: element(by.css('div.status-accepted')),
    VerifyAddedMemberName: element(by.xpath("//div[@class='inline-block']")),

    EnterBSB: element(by.css('span.mat-form-field-ripple.ng-tns-c53-1')),
    // EnterBSB: element(by.id('mat-input-0')),
    EnterAccountNo: element(by.id('mat-input-1')),
    EnterAccountName: element(by.id('mat-input-2')),

    SelectGST: element(by.cssContainingText('span.radio-button-label', ' My greyhound business is registered for GST ')),
    IAgreeCheckbox: element(by.cssContainingText('span.mat-checkbox-label', 'I agree to the above conditions')),
    EnterABN: element(by.id('mat-input-25')),

    ManageSyndicate: element(by.cssContainingText('span.mat-button-wrapper', 'Manage Syndicate')),
    EnterNewMember: element(by.id('mat-input-0')),
    AddNewMember: element(by.cssContainingText('span.mat-button-wrapper', ' Add member ')),
    VerifyAddmemberStatus: element(by.css('div.status-denied')),
    RemoveMember: element(by.cssContainingText('div.inline-block.remove.ng-star-inserted', ' Remove ')),
    VerifyRemovedMember: element(by.cssContainingText('div.status-pending', ' REMOVE (PENDING) ')),
    ChangeStatus: element(by.cssContainingText('div.inline-block.change-status', ' change status ')),
    ChangeStatusToAltManager: element(by.cssContainingText('div.option.ng-star-inserted', ' Alternative Manager ')),
    VerifyAltManager: element(by.xpath("//app-syndicate-member-card[2]/div[1]/div[1]")),
    ModifyFinancialDetails: element(by.cssContainingText('span.mat-button-wrapper', 'Modify Finance Details')),

    RoleList: element(by.css('div.column.ng-tns-c219-0')),
    MemberNo: element(by.css('div.account-data-item')),
    ParticipantRole: element(by.css('div.account-data-item')),
    ExpiryDate: element(by.css('div.account-data-item')),
    ApplyToParticipate: element(by.xpath("//p[contains(text(),'Apply to Participate')]")),
    RegistrationStatus: element(by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    BreederRegistration: element(by.cssContainingText('div.mat-radio-label-content', 'Owner Trainer')),
    WatchDog: element(by.cssContainingText('div.mat-radio-label-content', 'Catcher')),
    LogOut: element(by.cssContainingText('div.mat-radio-label-content', 'Public Trainer')),
    SelectAttendant: element(by.cssContainingText('div.mat-radio-label-content', 'Attendant')),
    SelectOwner: element(by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    SelectOwnerTrainer: element(by.cssContainingText('div.mat-radio-label-content', 'Owner Trainer')),
    SelectCatcher: element(by.cssContainingText('div.mat-radio-label-content', 'Catcher')),
    SelectPublicTrainer: element(by.cssContainingText('div.mat-radio-label-content', 'Public Trainer')),
    AcceptDeclaration: element(by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the declaration above.')),
    AcceptDeclaration2: element(by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the conditions of ownership above.')),
    ContactDetails: element(by.css('app-details.details.registration-theme.ng-star-inserted')),
    EnterPhoneNo: element(by.id('mat-input-4')),
    CriminalHistory: element(by.xpath('//app-declarations//section[1]')),
    RacingHistory: element(by.xpath('//section[2]')),
    SpousePartner: element(by.xpath('//section[3]')),
    Declaration: element(by.xpath('//section[4]')),
    AcceptDeclaration3: element(by.cssContainingText('span.mat-checkbox-label', 'I declare that the information I have provided in my application, including the attachments, is true and correct')),
    NationalPoliceCheck: element(by.css('section.npc.black-on-white.ng-star-inserted')),

}

