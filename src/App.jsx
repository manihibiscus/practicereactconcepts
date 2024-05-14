import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from './components/HomePage'
import './App.css';
import { LoginPage } from './components/LoginPage';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <div >Click</div> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
