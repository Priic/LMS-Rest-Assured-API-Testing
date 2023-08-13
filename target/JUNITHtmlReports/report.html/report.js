$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/program.feature");
formatter.feature({
  "name": "Program Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User creates request for a new program with the LMS API endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_CreateProgram"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User receives 201 Created Status with response body for program",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});