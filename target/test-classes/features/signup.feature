#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: User registration and message compose functionality in English language

  @tag1
  Scenario Outline: Verify that the user is able to complete the registration after filling and submitting the form
    Given user should be on the home page
    When user clicks on the Signup! link
    Then Registration page should display
    Then enter all madatory info "<Follow Course>", "<firstname>","<lastname>", "<email>","<username>", "<passnumber>", "<conf_pass>"
    And click on the Submit button
    Then Signup confirmation page is displaying with user info "<firstname>","<lastname>"

    Examples: 
      | Follow Course | firstname | lastname | email              | username      | passnumber | conf_pass |
      | Follow Course | rewewre   | qweq     | asasacT@testgg.com | TestSDETRam_c | Test_c     | Test_c    |

  @tag2
  Scenario Outline: Verify that the user is able to compose and send the message
    Given Login with valid name
    When click on the user icon
    And click on the link "<Inbox>"
    And click on the compose
    And Enter Send To, Subject, Message "<Send To>" ,"<Subject>", "<Message>"
    And click on the Send Message
    Then Message should be send successfully

    Examples: 
      | Inbox | Send To | Subject | Message |
      | Inbox | virat   | Test    | Test    |
