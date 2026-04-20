import { createClient } from '@supabase/supabase-js';

// 注意：在实际部署时，这些值应该从环境变量中获取
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
