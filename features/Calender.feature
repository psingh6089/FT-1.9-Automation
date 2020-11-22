Feature: User virifies the the Calender page

    @test
    Scenario: Verify that user can view the 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Nothing' tab and clicks 'Nothing' tab
        When user views the 'Calendar' details
        Then user is able to land on 'Calendar' Page

    @test
    Scenario: Verify that user can view the 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Nothing' tab
        When user views the 'Calendar' page with 'filter'
        Then User verifies the list of filters on 'Calendar' page and its detail

    @test
    Scenario: Verify that user can view the 'Calendar' page filter by 'Metro'
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Metro' tab
        When user views the 'Calendar' page and filters by 'Metro'
        Then User verifies the list displayed with filter 'Metro'

    @testp
    Scenario: Verify that user can view the 'Calendar' page filter by 'PFS'
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'PFS' tab
        When user views the 'Calendar' page and filters by 'PFS'
        Then User verifies the list displayed with filter 'PFS'

    @testp
    Scenario: Verify that user can view the 'Calendar' page filter by 'Tier 3'
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Tier 3' tab
        When user views the 'Calendar' page and filters by 'Tier 3'
        Then User verifies the list displayed with filter 'Tier 3'

    @testp
    Scenario: Verify that user can view the 'Calendar' page filter by 'RLM'
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'RLM' tab
        When user views the 'Calendar' page and filters by 'RLM'
        Then User verifies the list displayed with filter 'RLM'

    @testp
    Scenario: Verify that user can view the 'Calendar' page filter by 'HSM'
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'HSM' tab
        When user views the 'Calendar' page and filters by 'HSM'
        Then User verifies the list displayed with filter 'HSM'

    @testp
    Scenario: Verify that user can view the 'Calendar' page filter by 'CS'
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'CS' tab
        When user views the 'Calendar' page and filters by 'CS'
        Then User verifies the list displayed with filter 'CS'

    @test-------------not working
    Scenario: Verify that user can view the information 'i' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'i' tab and clicks 'Nothing' tab
        When user views the 'Calendar' page with 'i'
        Then User verifies information details on Calendar page

    @testp-----not sure on this
    Scenario: Verify that user can navigate previous and next month on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Next Month' tab and clicks 'Nothing' tab
        When user views the 'Next Month' page
        Then User verifies the details on Calendar page

    @test
    Scenario: Verify that user can view the 'Metro' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Metro' tab
        When user views the 'Calendar' page and filters by 'Metro' option
        Then User verifies the details with filter 'Metro'

    @test
    Scenario: Verify that user can view the 'PFS' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'PFS' tab
        When user views the 'Calendar' page and filters by 'PFS' option
        Then User verifies the details with filter 'PFS'

    @test
    Scenario: Verify that user can view the 'Tier 3' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Tier 3' tab
        When user views the 'Calendar' page and filters by 'Tier 3' option
        Then User verifies the details with filter 'Tier 3'

    @test
    Scenario: Verify that user can view the 'RLM' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Metro' tab
        When user views the 'Calendar' page and filters by 'RLM' option
        Then User verifies the details with filter 'RLM'

    @test
    Scenario: Verify that user can view the 'HSM' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'Metro' tab
        When user views the 'Calendar' page and filters by 'HSM' option
        Then User verifies the details with filter 'HSM'

    @test
    Scenario: Verify that user can view the 'CS' details on 'Calendar' page
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'Calendar' -> 'Filter' tab and clicks 'CS' tab
        When user views the 'Calendar' page and filters by 'CS' option
        Then User verifies the details with filter 'CS'