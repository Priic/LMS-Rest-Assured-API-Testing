package api.StepDefinitions;

import api.Request.programRequest;
import api.RequestBody.programRequestBody;
import api.Utilities.restUtils;
import io.cucumber.java.en.*;
//import static io.restassured.module.jsv.JsonSchemaValidator;
import static io.restassured.RestAssured.*;

import java.io.FileNotFoundException;
import java.io.IOException;


public class programSD extends restUtils{
	
	@Given("User creates request for the LMS API endpoint")
	public void user_creates_request_for_the_LMS_API_endpoint() {
	  
		String baseUrl=path.getString("BaseUrl");//assigning baseurl value stored in string
		baseURI=baseUrl;
		log.info("***User sends request with BaseURL***");	
	    
	}

	@When("User sends HTTPS Request to view all programs")
	public void user_sends_HTTPS_Request_to_view_all_programs() throws IOException {
	  
	
		
		
	   
	}

	@Then("User receives {int} OK Status with response body")
	public void user_receives_OK_Status_with_response_body(Integer int1) {
	  
		
		
	  
	}

	

	@When("User sends HTTPS Request and  request Body for new Program with mandatory ,additional fields")
	public void user_sends_HTTPS_Request_and_request_Body_for_new_Program_with_mandatory_additional_fields() throws IOException {
	  
		System.out.println("Program Id: "+programId);
		programPayload=programRequestBody.programPostBody();
		
		System.out.println("Program Id before response: "+programId);
		response=programRequest.postRequest(programPayload);
		programId=response.path("programId");
		System.out.println("Program Id: "+programId);
	}

	@Then("User receives {int} Created Status with response body for program")
	public void user_receives_Created_Status_with_response_body_for_program(Integer int1) {
	  
		response.then().spec(responseSpecification201()).log().all();
	}

	

	@When("User sends HTTPS Request and  request Body for Program with existing values in program name.")
	public void user_sends_HTTPS_Request_and_request_Body_for_Program_with_existing_values_in_program_name() {
	  
	    
	}

	@Then("User receives {int} Bad Request Status with message for existing values in program name.")
	public void user_receives_Bad_Request_Status_with_message_for_existing_values_in_program_name(Integer int1) {
	  
	   
	}

	

	@When("User sends HTTPS Request with mandatory and additional fields to update a Program with valid program ID")
	public void user_sends_HTTPS_Request_with_mandatory_and_additional_fields_to_update_a_Program_with_valid_program_ID() {
	  
	    
	}

	@Then("User receives {int} ok Status code with response body for update")
	public void user_receives_ok_Status_code_with_response_body_for_update(Integer int1) {
	  
	    
	}

	

	@When("User sends HTTPS Request to view Program with valid program ID")
	public void user_sends_HTTPS_Request_to_view_Program_with_valid_program_ID() {
	  
	    
	}

	@Then("User receives {int} OK Status with response body to view Program with valid program ID")
	public void user_receives_OK_Status_with_response_body_to_view_Program_with_valid_program_ID(Integer int1) {
	  
	    
	}

	

	@When("User sends HTTPS Request to delete a Program with valid program ID")
	public void user_sends_HTTPS_Request_to_delete_a_Program_with_valid_program_ID() throws FileNotFoundException {
	  
		response=programRequest.programDeleteRequest_ByID();
		
	    
	}

	@Then("User receive {int} Status with response body for delete a program with valid Id")
	public void user_receive_Status_with_response_body_for_delete_a_program_with_valid_Id(Integer int1) {
	  
		response.then().spec(responseSpecification200()).log().all();
	    
	}

	
	@When("User sends HTTPS Request to delete Program with invalid program ID")
	public void user_sends_HTTPS_Request_to_delete_Program_with_invalid_program_ID() {
	  
	    
	}

	@Then("User get {int} Status with response body for delete Program with invalid program ID")
	public void user_get_Status_with_response_body_for_delete_Program_with_invalid_program_ID(Integer int1) {
	  
	   
	}

	

	@When("User sends HTTPS Request and  request Body to create program with missing mandatory fields.")
	public void user_sends_HTTPS_Request_and_request_Body_to_create_program_with_missing_mandatory_fields() {
	  
	    
	}

	@Then("User receives {int} Bad Request Status with message  to create Program with missing mandatory fields")
	public void user_receives_Bad_Request_Status_with_message_to_create_Program_with_missing_mandatory_fields(Integer int1) {
	  
	    
	}


	@When("User sends HTTPS Request to update Program with missing mandatory fields")
	public void user_sends_HTTPS_Request_to_update_Program_with_missing_mandatory_fields() {
	  
	   
	}

	@Then("User receives {int} Bad Request Status with message to update Program with missing mandatory fields")
	public void user_receives_Bad_Request_Status_with_message_to_update_Program_with_missing_mandatory_fields(Integer int1) {
	  
	   
	}


	@When("User sends HTTPS Request for Program with valid Program name and missing mandatory fields")
	public void user_sends_HTTPS_Request_for_Program_with_valid_Program_name_and_missing_mandatory_fields() {
	  
	    
	}


	

	@When("User sends HTTPS Request with mandatory and additional fields for Program with valid program name")
	public void user_sends_HTTPS_Request_with_mandatory_and_additional_fields_for_Program_with_valid_program_name() {
	  
	    
	}


	

	@When("User sends HTTPS Request to delete Program with valid program name")
	public void user_sends_HTTPS_Request_to_delete_Program_with_valid_program_name() {
	  
	   
	}

	@Then("User receive {int} Status with response body for delete Program with valid program name")
	public void user_receive_Status_with_response_body_for_delete_Program_with_valid_program_name(Integer int1) {
	  
	   
	}


	@When("User sends HTTPS Request for Program with invalid program ID")
	public void user_sends_HTTPS_Request_for_Program_with_invalid_program_ID() {
	  
	    
	}

	@Then("User receives {int} Status code with response body for Program with invalid program ID")
	public void user_receives_Status_code_with_response_body_for_Program_with_invalid_program_ID(Integer int1) {
	  
	    
	}

	

	@When("User sends HTTPS Request with mandatory and additional fields to update Program with invalid program ID")
	public void user_sends_HTTPS_Request_with_mandatory_and_additional_fields_to_update_Program_with_invalid_program_ID() {
	  
	    
	}

	@Then("User receives {int} Status code with response body  to update Program with invalid program ID")
	public void user_receives_Status_code_with_response_body_to_update_Program_with_invalid_program_ID(Integer int1) {
	  
	    
	}

	

	@When("User sends HTTPS Request with mandatory and additional fields to update Program with invalid program Name")
	public void user_sends_HTTPS_Request_with_mandatory_and_additional_fields_to_update_Program_with_invalid_program_Name() {
	  
	}

	@Then("User receives {int} Status code with response body to update Program with invalid program Name")
	public void user_receives_Status_code_with_response_body_to_update_Program_with_invalid_program_Name(Integer int1) {
	  
	   
	}


	@When("User sends HTTPS Request to delete Program with invalid program name")
	public void user_sends_HTTPS_Request_to_delete_Program_with_invalid_program_name() {
	  
	    
	}

	@Then("User receives {int} Status code with response body to delete Program with invalid program name")
	public void user_receives_Status_code_with_response_body_to_delete_Program_with_invalid_program_name(Integer int1) {
	  
	   
	}



	
}