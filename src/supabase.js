
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://saigxkkdnknpibkhofnx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaWd4a2tkbmtucGlia2hvZm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwOTExNzMsImV4cCI6MTk5OTY2NzE3M30.B2HaCcf_WzZ1sXsYk4ss1IPnNbiYRiU38YQrrP_AjSU";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;