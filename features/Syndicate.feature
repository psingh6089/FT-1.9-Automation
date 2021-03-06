Feature: FT2-679 Owner can view a syndicate

    @test
    Scenario: QA-241 Verify if a user can view a Syndicate
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And  user navigates to 'Account' -> 'Syndicates' tab and clicks 'View Details' tab
        When user navigates view details link of a syndicate
        Then  User should be navigated to the syndicate details page
        And User should be able to view the financial details, members and greyhounds that belong to the Syndicate
    
    @test
    Scenario: FT2-545 As a manager I want to add new manager for syndicate members
        Given  A participant "David Long" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'View Details' tab
        When user clicks 'Manage Syndicate'
        And user adds a new member using FT member no. and clicks Add member button
        And User clicks on 'submit' button
        Then user should be able to see the added member with Incomplete status
     

    @test
    Scenario: FT2-545 As a manager I want to remove new manager for syndicate members
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'View Details' tab
        When user clicks 'Manage Syndicate' 
        And user click on the 'remove' corresponding to the member
        And User clicks on 'submit' button
        Then verify that removed memeber status is 'REMOVE (PENDING)'

     @test
    Scenario: FT2-545 As a manager I want to change alternative manager for syndicate members
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'View Details' tab
        When user clicks 'Manage Syndicate'
        And user clicks on the 'change status' and changes the action to 'alternate manager' corresponding to the member
        And User clicks on 'submit' button
        Then verify that member is addeed to the 'alternate manager' list


   @test
    Scenario: FT2-696	Owner can edit a syndicate's financial details
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'View Details' tab
        When user clicks 'Modify Finance Details' 
        And user is able to view,add,update the bank details
        And User clicks on 'submit' button 
        Then User should be navigated to the confirmation page
     

    @test
    Scenario:  FT2-678	Owner can view syndicate list
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'View Details' tab
        When user navigates view details link of a syndicate
        Then  User should be navigated to the syndicate details page

        
    @test
    Scenario: FT2-695 Owner can create a syndicate
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'Create a new syndicate' tab
        When enter the syndicate name 
        Then User should be able to see the syndicate created 

    @pending
    Scenario: FT2-715	Pay for creating a syndicate
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks 'Create a new syndicate' tab
        When Start to type your When step here enter the syndicate name 
        And user clicks on 'continue' button
        Then User should be able to see the syndicate created 


    @pending for notification or email
    Scenario: FT2-697	Participant can accept or reject syndicate invitation
        Given  A participant "Paul westerveld" logged in to FastTrack application
        And user navigates to 'Account' -> 'Syndicates' tab and clicks ' ' tab
        When Click on create a new syndicate tab
        And enter the syndicate details
        Then User should be able to see the added member details

        


        



