
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihcwsenbczypkdpexhsl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloY3dzZW5iY3p5cGtkcGV4aHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwOTQ0MDUsImV4cCI6MjA4NjY3MDQwNX0.zHOHJueg3UWT_apo4_w_OU6tE5zusNbPP58aAmqzNi0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
