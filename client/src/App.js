import "./App.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddEditStudent from "./pages/AddEditStudent"
import { setUser } from "./redux/features/authSlice";


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user)) // keep the user loggedin even though refresh the screen
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer /> {/* Configure toastify */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addStudent" element={<AddEditStudent />} />
          <Route path="/editStudent/:id" element={<AddEditStudent />} />
        </Routes>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
