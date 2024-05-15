import { BmiCal } from "./BmiCal";

// import { FormValidation } from "./FormValidation"
import { Provider } from "react-redux"
import store from "./Store/Store"
function FormConcepts(){
    return(
        <Provider store={store}>
        <BmiCal />
        </Provider>
    )

}

export default FormConcepts