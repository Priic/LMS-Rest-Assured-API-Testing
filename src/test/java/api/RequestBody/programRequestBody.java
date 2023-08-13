package api.RequestBody;

import java.io.IOException;
import org.apache.commons.lang3.RandomStringUtils;
import api.Utilities.restUtils;
import api.Pojo.*;

public class programRequestBody extends restUtils {

	public static programPayload programPostBody() throws IOException {

		programPayload
				.setProgramName(xlUtils.getCellData("programPostData", 1, 0) + RandomStringUtils.randomNumeric(3));
		programPayload.setProgramDescription(xlUtils.getCellData("programPostData", 1, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPostData", 1, 2));

		System.out.println("new program");
		return programPayload;
	}

	public static programPayload programPostExistingBody() throws IOException {

		programPayload.setProgramName(programPayload.getProgramName());
		programPayload.setProgramDescription(programPayload.getProgramDescription());
		programPayload.setProgramStatus(programPayload.getProgramStatus());

		System.out.println("existing program");
		return programPayload;
	}

	public static programPayload programPost_MissngAllMandatoryBody() throws IOException {

		programPayload.setProgramName(xlUtils.getCellData("programPostdata", 4, 0));
		programPayload.setProgramDescription(xlUtils.getCellData("programPostdata", 4, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPostdata", 4, 2));

		System.out.println("missing all mandatory fields program");
		return programPayload;
	}
	
	public static programPayload programPost_MissngFewMandatoryBody() throws IOException {

		programPayload.setProgramName(xlUtils.getCellData("programPostdata", 3, 0));
		programPayload.setProgramDescription(xlUtils.getCellData("programPostdata", 3, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPostdata", 3, 2));

		System.out.println("missing few  mandatory fields program");
		return programPayload;
	}
	public static programPayload programPost_PrgNameAllNumeric_Body() throws IOException {

		programPayload.setProgramName(xlUtils.getCellData("programPostdata", 5, 0));
		programPayload.setProgramDescription(xlUtils.getCellData("programPostdata", 5, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPostdata", 5, 2));

		System.out.println("missing few  mandatory fields program");
		return programPayload;
	}

	public static programPayload programPutByNameBody() throws IOException {

		programPayload.setProgramName(programPayload.getProgramName());
		programPayload.setProgramDescription(xlUtils.getCellData("programPutData", 1, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPutData", 1, 2));
		return programPayload;
	}

	public static programPayload programPutByIDBody() throws IOException {

		programPayload.setProgramName(programPayload.getProgramName());
		programPayload.setProgramDescription(xlUtils.getCellData("programPutData", 2, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPutData", 2, 2));
		programPayload.setProgramId(programPayload.getProgramId());
		return programPayload;

	}
	
	public static programPayload programPutByID_MissngBody() throws IOException {

		programPayload.setProgramName(programPayload.getProgramName());
		programPayload.setProgramDescription(xlUtils.getCellData("programPutData", 3, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPutData", 3, 2));
		programPayload.setProgramId(programPayload.getProgramId());
		return programPayload;

	}
	
	public static programPayload programPutByName_MissngBody() throws IOException {

		programPayload.setProgramName(programPayload.getProgramName());
		programPayload.setProgramDescription(xlUtils.getCellData("programPutData", 4, 1));
		programPayload.setProgramStatus(xlUtils.getCellData("programPutData", 4, 2));
		programPayload.setProgramId(programPayload.getProgramId());
		return programPayload;

	}

}
