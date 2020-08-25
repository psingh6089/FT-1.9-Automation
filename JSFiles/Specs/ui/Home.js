"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
exports.Home = {
    Login: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Log In')),
    UserName: protractor_1.element(protractor_1.by.id('username')),
    Password: protractor_1.element(protractor_1.by.id('password')),
    LoginContinue: protractor_1.element(protractor_1.by.css('div.button-bar')),
    WelcomeText: protractor_1.element(protractor_1.by.css('h2')),
    Logout: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Log Out ')),
    MyDogs: protractor_1.element(protractor_1.by.cssContainingText('div.nav-item', ' My Dogs')),
    NonRacing: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Non Racing Dogs ')),
    Breeding: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')),
    BlackBook: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Blackbook ')),
    Racing: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Racing Dogs ')),
    Dog: protractor_1.element(protractor_1.by.css('app-dog-card:nth-child(1)')).element(protractor_1.by.css('app-dog-card-header')).element(protractor_1.by.css('div.right')).element(protractor_1.by.css('button')).element(protractor_1.by.css('span.mat-button-wrapper')).element(protractor_1.by.css('mat-icon')),
    GotIt: protractor_1.element(protractor_1.by.cssContainingText('button.cancel-button.shepherd-button.shepherd-button-secondary', 'Done? Click here to skip'))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXVDO0FBQzFCLFFBQUEsSUFBSSxHQUFHO0lBRXBCLEtBQUssRUFBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRSxRQUFRLEVBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLFFBQVEsRUFBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckMsYUFBYSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEMsTUFBTSxFQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTlFLE1BQU0sRUFBUSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkUsU0FBUyxFQUFLLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDMUYsUUFBUSxFQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDN0YsU0FBUyxFQUFLLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLE1BQU0sRUFBUSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN0RixHQUFHLEVBQVcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvTixLQUFLLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsZ0VBQWdFLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztDQUdqSSxDQUFDIn0=