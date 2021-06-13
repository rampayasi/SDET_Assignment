$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "User registration and message compose functionality in English language",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify that the user is able to complete the registration after filling and submitting the form",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-complete-the-registration-after-filling-and-submitting-the-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on the Signup! link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Registration page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "enter all madatory info \"\u003cFollow Course\u003e\", \"\u003cfirstname\u003e\",\"\u003clastname\u003e\", \"\u003cemail\u003e\",\"\u003cusername\u003e\", \"\u003cpassnumber\u003e\", \"\u003cconf_pass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Signup confirmation page is displaying with user info \"\u003cfirstname\u003e\",\"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-complete-the-registration-after-filling-and-submitting-the-form;",
  "rows": [
    {
      "cells": [
        "Follow Course",
        "firstname",
        "lastname",
        "email",
        "username",
        "passnumber",
        "conf_pass"
      ],
      "line": 32,
      "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-complete-the-registration-after-filling-and-submitting-the-form;;1"
    },
    {
      "cells": [
        "Follow Course",
        "rewewre",
        "qweq",
        "asasacT@testgg.com",
        "TestSDETRam_c",
        "Test_c",
        "Test_c"
      ],
      "line": 33,
      "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-complete-the-registration-after-filling-and-submitting-the-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3836556900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify that the user is able to complete the registration after filling and submitting the form",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-complete-the-registration-after-filling-and-submitting-the-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on the Signup! link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Registration page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "enter all madatory info \"Follow Course\", \"rewewre\",\"qweq\", \"asasacT@testgg.com\",\"TestSDETRam_c\", \"Test_c\", \"Test_c\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Signup confirmation page is displaying with user info \"rewewre\",\"qweq\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_should_be_on_the_home_page()"
});
formatter.result({
  "duration": 6371286500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_the_Signup_link()"
});
formatter.result({
  "duration": 4372964500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.registration_page_should_display()"
});
formatter.result({
  "duration": 3100669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Follow Course",
      "offset": 25
    },
    {
      "val": "rewewre",
      "offset": 42
    },
    {
      "val": "qweq",
      "offset": 52
    },
    {
      "val": "asasacT@testgg.com",
      "offset": 60
    },
    {
      "val": "TestSDETRam_c",
      "offset": 81
    },
    {
      "val": "Test_c",
      "offset": 98
    },
    {
      "val": "Test_c",
      "offset": 108
    }
  ],
  "location": "stepdefinition.enter_all_madatory_info(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1052899400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_Submit_button()"
});
formatter.result({
  "duration": 6627019400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rewewre",
      "offset": 55
    },
    {
      "val": "qweq",
      "offset": 65
    }
  ],
  "location": "stepdefinition.signup_confirmation_page_is_displaying_with_user_info(String,String)"
});
formatter.result({
  "duration": 3030168000,
  "status": "passed"
});
formatter.after({
  "duration": 993860200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Verify that the user is able to compose and send the message",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-compose-and-send-the-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Login with valid name",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "click on the user icon",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on the link \"\u003cInbox\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on the compose",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Enter Send To, Subject, Message \"\u003cSend To\u003e\" ,\"\u003cSubject\u003e\", \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on the Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Message should be send successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-compose-and-send-the-message;",
  "rows": [
    {
      "cells": [
        "Inbox",
        "Send To",
        "Subject",
        "Message"
      ],
      "line": 46,
      "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-compose-and-send-the-message;;1"
    },
    {
      "cells": [
        "Inbox",
        "virat",
        "Test",
        "Test"
      ],
      "line": 47,
      "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-compose-and-send-the-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1926266700,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify that the user is able to compose and send the message",
  "description": "",
  "id": "user-registration-and-message-compose-functionality-in-english-language;verify-that-the-user-is-able-to-compose-and-send-the-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 35,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Login with valid name",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "click on the user icon",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on the link \"Inbox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on the compose",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Enter Send To, Subject, Message \"virat\" ,\"Test\", \"Test\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on the Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Message should be send successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.Login_with_valid_name()"
});
formatter.result({
  "duration": 18688190600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_user_icon()"
});
formatter.result({
  "duration": 3096123900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inbox",
      "offset": 19
    }
  ],
  "location": "stepdefinition.click_on_the_link(String)"
});
formatter.result({
  "duration": 3501268900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_compose()"
});
formatter.result({
  "duration": 4363420400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "virat",
      "offset": 33
    },
    {
      "val": "Test",
      "offset": 42
    },
    {
      "val": "Test",
      "offset": 50
    }
  ],
  "location": "stepdefinition.enter_Send_To_Subject_Message(String,String,String)"
});
formatter.result({
  "duration": 1805132600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_Send_Message()"
});
formatter.result({
  "duration": 5476184400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.message_should_be_send_successfully()"
});
formatter.result({
  "duration": 44224900,
  "status": "passed"
});
formatter.after({
  "duration": 1154997600,
  "status": "passed"
});
});