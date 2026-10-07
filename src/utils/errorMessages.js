export const getFriendlyErrorMessage = (err, context) => {
  const message = String(err).toUpperCase();

  console.log("ERROR RECEIVED:", err);
  console.log("MESSAGE:", message);
  console.log("CONTEXT:", context);
  console.log("MATCH:", message.includes("INVALID_LOGIN_CREDENTIALS"));

  if (message.includes("EMAIL_EXISTS") || message.includes("INVALID_EMAIL")) {
    return context === "signup"
      ? "This email is already in use. Please use another email or sign in if you already have an account."
      : "The information provided could not be accepted. Please check your details and try again.";
  }

  if (message.includes("INVALID_LOGIN_CREDENTIALS")) {
    console.log("INVALID LOGIN CREDENTIALS MATCHED");
    return "Wrong email or password!";
  }

  if (
    message.includes("INVALID_ID_TOKEN") ||
    message.includes("UNAUTHORIZED")
  ) {
    return "Your session is no longer valid, or the request is not authorized. Please refresh the page and try again.";
  }

  if (message.includes("OPERATION_NOT_ALLOWED")) {
    return "This sign-up option is currently unavailable. Please contact support or try again later.";
  }

  if (message.includes("TOO_MANY_ATTEMPTS")) {
    return "Too many attempts were made. Please wait a moment and try again.";
  }

  if (
    message.includes("NETWORK") ||
    message.includes("FAILED TO FETCH") ||
    message.includes("ERR_INTERNET_DISCONNECTED")
  ) {
    return "Failed to complete the action. Please check your internet connection and try again.";
  }

  console.log("FALLING THROUGH TO DEFAULT MESSAGE");

  return "Something went wrong. Please try again in a moment.";
};
