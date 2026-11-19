// =====================================================================
//  Settings for your English practice website.
//  Fill in the two Supabase values (the setup guide shows where to find
//  them). While they are empty, the website runs in DEMO mode.
// =====================================================================
window.APP_CONFIG = {
  // From Supabase: Project Settings → Data API (Project URL)
  SUPABASE_URL: '',

  // From Supabase: Project Settings → API Keys → the "publishable" key
  // (starts with sb_publishable_). An older "anon" key also works.
  // This key is safe to put on a public website.
  SUPABASE_KEY: '',

  // The name shown at the top of every page
  SITE_NAME: 'My English Practice',

  // Which English the speech recognition listens for: 'en-GB' or 'en-US'
  SPEECH_LANG: 'en-GB',

  // Used inside the system only; no emails are ever sent to it.
  // Don't change it after you have added students.
  STUDENT_EMAIL_DOMAIN: 'students.readaloud-practice.app'
};
