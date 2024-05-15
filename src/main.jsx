import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FormConcepts from '../Form/FormConcepts'
// import { ReduxConcepts } from '../Redux/ReduxConcepts'
// import { PracticeConcepts } from '../practiceComponents/PracticeConcepts'
// import App from './App.jsx'
// import store from '../ReactRedux/Store'
// import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* {<PracticeConcepts />} */}
    {/* <ReduxConcepts /> */}
    <FormConcepts />
  </React.StrictMode>,
)
