package api.Request;

import api.Utilities.restUtils;
import api.Pojo.*;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

import java.io.FileNotFoundException;

public class batchRequest extends restUtils {

	// Post request

	public static Response postBatch_Request(batchPayload payload) throws FileNotFoundException {

		request = given().spec(requestSpecification()).body(payload);
		response = request.when().post(path.getString("Batch_Post_URL"));

		return response;
	}
	//Put/update request
	public static Response putBatchById_Request(batchPayload payload) throws FileNotFoundException {

		request = given().spec(requestSpecification()).body(payload);
		response = request.when().put(path.getString("Batch_UpdateByBatchID")+batchPayload.getBatchId());

		return response;
	}
	
	
	// Get All batch request

	public static Response getAllBatch_Request() throws FileNotFoundException {

		request = given().spec(requestSpecification());
		response = request.when().get(path.getString("Batch_GetAll_URL"));

		return response;
	}

	// Get batch by Id request

	public static Response getBatchByID_Request() throws FileNotFoundException {

		request = given().spec(requestSpecification());
		response = request.when().get(path.getString("Batch_GetbyId_URL") + batchPayload.getBatchId());

		return response;
	}
	
	// Get batch by Name request

		public static Response getBatchByName_Request() throws FileNotFoundException {

			request = given().spec(requestSpecification());
			response = request.when().get(path.getString("Batch_GetbyName_URL") + batchPayload.getBatchName());

			return response;
		}
		
		// Get batch by program Id request

		public static Response getBatchByProgId_Request() throws FileNotFoundException {

			request = given().spec(requestSpecification());
			response = request.when().get(path.getString("Batch_GetBatchByProgramID") + batchPayload.getProgramId());

			return response;
		}

	// Delete request

	public static Response deleteBatch_Request() throws FileNotFoundException {

		request = given().spec(requestSpecification());
		response = request.when().delete(path.getString("Batch_Delete_URL")+batchPayload.getBatchId());

		return response;
	}

}
