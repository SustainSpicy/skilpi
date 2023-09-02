import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CodeInput from "../components/Inputs/CodeInput";
import { validatePhoneNumber } from "../utils";
import { authenticateUser } from "../redux/auth/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [message, setMessage] = useState("");
  const [validatePhone, setValidatePhone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber))
      return alert("Phon number must contain a country code");

    const data = await generateAndSendAccessCode(phoneNumber);

    if (!data) alert("Error occured, please try again");
    setValidatePhone(true);
    setMessage(data.msg);
  };

  async function generateAndSendAccessCode(phoneNumber) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/createNewAccessCode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber }),
        }
      );

      return await response.json();
    } catch (error) {
      // console.error("Error generating access code:", error);
      return false;
    }
  }
  async function validateAccessCode(accessCode, phoneNumber) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/validateAccessCode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessCode, phoneNumber }),
        }
      );

      return await response.json();
    } catch (error) {
      // console.error("Error validating access code:", error);
      return false;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await validateAccessCode(accessCode, phoneNumber);
      if (!data) alert("Error occured, please try again");

      if (data.valid) {
        dispatch({ type: "AUTHENTICATE_USER", payload: accessCode });
        navigate("/");
        alert(data.msg);
      }
    }
    if (phoneNumber) fetchData();
  }, [accessCode]);

  return (
    <div className="flex flex-col items-center mt-10">
      <form className="w-80" onSubmit={handleSubmit}>
        <div className="">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="+44"
          />
        </div>
        {message && <p className="text-green-600">{message}</p>}
        <button
          type="submit"
          className="px-4 py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Access Code
        </button>
      </form>
      {validatePhone && <CodeInput setAccessCode={setAccessCode} />}

      {/* <div className="mt-4">
        {accessCode && (
          <p className="text-blue-600">Your access code: {accessCode}</p>
        )}
      </div> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser()),
  };
};
export default connect(null, mapDispatchToProps)(Signin);
