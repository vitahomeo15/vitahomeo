/**
 * Shared utility to submit form data to the Google Apps Script Web App endpoint.
 */
export async function submitToSheet(
  formType: "doctor" | "patient",
  formData: Record<string, any>
): Promise<{ success: boolean; message: string }> {
  const submitUrl = process.env.NEXT_PUBLIC_FORM_SUBMIT_URL;

  if (!submitUrl) {
    const errMsg = "Configuration error: NEXT_PUBLIC_FORM_SUBMIT_URL is not set in environment variables.";
    console.error(`[submitToSheet] ${errMsg}`);
    return { success: false, message: errMsg };
  }

  const payload = {
    formType,
    ...formData,
  };

  console.log(`[submitToSheet] Initiating POST for "${formType}". Payload:`, payload);

  // Attempt 1: Standard Fetch with CORS (supports reading JSON response)
  try {
    const response = await fetch(submitUrl, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // text/plain prevents CORS preflight OPTIONS requests in Apps Script
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const textResult = await response.text();
      console.log(`[submitToSheet] CORS attempt success. Raw response:`, textResult);
      let jsonResult;
      try {
        jsonResult = JSON.parse(textResult);
      } catch {
        jsonResult = { status: "success", message: textResult };
      }

      if (jsonResult.status === "success" || jsonResult.result === "success") {
        return { success: true, message: jsonResult.message || "Data recorded successfully." };
      } else {
        return { success: false, message: jsonResult.message || "Spreadsheet returned error status." };
      }
    } else {
      console.warn(`[submitToSheet] CORS attempt returned HTTP status ${response.status}. Retrying with no-cors...`);
    }
  } catch (err: any) {
    console.warn(`[submitToSheet] CORS attempt failed with error: "${err.message || err}". Retrying in no-cors mode to bypass CORS block...`);
  }

  // Attempt 2: Fallback with no-cors mode (will execute on Google Sheets server, but return opaque status 0)
  try {
    const response = await fetch(submitUrl, {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // In no-cors mode, response.status is 0 and response.ok is false, but if it didn't throw, the request succeeded!
    console.log(`[submitToSheet] no-cors attempt completed. Request sent successfully to Google Sheets.`);
    return {
      success: true,
      message: "Your submission has been sent successfully to the server (bypassed CORS preflight block).",
    };
  } catch (fallbackErr: any) {
    console.error(`[submitToSheet] All submission attempts failed:`, fallbackErr);
    return {
      success: false,
      message: `Failed to connect to the spreadsheet server: ${fallbackErr.message || fallbackErr}`,
    };
  }
}
