import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mtjnsrxgfslywvlcljdz.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-key-for-build-evaluation";

// Safe server-side diagnostics check to warn if required env variables are missing
if (typeof window === "undefined") {
  const isUrlConfigured = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const isServiceKeyConfigured = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!isUrlConfigured || !isServiceKeyConfigured) {
    console.error("[Supabase Admin Client] Diagnostic Warning - Missing configuration:", {
      NEXT_PUBLIC_SUPABASE_URL: isUrlConfigured ? "configured" : "MISSING",
      SUPABASE_SERVICE_ROLE_KEY: isServiceKeyConfigured ? "configured" : "MISSING",
      message: "Please configure these environment variables in your deployment settings."
    });
  }
}

// Supabase Admin Client that bypasses RLS rules on the server side.
// MUST only be used in Server Components, Server Actions, or API Routes.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
});

