const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const TABLET_DEVICES_RES = 997;
export const GOOGLE_OAUTH2_URL = `https://accounts.google.com/o/oauth2/v2/auth?
access_type=online&
scope=openid profile email&
include_granted_scopes=true&
response_type=code&
redirect_uri=${REDIRECT_URI}&
client_id=${CLIENT_ID}&
prompt=consent`;

export const TEST_URI =
  "https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:8080/api/v1/auth/login/oauth2/code/google&prompt=consent&response_type=code&client_id=100732516280-3uqf9q6kfjcd22688age9gf2l8ju43hg.apps.googleusercontent.com&scope=openid%20profile%20email";
