# Google Apps Script Setup Instructions

This document provides the Google Apps Script code and step-by-step instructions to route submissions from your native forms directly into your Google Sheet.

---

## Part 1 — Google Apps Script Code

Open your Google Spreadsheet, click on **Extensions** > **Apps Script**, delete any default code, and paste the following script:

```javascript
/**
 * Google Apps Script Web App Endpoint for SociVeda
 * Handles CORS Preflight Options and routes form submissions to separate tabs.
 */

function doPost(e) {
  try {
    // 1. Parse incoming post contents (supports JSON and urlencoded formats)
    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    // Temporary Logger.log to check Execution logs in Apps Script
    Logger.log("Incoming Payload: " + JSON.stringify(data));

    // 2. Extract routing details
    var formType = data.formType;
    if (!formType) {
      return createJsonResponse({
        status: "error",
        message: "Missing 'formType' field in request data"
      }, 400);
    }

    // 3. Open the spreadsheet directly by ID to work standalone or bound
    // 3. Get target spreadsheet (uses bound sheet automatically, fallback to ID if standalone)
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!sheet) {
      sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID_HERE");
    }
    if (!sheet) {
      return createJsonResponse({
        status: "error",
        message: "Target Spreadsheet not found."
      }, 500);
    }
    
    var targetSheet;

    if (formType === "doctor") {
      // Route to 'Doctor_Applications' sheet tab
      targetSheet = sheet.getSheetByName("Doctor_Applications");
      if (!targetSheet) {
        targetSheet = sheet.insertSheet("Doctor_Applications");
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone", 
          "Email", 
          "Homeopathic Qualification", 
          "Years of Experience", 
          "Registration Number", 
          "Preferred Consultation Hours",
          "Preferred Consultation Days",
          "Consultation Fees",
          "Doctor Image (Base64)"
        ]);
        // Style headers
        targetSheet.getRange("A1:K1").setFontWeight("bold").setBackground("#3FA535").setFontColor("white");
      }

      // Append row matching the PascalCase payload
      targetSheet.appendRow([
        new Date(),
        data.FullName || "",
        data.Phone || "",
        data.Email || "",
        data.Qualification || "",
        data.Experience || "",
        data.RegistrationNumber || "",
        data.PreferredHours || "",
        data.PreferredDays || "",
        data.ConsultationFees || "",
        data.DoctorImage || ""
      ]);

    } else if (formType === "patient") {
      // Route to 'Patient_Bookings' sheet tab
      targetSheet = sheet.getSheetByName("Patient_Bookings");
      if (!targetSheet) {
        targetSheet = sheet.insertSheet("Patient_Bookings");
        targetSheet.appendRow([
          "Timestamp", 
          "Full Name", 
          "Phone", 
          "Email", 
          "Preferred Doctor", 
          "Preferred Date", 
          "Symptoms / Reason for Consultation"
        ]);
        // Style headers
        targetSheet.getRange("A1:G1").setFontWeight("bold").setBackground("#0EA98B").setFontColor("white");
      }

      // Append row matching the PascalCase payload
      targetSheet.appendRow([
        new Date(),
        data.FullName || "",
        data.Phone || "",
        data.Email || "",
        data.PreferredDoctor || "Any Doctor / Specialist",
        data.PreferredDate || "",
        data.ReasonforConsultation || ""
      ]);

    } else {
      return createJsonResponse({
        status: "error",
        message: "Invalid formType value: '" + formType + "'"
      }, 400);
    }

    // 4. Return success response
    return createJsonResponse({
      status: "success",
      message: "Submission recorded successfully in sheet tab: " + targetSheet.getName()
    }, 200);

  } catch (error) {
    return createJsonResponse({
      status: "error",
      message: error.toString()
    }, 500);
  }
}

/**
 * Handle CORS Preflight OPTIONS requests sent by browsers
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

/**
 * Helper to build CORS-enabled JSON output response
 */
function createJsonResponse(responseObject, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(responseObject))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
  return output;
}
```

---

## Part 2 — Key Alignment Comparison (Dev Reference)

To ensure there are no casing mismatches, here is the exact side-by-side mapping of the keys sent from the browser and the keys parsed in the `doPost` script:

| Form Type | Frontend Sent Payload Key | Apps Script parsed Key | Sheet Column Header |
| :--- | :--- | :--- | :--- |
| **Both** | `formType` | `data.formType` | *Used for routing tab only* |
| **Doctor** | `FullName` | `data.FullName` | `"Full Name"` |
| **Doctor** | `Phone` | `data.Phone` | `"Phone"` |
| **Doctor** | `Email` | `data.Email` | `"Email"` |
| **Doctor** | `Qualification` | `data.Qualification` | `"Homeopathic Qualification"` |
| **Doctor** | `Experience` | `data.Experience` | `"Years of Experience"` |
| **Doctor** | `RegistrationNumber` | `data.RegistrationNumber` | `"Registration Number"` |
| **Doctor** | `PreferredHours` | `data.PreferredHours` | `"Preferred Consultation Hours"` |
| **Doctor** | `PreferredDays` | `data.PreferredDays` | `"Preferred Consultation Days"` |
| **Doctor** | `ConsultationFees` | `data.ConsultationFees` | `"Consultation Fees"` |
| **Doctor** | `DoctorImage` | `data.DoctorImage` | `"Doctor Image (Base64)"` |
| **Patient** | `FullName` | `data.FullName` | `"Full Name"` |
| **Patient** | `Phone` | `data.Phone` | `"Phone"` |
| **Patient** | `Email` | `data.Email` | `"Email"` |
| **Patient** | `PreferredDoctor` | `data.PreferredDoctor` | `"Preferred Doctor"` |
| **Patient** | `PreferredDate` | `data.PreferredDate` | `"Preferred Date"` |
| **Patient** | `ReasonforConsultation` | `data.ReasonforConsultation`| `"Symptoms / Reason for Consultation"` |

---

## Part 3 — How to Redeploy and Test

To push this fix live without changing your Web App URL, do this in your Apps Script window:
1. In your Apps Script editor, click the **Deploy** button in the top-right corner and select **Manage deployments**.
2. Select your active Web App deployment in the left pane, and click the **Edit (pencil icon)** at the top.
3. In the **Version** dropdown, click and select **New version**.
4. Keep the other settings identical:
   - **Execute as:** `Me` (your Google Account)
   - **Who has access:** `Anyone`
5. Click **Deploy**.
6. If prompted, authorize access permissions for your Google account.
7. Perform a test submission on your site. If the data still doesn't appear:
   * In your Google Apps Script editor, click on **Executions** in the left menu bar. You will see a list of runs. Click on the latest execution to view the logs and confirm what payload was received by `Logger.log()`.
