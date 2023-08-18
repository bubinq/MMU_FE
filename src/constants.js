const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const BASE_API = import.meta.env.VITE_BASE_API;
export const TABLET_DEVICES_RES = 997;
export const GOOGLE_OAUTH2_URL = `https://accounts.google.com/o/oauth2/v2/auth?
scope=openid profile email&
response_type=code&
redirect_uri=${REDIRECT_URI}&
client_id=${CLIENT_ID}&
prompt=consent`;

export const BASE_URL = "http://localhost:5173";
