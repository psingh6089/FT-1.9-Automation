Feature: Login to the FT1.9 application and verify the overlays

@test
Scenario: Verify Overlay at 'Home' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the overlay at 'Home' Page and clicks at 'Got it'
Then    user is able to land on 'Home' Page

@test
Scenario: Verify Overlay at 'My Dogs' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the overlay at 'My Dogs' Page and clicks at 'Got it'
Then    user is able to land on ' My Dogs ' Page

@testp
Scenario: Verify Overlay at 'My Dogs' -> 'Dog Details' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details

@testp
Scenario: Verify Overlay at 'I Want To' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details

@testp
Scenario: Verify Overlay at 'I Want To'-> 'Race GreyHound' -> 'Nominate' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details

@testp
Scenario: Verify Overlay at 'Calender' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details



