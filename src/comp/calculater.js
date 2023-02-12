import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleResult = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const handleResult1 = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const handleResult2 = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const handleResult3 = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div className='row p-5 m-3 justify-content-center'>
        <div className="col-lg-6  border border-3 border-success p-5">
            <div class="row justify-content-center align-items-center g-2">
                <div class="col-lg-6 g-2">
                    <input className="form-control border border-3 border-success" type="text" value={num1} onChange={handleNum1Change} />
                </div>
                <div class="col-lg-6 g-2">
                    <input className="form-control border border-3 border-success" type="text" value={num2} onChange={handleNum2Change} />
                </div>
            </div>
            <div className="col-lg-12 mt-5">
            <div class="row justify-content-center align-items-center g-2">
                <div className="col-lg-3 text-center">
                    <button className="btn btn-lg btn-success" onClick={handleResult} style={{ width: '5rem'}}>+</button>
                </div>
                <div className="col-lg-3 text-center">
                    <button className="btn btn-lg btn-success" onClick={handleResult1} style={{ width: '5rem'}}>-</button>
                </div>
                <div className="col-lg-3 text-center">
                    <button className="btn btn-lg btn-success" onClick={handleResult2} style={{ width: '5rem'}}>*</button>
                </div>
                <div className="col-lg-3 text-center">
                    <button className="btn btn-lg btn-success" onClick={handleResult3} style={{ width: '5rem'}}>/</button>
                </div>
                <input className="form-control border border-3 border-success mt-3" type="text" value={result} readOnly />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Calculator;
