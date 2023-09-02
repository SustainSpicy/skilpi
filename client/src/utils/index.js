export function validatePhoneNumber(phoneNumber) {
  // Define a regular expression pattern for a valid phone number with country code
  var pattern = /^\+\d{1,3}\d{1,14}$/;

  // Use the test() method of the regular expression to check if the phone number matches the pattern
  return pattern.test(phoneNumber);
}
