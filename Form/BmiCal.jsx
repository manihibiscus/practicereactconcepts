// import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { calculateBmi ,setHeight, setWeight} from "./Store/Slice"
export const BmiCal = () => {
    const bmi = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="text-center">

        <p className="text-2xl text-center font-bold">BMI Calculator</p>
        <p className="text-red-600 ">{bmi.errorMess}</p>
        <div>
            <label htmlFor="height">Height in cm </label>
            <input type="text" value={bmi.height} onChange={(e)=>dispatch(setHeight(e.target.value))} className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mt-2">
            <label  htmlFor="height">Weight in Kg </label>
            <input type="text" value={bmi.weight} onChange={(e)=>dispatch(setWeight(e.target.value))} className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
            <button onClick={() => dispatch(calculateBmi())} className="p-2 border-1 border-gray-600 bg-gray-300 rounded-md">Calculate</button>
        </div>
        <div>
            {bmi.bmi}
            {bmi.bmiStatus}
        </div>
    </div>
  )
}


// import { useReducer } from "react";

// const initialState = {
//   height: "",
//   weight: "",
//   bmi: null,
//   bmiStatus: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_HEIGHT":
//       return { ...state, height: action.payload };
//     case "SET_WEIGHT":
//       return { ...state, weight: action.payload };
//     case "CALCULATE_BMI":
//       if (state.height && state.weight) {
//         const heightToMeter = state.height / 100;
//         const bmiValue = state.weight / (heightToMeter * heightToMeter);
//         const bmiStatus = bmiValue > 10 ? "OKOK" : "Not OK";
//         return { ...state, bmi: bmiValue.toFixed(2), bmiStatus: bmiStatus };
//       } else {
//         return state;
//       }
//     default:
//       return state;
//   }
// };

// export const BmiCal = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
//   };

//   const calculateBmi = () => {
//     dispatch({ type: "CALCULATE_BMI" });
//   };

//   return (
//     <div className="text-center">
//       <p className="text-2xl text-center font-bold">BMI Calculator</p>
//       <div>
//         <label htmlFor="height">Height in cm </label>
//         <input
//           type="text"
//           name="height"
//           value={state.height}
//           onChange={handleChange}
//           className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="mt-2">
//         <label htmlFor="weight">Weight in Kg </label>
//         <input
//           type="text"
//           name="weight"
//           value={state.weight}
//           onChange={handleChange}
//           className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div>
//         <button
//           onClick={calculateBmi}
//           className="p-2 border-1 border-gray-600 bg-gray-300 rounded-md"
//         >
//           Calculate
//         </button>
//       </div>
//       <div>
//         {state.bmi}
//         {state.bmiStatus}
//       </div>
//     </div>
//   );
// };