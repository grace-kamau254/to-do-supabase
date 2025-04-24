import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL ='https://fkphmprxuzuxhvelhnhc.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcGhtcHJ4dXp1eGh2ZWxobmhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMTM4MTgsImV4cCI6MjA2MDg4OTgxOH0.Zq3GMcPBoEeSEeWQw9GT0cjj0V4ILSo9VSElb8WtZSU'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
