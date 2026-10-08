export const getFriendlyErrorMessage = (error, context = "general") => {
  const rawMessage =
    typeof error === "string"
      ? error
      : (error?.response?.data?.error?.message ??
        error?.response?.data?.error ??
        error?.response?.data?.message ??
        error?.message ??
        error?.code ??
        "");
  const message = String(rawMessage).toLowerCase();
  const code = String(error?.code ?? "").toLowerCase();
  const status = error?.response?.status;

  console.log(
    "Error:",
    error,
    "message:",
    message,
    "Code:",
    code,
    "Status:",
    status,
  );

  if (message.includes("email_exists")) {
    return "This email is already in use. Please use another email or sign in if you already have an account.";
  }

  if (message.includes("weak_password")) {
    return "Choose a stronger password with at least 6 characters.";
  }

  if (message.includes("invalid_email")) {
    return "Please enter a valid email address and try again.";
  }

  if (
    message.includes("invalid_login_credentials") ||
    message.includes("email_not_found") ||
    message.includes("wrong-password") ||
    message.includes("user-not-found") ||
    message.includes("invalid-credential") ||
    message.includes("invalid_password") ||
    message.includes("invalid password")
  ) {
    return context === "login"
      ? "Wrong email or password!"
      : "The email or password could not be accepted. Please check your details and try again.";
  }

  if (message.includes("user_disabled")) {
    return "This account has been disabled. Please contact an administrator.";
  }

  if (
    message.includes("api_key_invalid") ||
    message.includes("api key not valid") ||
    code === "firebase_config_missing"
  ) {
    return "Firebase Authentication is not configured correctly. Please contact support.";
  }

  if (message.includes("auth_profile_not_found")) {
    return "Your account exists, but its user profile is missing. Please contact an administrator.";
  }

  if (
    message.includes("invalid_id_token") ||
    message.includes("unauthorized") ||
    message.includes("permission_denied") ||
    status === 401 ||
    status === 403
  ) {
    return "Your session has expired or you do not have permission to access this data. Please sign in again or contact an administrator.";
  }

  if (message.includes("operation_not_allowed")) {
    return "This sign-up option is currently unavailable. Please contact support or try again later.";
  }

  if (message.includes("too_many_attempts")) {
    return "Too many attempts were made. Please wait a moment and try again.";
  }

  if (
    message.includes("network") ||
    message.includes("failed to fetch") ||
    code === "err_network"
  ) {
    return "Failed to complete the action. Please check your internet connection and try again.";
  }

  if (context === "signup") {
    return "We could not create your account right now. Please check your details and try again.";
  }

  return "Something went wrong. Please try again in a moment.";
};
