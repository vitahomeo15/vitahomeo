import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mtjnsrxgfslywvlcljdz.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Safe server-side diagnostics check to warn if required env variables are missing
if (typeof window === "undefined") {
  const isUrlConfigured = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  const isAnonKeyConfigured = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!isUrlConfigured || !isAnonKeyConfigured) {
    console.error("[Supabase Client] Diagnostic Warning - Missing configuration:", {
      NEXT_PUBLIC_SUPABASE_URL: isUrlConfigured ? "configured" : "MISSING",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: isAnonKeyConfigured ? "configured" : "MISSING",
      message: "Please configure these environment variables in your deployment settings."
    });
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

