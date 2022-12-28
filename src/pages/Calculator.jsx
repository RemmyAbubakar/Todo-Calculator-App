import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          className="flex-[1_1_33.333%] bg-neutral-900 max-w-[33.333%] appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          key={i}
        >
          {i}
        </button>
      );
    }

    return digits;
  };

  return (
    <div className="App p-[16px] flex h-[100vh] justify-center items-center border border-blue-700">
      <div className="calculator w-[100%] max-w-[400px] bg-white rounded-[16px] overflow-hidden shadow-xl">
        <div className="display p-[16px] text-right bg-neutral-900 text-white text-[24px] font-[300]">
          {result ? (
            <span className="text-[14px] text-gray-500">({result})</span>
          ) : (
            ""
          )}
          &nbsp;
          {calc || "0"}
        </div>

        <div className="operators flex">
          <button
            onClick={() => updateCalc("/")}
            className="flex-1 font-bold  bg-red-600 appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            /
          </button>
          <button
            onClick={() => updateCalc("*")}
            className="flex-1 font-bold bg-red-600  appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            *
          </button>
          <button
            onClick={() => updateCalc("+")}
            className="flex-1 font-bold bg-red-600  appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            +
          </button>
          <button
            onClick={() => updateCalc("-")}
            className="flex-1 font-bold bg-red-600 appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            -
          </button>
          <button
            onClick={deleteLast}
            className="flex-1 font-bold bg-red-600  appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            DEL
          </button>
        </div>

        <div className="digits flex flex-wrap">
          {createDigits()}
          <button
            onClick={() => updateCalc("0")}
            className="flex-[1_1_33.333%] bg-neutral-900 max-w-[33.333%] appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            0
          </button>
          <button
            onClick={() => updateCalc(".")}
            className="flex-[1_1_33.333%] bg-neutral-900 max-w-[33.333%] appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            .
          </button>
          <button
            onClick={calculate}
            className="flex-[1_1_33.333%] bg-neutral-900 max-w-[33.333%] appearance-none	border-none outline-none text-white text-[20px] p-[16px] cursor-pointer transition-[0.4s] hover:opacity-[0.9]"
          >
            =
          </button>
        </div>
      </div>
      <Link to="/todo">
        <div className="ml-10 flex justify-center items-center h-10 w-32 bg-black text-white rounded-lg">
          <button>TODO APP</button>
          <HiArrowRight className="ml-2" />
        </div>
      </Link>
    </div>
  );
}

export default Calculator;
