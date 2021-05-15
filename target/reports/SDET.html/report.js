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
    },
    {
      "line": 35,
      "name": "@Regression"
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
  "duration": 3968947001,
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
    },
    {
      "line": 35,
      "name": "@Regression"
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
  "duration": 8925993300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_user_icon()"
});
formatter.result({
  "duration": 3278466800,
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
  "duration": 3945569600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_compose()"
});
formatter.result({
  "duration": 4262615500,
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
  "duration": 1739074300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_the_Send_Message()"
});
formatter.result({
  "duration": 4903624801,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.message_should_be_send_successfully()"
});
formatter.result({
  "duration": 59310100,
  "status": "passed"
});
formatter.after({
  "duration": 1145748599,
  "status": "passed"
});
});