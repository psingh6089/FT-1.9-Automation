Feature: Login to the FT1.9 application as various user
  As a user
  I should be able to open the Homepage of the Application
  and should be able to login using valid credentials only

  @test
  Scenario: Login to the Ft1.9 application with valid credentials

    Given User navigates to the Home page of FT1.9 application
    When User logs in as User
    Then user should be able to land on 'Home' page and should see 'Welcome to Fast Track'


