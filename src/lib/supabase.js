
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = 'https://hnsjbyklapoznivjkriv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
// @ts-ignore
const supabase = createClient(supabaseUrl, supabaseKey)