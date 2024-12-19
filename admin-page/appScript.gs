Paste this one on App Scripts on Google Sheets

function doPost(e) {
  try {
    // Get the data from the form submission
    var formData = e.parameter;
    
    // Open the Google Sheet
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1WLX_co0cAVqZ2p64mSYvTvLLaaNAgLecJ-FNLXP8YB0/edit?usp=sharing");
    Logger.log("Spreadsheet: " + ss.getName()); // Log spreadsheet name
    
    var sheet = ss.getSheetByName("Sheet1");
    Logger.log("Sheet: " + sheet.getName()); // Log sheet name
    
    // Check if sheet exists
    if (!sheet) {
      throw new Error("Sheet 'DataEntry' not found");
    }
    
    // Append the data to the sheet
    sheet.appendRow([formData[''], formData['Applicant-Name'], formData['Gender'], formData['Age'], formData['Blood-Group'], formData['Applicant-GovtId'], formData['Phone-No'], formData['Address']]);
    
    // Return a success message
    return ContentService.createTextOutput("Data added successfully");
  } catch (error) {
    // Log any errors
    console.error(error);
    // Return an error message
    return ContentService.createTextOutput("Error: " + error.message);
  }
}
