const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const BASE_API = import.meta.env.VITE_BASE_API;

export const GOOGLE_OAUTH2_URL = `https://accounts.google.com/o/oauth2/v2/auth?
scope=openid profile email&
response_type=code&
redirect_uri=${REDIRECT_URI}&
client_id=${CLIENT_ID}&
prompt=consent`;

export const VERIFY_VALIDATIONS = [
  "Please verify your email before posting a review!",
  "Access Denied",
  "Please verify your email before creating an appointment!",
];
export const EXPIRED_MESSAGE = `The token has expired or is invalid!`;
export const REQUEST_NEW_VERIFICATION = `This account is not yet verified, please request a new verification email.`;
export const VERRIFIED_MESSAGE = `Your account has already been verified!`;
export const ERROR_MESSAGE = `Error`;
export const EMAIL_VERIFY_SENT =
  "Your account is not yet verified. Please check your inbox or verify your email";
export const EMAIL_ALREADY_SENT = `A reset password link is already sent to your email address.`;
export const RESEND_SENT =
  "Successfully resend reset password link to your email.";
export const REQUEST_NEW_TOKEN = `You can request a new token`;
export const SUCCESSFULLY_REGISTERED = `Your account has been created successfully.
An email was sent to verify your account, please check your email`;
export const SUCCESSFULLY_RESET = `Your password has been successfully reset.`;
export const EMAIL_VERIFIED = `Your account was successfully verified.`;
export const TOKEN_EXPIRED = `Please login and request another verification email.`;
export const ERROR_VERIFICATION = `An unexpected error has ocurred, please try again.`;
export const ALREADY_VERIFIED = `You can login and use all of the websites functionalities.`;
