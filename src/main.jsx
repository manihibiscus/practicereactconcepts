import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PracticeConcepts } from '../practiceComponents/PracticeConcepts'
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {<PracticeConcepts />}
  </React.StrictMode>,
)
