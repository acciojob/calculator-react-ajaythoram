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
    <div id="container">
      <div id="input">
        <input type="text" value={str} onChange={handleInputChange} />
      </div>
      <div id="button">
        <button onClick={()=> handleCbutton()}>C</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={()=> handelButtonCal()}>=</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
      </div>
    </div>
  );
};

export default Cal;
