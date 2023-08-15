package api.StepDefinitions;

//import static io.restassured.RestAssured.*;

import java.io.FileNotFoundException;
import java.io.IOException;

import api.Request.batchRequest;
import api.RequestBody.batchRequestBody;
import api.Utilities.restUtils;
import io.cucumber.java.en.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;
//import static org.junit.Assert.assertEquals;

public class batchSD extends restUtils{
	
	
	@When("User sends HTTPS Request and  request Body to create new Batch with mandatory ,additional fields")
	public void user_sends_HTTPS_Request_and_request_Body_to_create_new_Batch_with_mandatory_additional_fields() throws IOException {
	   
		batchPayload=batchRequestBody.batchPostBody();
		response=batchRequest.postBatch_Request(batchPayload);
		batchPayload.setBatchId(response.path("batchId"));
		batchPayload.setProgramId(response.path("programId"));
	}

	@Then("User receives {int} Created Status with response body for newly created batch")
	public void user_receives_Created_Status_with_response_body_for_newly_created_batch(Integer int1) {
	   
		response.then().spec(responseSpecification201()).body(matchesJsonSchema(postbatchJson)).log().all();
		
		//assertEquals(ProgramPayload.getProgramName(), response.jsonPath().getString("programName"));
				
	}
	
	@Then("User receives {int} Status with response body for newly created batch")
	public void user_receives_Status_with_response_body_for_newly_created_batch(Integer int1) {
	   
		response.then().spec(responseSpecification201());
	}
	
	

	@When("User sends HTTPS Request to delete Batch by batchId")
	public void user_sends_HTTPS_Request_to_delete_Batch_by_batchId() throws FileNotFoundException {
		
		response=batchRequest.deleteBatch_Request();
	}

	@Then("User receives {int} Status ok with response to delete batch by Id")
	public void user_receives_Status_ok_with_response_to_delete_batch_by_Id(Integer int1) {
	   
		response.then().spec(responseSpecification200());
	}

}
