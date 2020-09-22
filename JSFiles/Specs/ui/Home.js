"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
exports.Home = {
    Login: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Log In')),
    UserName: protractor_1.element(protractor_1.by.id('username')),
    Password: protractor_1.element(protractor_1.by.id('password')),
    LoginContinue: protractor_1.element(protractor_1.by.cssContainingText('button', 'Continue')),
    WelcomeText: protractor_1.element(protractor_1.by.css('h2')),
    Logout: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Log Out ')),
    MyDogs: protractor_1.element(protractor_1.by.cssContainingText('div.nav-item', ' My Dogs')),
    NonRacing: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Non Racing Dogs ')),
    Breeding: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')),
    BlackBook: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Blackbook ')),
    Racing: protractor_1.element(protractor_1.by.cssContainingText('a.mat-tab-label-active', ' Racing Dogs ')),
    Dog: protractor_1.element(protractor_1.by.css('app-dog-card:nth-child(1)')).element(protractor_1.by.css('app-dog-card-header')).element(protractor_1.by.css('div.right')).element(protractor_1.by.css('button')).element(protractor_1.by.css('span.mat-button-wrapper')).element(protractor_1.by.css('mat-icon')),
    GotIt: protractor_1.element(protractor_1.by.cssContainingText('button.next-button.shepherd-button ', 'Got it!')),
    SkipOverlay: protractor_1.element(protractor_1.by.cssContainingText('button.cancel-button.shepherd-button.shepherd-button-secondary', 'Done? Click here to skip'))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBQzVCLFFBQUEsSUFBSSxHQUFHO0lBRWhCLEtBQUssRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsYUFBYSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRSxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxDLE1BQU0sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU3RSxNQUFNLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZGLFFBQVEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pGLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRixNQUFNLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEYsR0FBRyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdE4sS0FBSyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFDQUFxQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RGLFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxnRUFBZ0UsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0NBQzNJLENBQUMifQ==