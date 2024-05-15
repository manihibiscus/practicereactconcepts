import { createSlice } from "@reduxjs/toolkit";

export const BmiSlice = createSlice({
  name: "bmi",
  initialState: { height: 0, weight: 0, bmi: 0, bmiStatus: "", errorMess: "" },
  reducers: {
    calculateBmi:state=>{
        const heightValidation =/^\d+$/.test(state.height);
        const weightValidation =/^\d+$/.test(state.weight);
        if(heightValidation && weightValidation){
            const heightToMeter=state.height/100;
            const bmiValue= state.weight/(heightToMeter * heightToMeter);
            state.bmi=(bmiValue.toFixed(2))
        if(bmiValue<18.5){
            state.bmiStatus="Underweight Range"
        }
        else if(bmiValue>18.5 && bmiValue<24.9){
            state.bmiStatus="Healthy Weight Range"
        }
        else if(bmiValue>25.0 && bmiValue<29.9){
            state.bmiStatus="Overweight Range"
        }
        else if(bmiValue>30.0){
            state.bmiStatus="Obese Range"
        }
        state.errorMess=""
        }

        else{
            state.errorMess="Please Enter the value"
        }
    },
    setHeight: (state, action)=>{
        state.height=action.payload
    },
    setWeight: (state, action)=>{
        state.weight=action.payload
    }
  },

});

export const {calculateBmi, setHeight, setWeight} = BmiSlice.actions

export default BmiSlice.reducer
