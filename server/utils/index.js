import database from "../firebase/index.js";

export function generateRandomCode() {
  return Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit random number
}

export function checkAndUpdatePhoneNumber(phoneNumber) {
  //   console.log("database", database);
  database
    .ref("phoneNumbers/" + phoneNumber)
    .once("value")
    .then(function (snapshot) {
      const existingNumber = snapshot.val();

      // If the phone number doesn't exist in the database
      if (existingNumber === null) {
        const newCode = generateRandomCode();

        // Set the new access code for the phone number in the database
        database
          .ref("phoneNumbers/" + phoneNumber)
          .set(newCode)
          .then(function () {
            console.log("New phone number added with code:", newCode);
            // Code to send the new access code to the phone number
          })
          .catch(function (error) {
            console.log("Failed to add new phone number:", error);
          });
      }
      // If the phone number already exists in the database
      else {
        console.log("Phone number already exists with code:", existingCode);
        // Code to send the existing access code to the phone number
      }
    })
    .catch(function (error) {
      console.log("Error checking phone number:", error);
    });
}

export function validatePhoneNumber(phoneNumber) {
  // Define a regular expression pattern for a valid phone number with country code
  var pattern = /^\+\d{1,3}\d{1,14}$/;

  // Use the test() method of the regular expression to check if the phone number matches the pattern
  return pattern.test(phoneNumber);
}
