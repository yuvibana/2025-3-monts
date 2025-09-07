import React, { act, useReducer, useState } from "react";



// Acion Types
type Action =
    | { type: "SET_NUM1"; payload: number }
    | { type: "SET_NUM2"; payload: number }
    | { type: "SET_OPERATOR"; payload: string }
    | { type: "SET_RESULT"; payload: number };


// Define the initial state
interface State {
    num1: number;
    num2: number;
    operator: string;
    result: number | null;
}

// Initial state
const initialState: State = {
    num1: 0,
    num2: 0,
    operator: "add",
    result: null,
};

// Reducer function
const calculatorReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_NUM1":
            return { ...state, num1: action.payload };
        case "SET_NUM2":
            return { ...state, num2: action.payload };
        case "SET_OPERATOR":
            return { ...state, operator: action.payload };
        case "SET_RESULT":
            return { ...state, result: action.payload };
        default:
            return state;
    }
}


const Day2CalCalculater: React.FC = () => {

    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    // Handle calculation 
    const handleCalculate = () => {
        let result: number | null;
        switch (state.operator) {
            case "add":
                result = state.num1 + state.num2;
                break;
            case "subtract":
                result = state.num1 - state.num2;
                break;
            case "multiply":
                result = state.num1 * state.num2;
                break;
            case "divide":
                if (state.num2 === 0) {
                    alert("Cannot divide by zero");
                    result = null;
                } else {
                    result = state.num1 / state.num2
                }
                break;
            default:
                break;
        }
        dispatch({ type: "SET_RESULT", payload: result });
    }

    return (
        <div
            style={{
                maxWidth: "300px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2>Calculator</h2>

            {/* Input 1 */}
            <input
                type="number"
                value={state.num1}
                onChange={(e) => dispatch({ type: "SET_NUM1", payload: Number(e.target.value) })}
                placeholder="Enter first number"
                style={{
                    width: "90%",
                    padding: "8px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #aaa",
                }}
            />

            {/* Input 2 */}
            <input
                type="number"
                value={state.num2}
                onChange={(e) => dispatch({ type: "SET_NUM2", payload: Number(e.target.value) })}
                placeholder="Enter second number"
                style={{
                    width: "90%",
                    padding: "8px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #aaa",
                }}
            />

            {/* Operator Select */}
            <select
                value={state.operator}
                onChange={(e) => dispatch({ type: "SET_OPERATOR", payload: e.target.value })}
                style={{
                    width: "95%",
                    padding: "8px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "1px solid #aaa",
                }}
            >  <option value="add">Add (+)</option>
                <option value="subtract">Subtract (-)</option>
                <option value="multiply">Multiply (×)</option>
                <option value="divide">Divide (÷)</option>
            </select>

            {/* Calculate Button */}
            <button
                onClick={handleCalculate}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                Calculate
            </button>

            {/* Result */}
            {state.result !== null && (
                <h3 style={{ marginTop: "20px" }}>Result: {state.result}</h3>
            )}
        </div>
    );
};

export default Day2CalCalculater;