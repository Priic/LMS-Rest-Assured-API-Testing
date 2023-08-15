Feature: Batch features


		@PostRequest_CreateProgram
  	Scenario: User creates request for a new program with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields
    Then User receives 201 Created Status with response body for program
    
		@PostRequest_CreateBatch
  	Scenario: User creates request for a new batch for existing program with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body to create new Batch with mandatory ,additional fields
    Then User receives 201 Created Status with response body for newly created batch
    
    @PostRequest_CreateBatch_2
  	Scenario: User creates request for a new batch for existing program and batch with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body to create new Batch with mandatory ,additional fields and previous batch id
    Then User receives 201 Created Status with response body for newly created batch with new batch id
    
    @PostRequest_CreateExistingBatch
  	Scenario: User creates request for a new batch for existing program with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request and  request Body to create new Batch with existing batch name
    Then User receives 400 Status with response body for existing batch
        
    @DeleteRequest_DeleteBatch
  	Scenario: User creates request for a deleting batch for existing program with the LMS API endpoint
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to delete Batch by batchId
    Then User receives 200 Status ok with response to delete batch by Id
    
    @DeleteRequest_DeleteProgramWithValidProgramID
  	Scenario: User able to delete a program with valid programId and mandatory request body
    Given User creates request for the LMS API endpoint
    When User sends HTTPS Request to delete a Program with valid program ID
    Then User receive 200 Status with response body for delete a program with valid Id
    
    