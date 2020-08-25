Feature: To validate the Apply To Participate for user
 

@test
Scenario: Apply to Participate as owner
Given  A participant "David Long" logged in to FastTrack application
And    user navigates to the Apply to Participate and selects owner 
When user completed the documentation
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner

@p
Scenario: Apply to Participate as Attendant
Given  A participant "David Long" logged in to FastTrack application
And    user navigates to the Apply to Participate and selects owner 
When user completed the documentation
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner

@p
Scenario: Apply to Participate as Catcher
Given  A participant "David Long" logged in to FastTrack application
And    user navigates to the Apply to Participate and selects owner 
When user completed the documentation
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner

@p
Scenario: Apply to Participate as Trainer
Given  A participant "David Long" logged in to FastTrack application
And    user navigates to the Apply to Participate and selects owner 
When user completed the documentation
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner

@p
Scenario: Apply to Participate as Breeder
Given  A participant "David Long" logged in to FastTrack application
And    user navigates to the Apply to Participate and selects owner 
When user completed the documentation
And    work bench user confirms the request in FT 1.0 
Then   user should be able to see himself as owner


