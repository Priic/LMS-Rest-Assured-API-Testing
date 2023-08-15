package api.RequestBody;

import java.io.IOException;

import org.apache.commons.lang3.RandomStringUtils;

import api.Pojo.batchPayload;
import api.Utilities.restUtils;

public class batchRequestBody extends restUtils{
	
	public static batchPayload batchPostBody() throws IOException {
		
		batchPayload.setBatchDescription(xlUtils.getCellData("batchpostdata", 1, 0));
		batchPayload.setBatchName(programPayload.getProgramName()+xlUtils.getCellData("batchpostdata", 1, 1)+RandomStringUtils.randomNumeric(3));
		batchPayload.setBatchNoOfClasses(xlUtils.getCellData("batchpostdata", 1, 2));
		batchPayload.setBatchStatus(xlUtils.getCellData("batchpostdata", 1, 3));
		batchPayload.setProgramId(programPayload.getProgramId());
		return batchPayload;
		
	}
	
public static batchPayload batchPostExstng_Body() throws IOException {
		
		batchPayload.setBatchDescription(batchPayload.getBatchDescription());
		batchPayload.setBatchName(batchPayload.getBatchName());
		batchPayload.setBatchNoOfClasses(batchPayload.getBatchNoOfClasses());
		batchPayload.setBatchStatus(batchPayload.getBatchStatus());
		batchPayload.setProgramId(batchPayload.getProgramId());
		return batchPayload;
		
	}
	
	
}
