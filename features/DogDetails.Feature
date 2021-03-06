    Feature: FT2-1156-Dog Details 

    @testp
    Scenario: FT2-1156	Dog Details - Main Page - As a user I want to be able to see the details of a dog like status, colour, sex, state, etc. As the dog's trainer/owner/person in charge - I should see more details like the microchip number, earbrand.
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Nothing' tab
        When user navigates the Dog Content details 
        Then  user should be able to verify the dog details

    @test
    Scenario: FT2-1157	Dog Details - Form - As a user I want to see the dog's form.
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Form' tab
        When  user navigates to the 'Form' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1157	Dog Details - Form - As a user I want to see the dog's form with toggle table
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Form' tab
        When  user see the details of a dog with toggle to table view
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1158	Dog Details - Coursing Form - As a user I want to be able to the dog's coursing form
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Coursing Form' tab
        When   user navigates to the 'Coursing Form' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1159	Dog Details - Grades - As a user I want to be able to see the dog's grades
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Grades' tab
        When user navigates to the 'Grades' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1160	Dog Details - Litters - As a user I want to see the litters the dog participated in.
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Litters' tab
        When user navigates to the 'Litters' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1161	Dog Details - Pedigree - As a user I want to see the dog's pedigree.
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Pedigree' tab
        When user navigates to the 'Pedigree' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1162	Dog Details - History - "As an authenticated user I want to see the dog's history.Some users should also be able to see the dog's location history.Sections include: owner history, trainer history, location history, vet endorsements, retiremn"
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'History' tab
        When  user navigates to the 'History' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1165	Dog Details - Trials - As a user I want to see the dog's trial history.
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Trials' tab
        When  user navigates to the 'Trials' Page of Dog Details
        Then  user should be able to verify the dog details

        @test
    Scenario: FT2-1165	Dog Details - Racing Offences - As a user I want to see the dog's racing offences
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog Details' tab and clicks 'Racing Offences' tab
        When  user navigates to the 'Racing Offences' Page of Dog Details
        Then  user should be able to verify the dog details

        