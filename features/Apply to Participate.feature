Feature: To validate the Apply To Participate for user
 

@p
Scenario: Apply to Participate as owner
Given  A participant "Peter Walsh" logged in to FastTrack application
And  user navigates to 'Account' -> 'Setting' tab and clicks 'Apply To Participate' tab
When user selects the role as 'owner' 
And    work bench user confirms the request in FT 1.0 
Then   user should be able t12o see himself as owner

@test
Scenario: Apply to Participate as Attendant
Given  A participant "Janet" logged in to FastTrack application
And  user navigates to 'Account' -> 'Setting' tab and clicks 'Apply To Participate' tab
When user selects the role as 'Attendant' 

Then   user should be able to see himself as owner

@testp
Scenario: Apply to Participate as Catcher
Given  A participant "Peter Walsh" logged in to FastTrack application
And  user navigates to 'Account' -> 'Setting' tab and clicks 'Apply To Participate' tab
When user selects the role as 'Catcher' 
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner

@p
Scenario: Apply to Participate as owner Trainer
Given  A participant "Peter Walsh" logged in to FastTrack application
And  user navigates to 'Account' -> 'Setting' tab and clicks 'Apply To Participate' tab
When user selects the role as 'Owner Trainer' 
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner

@p
Scenario: Apply to Participate as Public Trainer
Given  A participant "Peter Walsh" logged in to FastTrack application
And  user navigates to 'Account' -> 'Setting' tab and clicks 'Apply To Participate' tab
When user selects the role as 'Public Trainer' 
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner


