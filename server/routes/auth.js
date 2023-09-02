import dotenv from "dotenv";
import express from "express";
import { generateRandomCode, validatePhoneNumber } from "../utils/index.js";
import database from "../firebase/index.js";

import { Vonage } from "@vonage/server-sdk";

const router = express.Router();
dotenv.config();

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

async function sendSMS(phoneNumber, code) {
  const from = "Vonage APIs";
  const to = phoneNumber;
  const text = "Your verification code is " + code;

  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      //   console.log(resp);
      return true;
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
      return false;
    });
}

router
  .post("/createNewAccessCode", (req, res) => {
    const { phoneNumber } = req.body;

    if (validatePhoneNumber(phoneNumber)) {
      const newCode = generateRandomCode();

      // Set the new access code for the phone number in the database
      database
        .ref("phoneNumbers/" + phoneNumber)
        .set(newCode)
        .then(function () {
          console.log("New phone number added with code:", newCode);
          // Code to send the new access code to the phone number
          // sendSMS(phoneNumber, newCode);
          return res
            .status(201)
            .json({ msg: "Access code generated and sent to " + phoneNumber });
        })
        .catch(function (error) {
          console.log("Failed to add new phone number:", error);
          res.status(500).json({ msg: "An error occured" });
        });
    }
  })

  .post("/validateAccessCode", (req, res) => {
    const { accessCode, phoneNumber } = req.body;

    database
      .ref("phoneNumbers/" + phoneNumber)
      .once("value")
      .then(function (snapshot) {
        const existingNumber = snapshot;

        if (!existingNumber)
          return res.status(400).json({ valid: true, msg: "Invalid request" });

        if (existingNumber.val().toString() !== accessCode)
          return res
            .status(400)
            .json({ valid: false, msg: "Access code is invalid" });

        // finally
        res.status(200).json({ valid: true, msg: "Access code is valid" });
      });
  });

export default router;
