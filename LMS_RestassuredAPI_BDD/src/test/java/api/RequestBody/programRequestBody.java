package api.RequestBody;

import java.io.IOException;
import org.apache.commons.lang3.RandomStringUtils;
import api.Utilities.restUtils;
import api.Pojo.*;

public class programRequestBody extends restUtils{
	
	public static programPayload programPostBody() throws IOException {
		
		programPayload.setProgramName(xlUtils.getCellData("programPostData", 1, 0)+RandomStringUtils.randomNumeric(3));
		programPayload.setProgramDescription(xlUtils.getCellData("programPostData", 1, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPostData", 1, 2));
		
		System.out.println("Im in payload body");
		return programPayload;
	}
	
	
	

}
