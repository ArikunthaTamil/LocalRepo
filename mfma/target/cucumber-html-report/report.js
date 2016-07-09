$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest1.feature");
formatter.feature({
  "line": 2,
  "name": "Login to M-Files Mobile App Test1",
  "description": "",
  "id": "login-to-m-files-mobile-app-test1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testfeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get the list of vaults available for the user",
  "description": "",
  "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Enter server \u003cserver\u003e name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Connect to enter login credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter user name \u003cuname\u003e and  \u003cpassword\u003e password",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click Login to see the list of vaults",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the vault \u003cvault\u003e from the list",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user;",
  "rows": [
    {
      "cells": [
        "server",
        "uname",
        "password",
        "vault"
      ],
      "line": 12,
      "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user;;1"
    },
    {
      "cells": [
        "\"http://172.24.166.141\"",
        "\"alexk\"",
        "\"a\"",
        "\"Sample Vault\""
      ],
      "line": 13,
      "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user;;2"
    },
    {
      "cells": [
        "\"http://172.24.166.141\"",
        "\"miket\"",
        "\"a\"",
        "\"Sample Vault\""
      ],
      "line": 14,
      "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6316467162,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get the list of vaults available for the user",
  "description": "",
  "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testfeature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter server \"http://172.24.166.141\" name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Connect to enter login credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter user name \"alexk\" and  \"a\" password",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click Login to see the list of vaults",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the vault \"Sample Vault\" from the list",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://172.24.166.141",
      "offset": 14
    }
  ],
  "location": "LoginSteps.EntersServerName(String)"
});
formatter.result({
  "duration": 6402408237,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClicksConnect()"
});
formatter.result({
  "duration": 914598728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alexk",
      "offset": 17
    },
    {
      "val": "a",
      "offset": 30
    }
  ],
  "location": "LoginSteps.EntersCredentials(String,String)"
});
formatter.result({
  "duration": 10642785824,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClicksLogin()"
});
formatter.result({
  "duration": 911312115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample Vault",
      "offset": 20
    }
  ],
  "location": "LoginSteps.ClicksVaultName(String)"
});
formatter.result({
  "duration": 1166209240,
  "status": "passed"
});
formatter.after({
  "duration": 1044458286,
  "status": "passed"
});
formatter.before({
  "duration": 6915309486,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get the list of vaults available for the user",
  "description": "",
  "id": "login-to-m-files-mobile-app-test1;get-the-list-of-vaults-available-for-the-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testfeature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter server \"http://172.24.166.141\" name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Connect to enter login credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter user name \"miket\" and  \"a\" password",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click Login to see the list of vaults",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the vault \"Sample Vault\" from the list",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://172.24.166.141",
      "offset": 14
    }
  ],
  "location": "LoginSteps.EntersServerName(String)"
});
formatter.result({
  "duration": 5778437289,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClicksConnect()"
});
formatter.result({
  "duration": 886256940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "miket",
      "offset": 17
    },
    {
      "val": "a",
      "offset": 30
    }
  ],
  "location": "LoginSteps.EntersCredentials(String,String)"
});
formatter.result({
  "duration": 10959520482,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClicksLogin()"
});
formatter.result({
  "duration": 888225957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample Vault",
      "offset": 20
    }
  ],
  "location": "LoginSteps.ClicksVaultName(String)"
});
formatter.result({
  "duration": 1469277525,
  "status": "passed"
});
formatter.after({
  "duration": 1386796262,
  "status": "passed"
});
formatter.uri("LoginTest2.feature");
formatter.feature({
  "line": 2,
  "name": "Login to M-Files Mobile App Test2",
  "description": "",
  "id": "login-to-m-files-mobile-app-test2",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testfeature1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get the list of vaults available for the user1",
  "description": "",
  "id": "login-to-m-files-mobile-app-test2;get-the-list-of-vaults-available-for-the-user1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Enter server \u003cserver\u003e name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Connect to enter login credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter user name \u003cuname\u003e and  \u003cpassword\u003e password",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click Login to see the list of vaults",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the vault \u003cvault\u003e from the list",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-m-files-mobile-app-test2;get-the-list-of-vaults-available-for-the-user1;",
  "rows": [
    {
      "cells": [
        "server",
        "uname",
        "password",
        "vault"
      ],
      "line": 12,
      "id": "login-to-m-files-mobile-app-test2;get-the-list-of-vaults-available-for-the-user1;;1"
    },
    {
      "cells": [
        "\"http://172.24.166.141\"",
        "\"alexk\"",
        "\"a\"",
        "\"Mobile Testing\""
      ],
      "line": 13,
      "id": "login-to-m-files-mobile-app-test2;get-the-list-of-vaults-available-for-the-user1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6643103677,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get the list of vaults available for the user1",
  "description": "",
  "id": "login-to-m-files-mobile-app-test2;get-the-list-of-vaults-available-for-the-user1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testfeature1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter server \"http://172.24.166.141\" name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Connect to enter login credentials",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter user name \"alexk\" and  \"a\" password",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click Login to see the list of vaults",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the vault \"Mobile Testing\" from the list",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://172.24.166.141",
      "offset": 14
    }
  ],
  "location": "LoginSteps.EntersServerName(String)"
});
formatter.result({
  "duration": 5606278339,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClicksConnect()"
});
formatter.result({
  "duration": 906905160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alexk",
      "offset": 17
    },
    {
      "val": "a",
      "offset": 30
    }
  ],
  "location": "LoginSteps.EntersCredentials(String,String)"
});
formatter.result({
  "duration": 11256579722,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClicksLogin()"
});
formatter.result({
  "duration": 822395221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Testing",
      "offset": 20
    }
  ],
  "location": "LoginSteps.ClicksVaultName(String)"
});
formatter.result({
  "duration": 1506840242,
  "status": "passed"
});
formatter.after({
  "duration": 1249713340,
  "status": "passed"
});
});