const { createClient } = require ('@supabase/supabase-js');

const supabaseUrl = "https://ykiytihhkgkndesfdzkt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlraXl0aWhoa2drbmRlc2Zkemt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyNDMyMTgsImV4cCI6MjAzMTgxOTIxOH0.Pb7nF_WFSMwucnIGBDUExPORKnRz2rzHB8_zRxZOvNA";
const supabase = createClient(supabaseUrl, supabaseKey);
supabase.from("coffee_shop")
  .select("*")
  .then((response) => {
    if (response.error) {
      console.error("Error connecting to Supabase:", response.error);
    } else {
      console.log("Connected to Supabase");
    }
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
  });
  
module.exports = supabase;