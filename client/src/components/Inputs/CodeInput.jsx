import React, { useRef, useState } from "react";

const CodeInput = ({ setAccessCode }) => {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const handleInputChange = (index, target) => {
    const { id, value } = target;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (index < 3 && value) {
      const inputElement = document.getElementById(parseInt(id) + 1);
      if (inputElement) {
        inputElement.focus();
      }
    }
    const emptyCount = inputs.filter((item) => item === "").length - 1;
    if (emptyCount === 0) {
      const userCode = newInputs.join("");
      setCode(userCode);
      setLoading(true);
      setAccessCode(userCode);
    }
  };

  const handleReset = () => {
    setInputs(["", "", "", ""]);
    setLoading(false);
    setCode("");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 font-roboto">
      <form className="flex justify-center">
        {inputs.map((input, index) => (
          <input
            id={index}
            key={index}
            type="password"
            maxLength="1"
            value={input}
            onChange={(e) => handleInputChange(index, e.target)}
            className="mx-1 px-2 py-1 border border-gray-300 w-16 h-16 text-center text-3xl "
            disabled={code}
          />
        ))}
      </form>
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-blue-500 border-solid"></div>
        </div>
      )}
    </div>
  );
};

export default CodeInput;
