Feature: Login to the FT1.9 application as various user
As a user
I should be able to open the Homepage of the Application
and should be able to login using valid credentials only

@test
Scenario: Login to the Ft1.9 application with valid credentials

Given User navigates to the Home page of FT1.9 application
When User logs in as User
Then user should be able to land on 'Home' page and should see 'Welcome to Fast Track'

@testp
Scenario: Verify the Home Page with Activities tab of the participant 44472
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details

@testp
Scenario: Verify the Home Page with Calender & Meeting tab of the participant 44472
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Calender & Meeting' details
Then   user should be able to see the 'Calender & Meeting' details

@testp
Scenario: Verify the Home Page with Important Announcements tab of the participant 44472
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Important Announcements' details
Then   user should be able to see the 'Important Announcements' details




