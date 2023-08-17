Feature: Program Feature

#		@GetRequest_AllPrograms
  #	Scenario: User able to retrieve all programs with valid LMS API
    #Given User creates request for the LMS API endpoint
    #When User sends HTTPS Request to view all programs
    #Then User receives 200 OK Status with response body

 	 	@PostRequest_CreateProgram
  	Scenario: User creates request for a new program with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields
    Then User receives 201 Created Status with response body for program
    
    
  	@PostRequest_existingValues
 		Scenario: User create program with valid endpoint and existing Program name.
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body for Program with existing values in program name.
    Then User receives 400 Bad Request Status with message for existing values in program name.
    
  

 	 	@PutRequest_updateProgramByValidID
  	Scenario: Users are able to update a program with valid programID and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request with mandatory and additional fields to update a Program with valid program ID
    Then User receives 200 ok Status code with response body for update
    
    @PutRequest_updateProgrambyValidProgramName
  	Scenario: User able to update a program with valid programName and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request with mandatory and additional fields for Program with valid program name
    Then User receives 200 ok Status code with response body for update

 	 @GetRequest_ValidProgramID
 		Scenario: User able to retrieve a program with valid programID and LMS API
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to view Program with valid program ID
    Then User receives 200 OK Status with response body to view Program with valid program ID

 	 	@DeleteRequest_DeleteProgramWithValidProgramID
  	Scenario: User able to delete a program with valid programId and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to delete a Program with valid program ID
    Then User receive 200 Status with response body for delete a program with valid Id

 	 	@DeleteRequest_DeleteProgramWithinvalidProgramID
  	Scenario: User able to delete a program with invalid programId and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to delete Program with invalid program ID
    Then User get 404 Status with response body for delete Program with invalid program ID
    
     @PutRequest_updateProgramwithinvalidProgramID
    Scenario: User tries to update a program with invalid programID and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request with mandatory and additional fields to update Program with invalid program ID
    Then User receives 404 Status code with response body  to update Program with invalid program ID
    
    
    @PutRequest_updateProgramwithinvalidProgramName
    Scenario: User tries to update a program with invalid programName and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request with mandatory and additional fields to update Program with invalid program Name
    Then User receives 404 Status code with response body to update Program with invalid program Name

    @DeleteProgramwithinvalidProgramName
    Scenario: User able to delete a program with invalid programName and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to delete Program with invalid program name
    Then User receives 404 Status code with response body to delete Program with invalid program name

  	@PostRequest_missingMandatoryFields
  	Scenario: User create program with missing mandatory fields.
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body to create program with missing mandatory fields.
    Then User receives 400 Bad Request Status with message  to create Program with missing mandatory fields
    
    
    @PostRequest_missingMandatoryALLFields
  	Scenario: User create program with missing All mandatory fields.
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body to create program with missing ALL mandatory fields.
    Then User receives 400 Bad Request Status with message  to create Program with missing ALL mandatory fields
    
    @PostRequest_CreateProgram_2
  	Scenario: User creates request for a new program two with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields
    Then User receives 201 Created Status with response body for program
#
  #	@PutRequest_updateByProgrambyID_withMissingMandatoryFields
  #	Scenario: User tries to update a program with missing mandatory request body
    #Given User creates request for the LMS API endpoint
    #When User sends HTTPS Request to update Program with missing mandatory fields
    #Then User receives 400 Bad Request Status with message to update Program with missing mandatory fields
#
  #	@PutRequest_updateProgramByProgramName_withMissingMandatoryFields
  #	Scenario: User tries to update a program with valid Program name and missing mandatory request body
    #Given User creates request for the LMS API endpoint
    #When User sends HTTPS Request for Program with valid Program name and missing mandatory fields
    #Then User receives 404 Bad Request Status with message to update Program with missing mandatory fields


 		@DeleteProgramwithvalidProgramName
  	Scenario: User able to delete a program with valid programName and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to delete Program with valid program name
    Then User receive 200 Status with response body for delete Program with valid program name

  	@GetRequest_GetwithinvalidProgramID
  	Scenario: User tries to retrieve a program with invalid programID and LMS API
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request for Program with invalid program ID
    Then User receives 404 Status code with response body for Program with invalid program ID

