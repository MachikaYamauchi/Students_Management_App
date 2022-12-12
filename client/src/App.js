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
import SingleStudent from "./pages/SingleStudent";
import { setUser } from "./redux/features/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user)) // keep the user loggedin even though refresh the screen
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Route path="/addStudent" element={<PrivateRoute><AddEditStudent /></PrivateRoute>} />
          <Route path="/editStudent/:id" element={<PrivateRoute><AddEditStudent /></PrivateRoute>} />
          <Route path="/student/:id" element={<SingleStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
