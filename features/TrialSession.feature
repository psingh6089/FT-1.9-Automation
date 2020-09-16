Feature: FT2-870 Participant can view active trial session

    @test
    Scenario: FT2-870 Participant can view active trial sessions
        Given A participant "William Mcmahon" logged in to FastTrack application
        And   user navigates to 'I Want To' -> 'Club Trials' tab and clicks 'X' tab
        When  Click on the track to select the track
        Then User should be able to view the tracklist under Make a booking screen
       

    @test
    Scenario: FT2-873 Select a trial session to book
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And   user navigates to 'I Want To' -> 'Club Trials' tab and clicks 'X' tab
        When  Click on the track to select the track
        And clicks on the trials
        Then user should be able to view the track details
        And User should be able to view the unavailable time slot
        And User should be able to view the booked time slot 
        And User should be able to view the book time slot for
        And User should be able to view the My booked trials
        And User should be able to view the My booking details

     @test
    Scenario: FT2-706 Participant can book a trial session
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And   And   user navigates to 'I Want To' -> 'Club Trials' tab and clicks 'X' tab
        When  Click on the track to select the track
        And clicks on the trials
        And user clicks on BOOK TIME SLOT(S) FOR
        And user selects trial criteria
        And User clicks on 'submit' button
        Then User should be navigated to the confirmation page
        And User should be able to view the My booking details
   
   @test 
    Scenario: FT2-712 Participant can pay for a trial session
     Given  A participant "William Mcmahon" logged in to FastTrack application
        And   And   user navigates to 'I Want To' -> 'Club Trials' tab and clicks 'X' tab
        When  Click on the My booking tab
        And clicks on the trials for which payment has to be selected and click checkbox
       And user proceeds with the payment option
       Then user should get a popup for the payment confirmation





