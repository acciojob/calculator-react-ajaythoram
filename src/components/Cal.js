import React, { useState } from "react";

const Cal = () => {
  const [str, setStr] = useState("");

  const handleInputChange = (e) => {
    setStr(e.target.value);
  };

  const handleButtonClick = (value) => {
    setStr(str + value);
  };

 const handleCbutton = () =>{
    setStr("");
 }
 const handelButtonCal =() =>{
    try {
        const result = eval(str); // Use the eval() function to evaluate the expression
        setStr(result.toString()); // Update the state with the calculated result
      } catch (error) {
        // Handle any errors that may occur during evaluation
        setStr("Error");
      }
 }
  return (
    <div id="container" className="calculator">
      <div id="input">
        <input type="text" value={str} onChange={handleInputChange} />
      </div>
      <div id="button">
        <button id="btn-1" onClick={()=> handleCbutton()}>C</button>
        <button id="btn-2" onClick={() => handleButtonClick("/")}>/</button>
        <button id="btn-3" onClick={() => handleButtonClick("*")}>*</button>
        <button id="btn-4" onClick={() => handleButtonClick("-")}>-</button>
        <button id="btn-5" onClick={() => handleButtonClick("7")}>7</button>
        <button id="btn-6" onClick={() => handleButtonClick("8")}>8</button>
        <button id="btn-7" onClick={() => handleButtonClick("9")}>9</button>
        <button id="btn-8" onClick={() => handleButtonClick("+")}>+</button>
        <button id="btn-9" onClick={() => handleButtonClick("4")}>4</button>
        <button id="btn-10" onClick={() => handleButtonClick("5")}>5</button>
        <button id="btn-11" onClick={() => handleButtonClick("6")}>6</button>
        <button id="btn-12" onClick={()=> handelButtonCal()}>=</button>
        <button id="btn-13" onClick={() => handleButtonClick("1")}>1</button>
        <button id="btn-14" onClick={() => handleButtonClick("2")}>2</button>
        <button id="btn-15" onClick={() => handleButtonClick("3")}>3</button>
        <button id="btn-16" onClick={() => handleButtonClick("0")}>0</button>
        <button id="btn-17" onClick={() => handleButtonClick(".")}>.</button>
      </div>
    </div>
  );
};

export default Cal;
