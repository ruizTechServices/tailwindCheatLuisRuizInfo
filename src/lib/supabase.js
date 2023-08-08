// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://hnsjbyklapoznivjkriv.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhuc2pieWtsYXBvem5pdmprcml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MjMwMzQsImV4cCI6MjAwNjk5OTAzNH0.ETASHtV24UDbdsaMMmT_Lfb1WrxMrJazGAd39grLD3Q";
// export const supabase = createClient(supabaseUrl, supabaseKey);


// $lib/supabase.js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
