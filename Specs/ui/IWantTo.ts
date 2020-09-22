import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const IWantTo = {

    IWantTo: element(by.cssContainingText('div.nav-item', ' I Want To')),
    BreedGreyhound: element(by.cssContainingText('div.level-one-title', 'BREED GREYHOUND')),
    ManageGreyhound: element(by.cssContainingText('div.level-one-title', 'MANAGE GREYHOUND')),
    NoticeOfIntent: element(by.cssContainingText('div.level-two-title', ' Notice of Intent to Euthanase ')),
    TransferManagement: element(by.cssContainingText('div.level-two-title', ' Transfer Management ')),
    TransferOwnership: element(by.cssContainingText('div.level-three-title', 'Transfer Ownership')),
    AcceptTransferOfOwnership: element(by.cssContainingText('div.level-three-title', 'Accept transfer of Ownership')),
    TransferDogToBreeder: element(by.cssContainingText('div.level-two-title', ' Transfer dog to a breeder ')),
    IssueBreedingAuthority: element(by.cssContainingText('div.level-three-title', 'Issue Breeding Authority')),
    AcceptBreedingAuthority: element(by.cssContainingText('div.level-three-title', 'Accept Breeding Authority')),
    SelectDog: element(by.css('app-dog-card-header.dog-card-header')),
    ClubTrials: element(by.xpath("//div[contains(text(),'CLUB TRIALS')]")),
    SelectTrack: element(by.css('mat-grid-tile')),
    MakeABooking: element(by.css('a.mat-tab-label-active')),
    TrackList: element.all(by.css('mat-grid-tile')),
    AvailableBookingList: element(by.css('app-available-booking.ng-star-inserted/div')),
    Status: element(by.css('span.item-right.club-status')),
    TrialLeft: element(by.xpath('//app-session-card[1]/mat-card[1]/div[2]/div[2]/span[2]')),
    MyBookings: element(by.cssContainingText('span.mat-button-wrappers', ' My Booking ')),
    SelectTrial: element(by.css('app-session-card')),
    BookTrial: element(by.css('div.book-trial-div')),

    ClubTrialBooking: element(by.css('mat-card.mat-card.mat-focus-indicator.available-booking-card')),
    UnavaliablSlot: element(by.cssContainingText('div.book-trial-heading', 'UNAVAILABLE')),
    UnavaliableTimeSlot: element(by.css('div.blocked-time-container')).element(by.css('div.blocked-time-sub-container.ng-star-inserted')),
    BookedText: element(by.css('div.session-info.stripe-booked')).element(by.css('div.book-trial-heading')),
    BookedTimeSlot: element(by.css('div.session-info.stripe-booked')).element(by.css('div.booked-time.ng-star-inserted')),
    BookTimeSlotTime: element(by.css('div.book-trial-div')).element(by.css('div.avl-time-to-book.ng-star-inserted')),
    MyBookedTrails: element(by.css('div.my-booking-trails-container.ng-star-inserted')).element(by.css('mat-card')),
    ViewMyBooking: element(by.cssContainingText('span.mat-button-wrapper', ' View My Booking ')),
    NOICheckbox1: element(by.cssContainingText('span.mat-checkbox-label', 'Confirm: Yes')),
    OptionACheckBox: element(by.cssContainingText('span.Textmat-radio-label-content', 'Confirm: Yes')),

    BreedingService: element(by.cssContainingText('div.level-two-title', ' Breeding Service ')),
    RegisterAService: element(by.cssContainingText('div.level-three-title', 'Register A Service')),

    RetireGreyhound: element(by.cssContainingText('div.level-one-title', 'RETIRE GREYHOUND')),
    RetireAsPet: element(by.cssContainingText('div.level-two-title', ' Retire as a Pet ')),



}