$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/01program.feature");
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
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_and_request_Body_for_new_Program_with_mandatory_additional_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 201 Created Status with response body for program",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Created_Status_with_response_body_for_program(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User create program with valid endpoint and existing Program name.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_existingValues"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body for Program with existing values in program name.",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_and_request_Body_for_Program_with_existing_values_in_program_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 400 Bad Request Status with message for existing values in program name.",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_for_existing_values_in_program_name(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users are able to update a program with valid programID and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PutRequest_updateProgramByValidID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request with mandatory and additional fields to update a Program with valid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_with_mandatory_and_additional_fields_to_update_a_Program_with_valid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 200 ok Status code with response body for update",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_ok_Status_code_with_response_body_for_update(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to update a program with valid programName and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PutRequest_updateProgrambyValidProgramName"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request with mandatory and additional fields for Program with valid program name",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_with_mandatory_and_additional_fields_for_Program_with_valid_program_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 200 ok Status code with response body for update",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_ok_Status_code_with_response_body_for_update(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to retrieve a program with valid programID and LMS API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GetRequest_ValidProgramID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to view Program with valid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_view_Program_with_valid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 200 OK Status with response body to view Program with valid program ID",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_OK_Status_with_response_body_to_view_Program_with_valid_program_ID(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to delete a program with valid programId and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteRequest_DeleteProgramWithValidProgramID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to delete a Program with valid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_delete_a_Program_with_valid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receive 200 Status with response body for delete a program with valid Id",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receive_Status_with_response_body_for_delete_a_program_with_valid_Id(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to delete a program with invalid programId and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteRequest_DeleteProgramWithinvalidProgramID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to delete Program with invalid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_delete_Program_with_invalid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get 404 Status with response body for delete Program with invalid program ID",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_get_Status_with_response_body_for_delete_Program_with_invalid_program_ID(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User tries to update a program with invalid programID and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PutRequest_updateProgramwithinvalidProgramID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request with mandatory and additional fields to update Program with invalid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_with_mandatory_and_additional_fields_to_update_Program_with_invalid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 404 Status code with response body  to update Program with invalid program ID",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Status_code_with_response_body_to_update_Program_with_invalid_program_ID(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User tries to update a program with invalid programName and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PutRequest_updateProgramwithinvalidProgramName"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request with mandatory and additional fields to update Program with invalid program Name",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_with_mandatory_and_additional_fields_to_update_Program_with_invalid_program_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 404 Status code with response body to update Program with invalid program Name",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Status_code_with_response_body_to_update_Program_with_invalid_program_Name(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to delete a program with invalid programName and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgramwithinvalidProgramName"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to delete Program with invalid program name",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_delete_Program_with_invalid_program_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 404 Status code with response body to delete Program with invalid program name",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Status_code_with_response_body_to_delete_Program_with_invalid_program_name(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User create program with missing mandatory fields.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_missingMandatoryFields"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body to create program with missing mandatory fields.",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_and_request_Body_to_create_program_with_missing_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 400 Bad Request Status with message  to create Program with missing mandatory fields",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_to_create_Program_with_missing_mandatory_fields(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User create program with missing All mandatory fields.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_missingMandatoryALLFields"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body to create program with missing ALL mandatory fields.",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_and_request_Body_to_create_program_with_missing_ALL_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 400 Bad Request Status with message  to create Program with missing ALL mandatory fields",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_to_create_Program_with_missing_ALL_mandatory_fields(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates request for a new program two with the LMS API endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_CreateProgram_2"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_and_request_Body_for_new_Program_with_mandatory_additional_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 201 Created Status with response body for program",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Created_Status_with_response_body_for_program(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User tries to update a program with missing mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PutRequest_updateByProgrambyID_withMissingMandatoryFields"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to update Program with missing mandatory fields",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_update_Program_with_missing_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 400 Bad Request Status with message to update Program with missing mandatory fields",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_to_update_Program_with_missing_mandatory_fields(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e but was \u003c500\u003e.\n\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:73)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:512)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:101)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.spec(ValidatableResponseOptionsImpl.java:288)\r\n\tat api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_to_update_Program_with_missing_mandatory_fields(programSD.java:174)\r\n\tat ✽.User receives 400 Bad Request Status with message to update Program with missing mandatory fields(file:///D:/Git%20Repo%20download%20Folder%20Aug%202023/LMS-Rest-Assured-API-Testing/src/test/resources/Features/01program.feature:96)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User tries to update a program with valid Program name and missing mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PutRequest_updateProgramByProgramName_withMissingMandatoryFields"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request for Program with valid Program name and missing mandatory fields",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_for_Program_with_valid_Program_name_and_missing_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 404 Bad Request Status with message to update Program with missing mandatory fields",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_to_update_Program_with_missing_mandatory_fields(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e but was \u003c500\u003e.\n\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:73)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:108)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:512)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:101)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.spec(ValidatableResponseOptionsImpl.java:288)\r\n\tat api.StepDefinitions.programSD.user_receives_Bad_Request_Status_with_message_to_update_Program_with_missing_mandatory_fields(programSD.java:174)\r\n\tat ✽.User receives 404 Bad Request Status with message to update Program with missing mandatory fields(file:///D:/Git%20Repo%20download%20Folder%20Aug%202023/LMS-Rest-Assured-API-Testing/src/test/resources/Features/01program.feature:102)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User able to delete a program with valid programName and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgramwithvalidProgramName"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to delete Program with valid program name",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_delete_Program_with_valid_program_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receive 200 Status with response body for delete Program with valid program name",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receive_Status_with_response_body_for_delete_Program_with_valid_program_name(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User tries to retrieve a program with invalid programID and LMS API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GetRequest_GetwithinvalidProgramID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request for Program with invalid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_for_Program_with_invalid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 404 Status code with response body for Program with invalid program ID",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Status_code_with_response_body_for_Program_with_invalid_program_ID(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/02batch.feature");
formatter.feature({
  "name": "Batch features",
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
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_and_request_Body_for_new_Program_with_mandatory_additional_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 201 Created Status with response body for program",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receives_Created_Status_with_response_body_for_program(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates request for a new batch for existing program with the LMS API endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_CreateBatch"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body to create new Batch with mandatory ,additional fields",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.batchSD.user_sends_HTTPS_Request_and_request_Body_to_create_new_Batch_with_mandatory_additional_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 201 Created Status with response body for newly created batch",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.batchSD.user_receives_Created_Status_with_response_body_for_newly_created_batch(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates request for a new batch for existing program and batch with the LMS API endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_CreateBatch_2"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body to create new Batch with mandatory ,additional fields and previous batch id",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User receives 201 Created Status with response body for newly created batch with new batch id",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "User creates request for a new batch for existing program with the LMS API endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest_CreateExistingBatch"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request and  request Body to create new Batch with existing batch name",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User receives 400 Status with response body for existing batch",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "User creates request for a deleting batch for existing program with the LMS API endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteRequest_DeleteBatch"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to delete Batch by batchId",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.batchSD.user_sends_HTTPS_Request_to_delete_Batch_by_batchId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receives 200 Status ok with response to delete batch by Id",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.batchSD.user_receives_Status_ok_with_response_to_delete_batch_by_Id(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to delete a program with valid programId and mandatory request body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteRequest_DeleteProgramWithValidProgramID"
    }
  ]
});
formatter.step({
  "name": "User creates request for the LMS API endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_creates_request_for_the_LMS_API_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends HTTPS Request to delete a Program with valid program ID",
  "keyword": "When "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_sends_HTTPS_Request_to_delete_a_Program_with_valid_program_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User receive 200 Status with response body for delete a program with valid Id",
  "keyword": "Then "
});
formatter.match({
  "location": "api.StepDefinitions.programSD.user_receive_Status_with_response_body_for_delete_a_program_with_valid_Id(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});