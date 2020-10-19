Feature: Login to the FT1.9 application and verify the overlays

@test
Scenario: Verify Overlay at 'Home' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'xx' details
Then   user should be able to see the 'Activities' details

@testp
Scenario: Verify Overlay at 'My Dogs' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details

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
Scenario: VVerify Overlay at 'Calender' Page
Given  A participant "William Mcmahon" logged in to FastTrack application
When   user views the 'Activities' details
Then   user should be able to see the 'Activities' details



