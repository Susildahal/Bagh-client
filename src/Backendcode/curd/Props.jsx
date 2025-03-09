import React, { useState } from "react";

const Props = () => {
  // State for the two numbers and result
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);

  // Function to add the two numbers
  const add = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(sum);
  };

  return (
    <div>
      <form>
        {/* Input for First Number */}
        <input
          type="number"
          className="h-10 border-black ml-5 border-2 mt-3"
          placeholder="First Number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <br />

        {/* Input for Second Number */}
        <input
          type="number"
          className="h-10 border-black ml-5 border-2 mt-3"
          placeholder="Second Number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <br />

        {/* Button to Add Numbers */}
        <div
          className="h-10 border-black ml-5 border-2 mt-3 w-20 flex items-center justify-center cursor-pointer"
          onClick={add}
        >
          Add
        </div>
      </form>

      {/* Displaying Result */}
      <div className="ml-5 mt-3">
        The result is: {result !== null ? result : "N/A"}
      </div>
    </div>
  );
};

export default Props;
