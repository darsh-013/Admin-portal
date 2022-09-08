import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "./Navbar";
import Registration from "./components/Registration/Registration";
import Login from "./components/SignIn/Login";
import Dashboard from "./Dashboard/Dashboard";
import './App.css';


function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/signup"
                       element={<Registration/>}
                />
                <Route path="/signin"
                       element={<Login/>}
                />
                <Route path="/dashboard"
                       element={<Dashboard/>}
                />
                <Route exact path='/dashboard/:index' element={< Dashboard />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
