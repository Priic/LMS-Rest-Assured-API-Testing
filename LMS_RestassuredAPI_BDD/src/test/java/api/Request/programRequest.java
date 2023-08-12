package api.Request;

import api.Utilities.*;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import java.io.FileNotFoundException;
import api.Pojo.*;



public class programRequest extends restUtils {
	
	//Program Post request
	
	public static Response postRequest(programPayload payload) throws FileNotFoundException {
		
		System.out.println("Here in payload");
		request=given().spec(requestSpecification()).body(payload);
		response=request.post(path.getString("Program_Post_URL"));
		System.out.println("Here in after payload");
		return response;
		
	}
	
	public static Response programDeleteRequest_ByID() throws FileNotFoundException {
		
		request=given().spec(requestSpecification());
		response=request.when().delete(path.getString("Program_DeletebyID_URL")+programId);
		return response;
	}

	

}
