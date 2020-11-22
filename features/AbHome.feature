Feature: Login to the FT1.9 application as various user
As a user
I should be able to open the Homepage of the Application
and should be able to login using valid credentials only

@test
Scenario: Login to the Ft1.9 application with valid credentials
Given User navigates to the Home page of FT1.9 application
When User navigates 'Home' and verifies 'WELCOME TO MYFASTTRACK'
Then user should be able to validate 'WELCOME TO MYFASTTRACK'

@test
Scenario: Verify the Home Page with Activities tab of the participant 44472
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details

@test
Scenario: Verify the Home Page with Calender & Meeting tab of the participant 44472
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Calender & Meeting' details
Then   user should be able to see the 'Calender & Meeting' details

@test
Scenario: Verify the Home Page with Important Announcements tab of the participant 44472
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Important Announcements' details
Then   user should be able to see the 'Important Announcements' details




