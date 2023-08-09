const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI

export const TABLET_DEVICES_RES = 997;
export const GOOGLE_OAUTH2_URL = `https://accounts.google.com/o/oauth2/v2/auth?
scope=https://www.googleapis.com/auth/userinfo.profile&
include_granted_scopes=true&
response_type=code&
state=state_parameter_passthrough_value&
redirect_uri=http://localhost:5173&
client_id=${CLIENT_ID}`;
