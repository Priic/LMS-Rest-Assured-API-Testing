package api.Request;

import api.Utilities.*;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import java.io.FileNotFoundException;
import api.Pojo.*;

public class programRequest extends restUtils {

	// Program Post request
	public static Response postRequest(programPayload payload) throws FileNotFoundException {

		System.out.println("Here in payload");
		request = given().spec(requestSpecification()).body(payload);
		response = request.post(path.getString("Program_Post_URL"));
		System.out.println("Here in after payload");
		return response;
	}

	// Program Put request by ID
	public static Response putRequest_ById(programPayload payload) throws FileNotFoundException {

		System.out.println("update by id");
		request = given().spec(requestSpecification()).body(payload);
		response = request.put(path.getString("Program_PutbyID_URL") + programPayload.getProgramId());
		return response;
	}

	// Program Put request by Name
	public static Response putRequest_ByName(programPayload payload) throws FileNotFoundException {

		System.out.println("update by Name");
		request = given().spec(requestSpecification()).body(payload);
		response = request.put(path.getString("Program_PutbyName_URL") + programPayload.getProgramName());
		return response;
	}

	// Program Get Request all program
	public static Response GetAllProgramRequest() throws FileNotFoundException {
		request = given().spec(requestSpecification());
		response = request.get(path.getString("Program_GetAll_URL"));
		return response;
	}

	// Program Get Request by ID
	public static Response programGetRequest_ById() throws FileNotFoundException {
		request = given().spec(requestSpecification());
		response = request.get(path.getString("Program_GetbyID_URL") + programPayload.getProgramId());
		return response;
	}
//delete program by ID
	public static Response programDeleteRequest_ByID() throws FileNotFoundException {

		request = given().spec(requestSpecification());
		response = request.when().delete(path.getString("Program_DeletebyID_URL") + programPayload.getProgramId());
		return response;
	}
	//delete program by Name
	public static Response programDeleteRequest_ByProgName() throws FileNotFoundException {

		request = given().spec(requestSpecification());
		response = request.when().delete(path.getString("Program_DeletebyName_URL") + programPayload.getProgramName());
		return response;
	}

}
