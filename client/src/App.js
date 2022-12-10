import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer /> {/* Configure toastify */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
