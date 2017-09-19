Feature: Apply without Resume
  As a job seeker
  I want to apply for jobs
  So that I can have a chance to get a job

Background: Login & Search for a job
  Given I am on Login page
  And I type in email of account without resume on email field
  And I type in password of account without resume on password field
  And I click on Log in
  And I should see Logged In Header module
  And I go to Search page
  And I click on Search jobs
  And I should land on Search Result page
  And I go to the 1st Job Ad

@iOS @stg
  Scenario: Existing member without resume cannot start apply
#    Given I am logged in with "<email>" and "<password>"
    Given I should land on Job Ad page
    When I click on Apply
    Then I should land on Complete Your Profile page
    And I should see App Store button
    And I take snapshot

#  @prod
#  Examples:
#      | email | password | Remarks |
#      | jobsdbcarrielai4@gmail.com | carrie1234 | without resume |


#  Examples:
#      | email | password | Remarks |
#      | carrielai+300@seekasia.com | carrie1234 | without resume |

@Android
  Scenario: Existing member without resume cannot start apply
#    Given I am logged in with <email> and <password>
    And I am on Job Ad page
    When I click on Apply button
    Then I should land on Complete Your Profile page
    And I should see Google Play button
    And I take snapshot
