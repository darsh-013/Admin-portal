import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "./Navbar";
import Registration from "./components/Registration/Registration";
import Login from "./components/SignIn/Login";
import Dashboard from "./Dashboard/Dashboard";
import Admin from "./Dashboard/Admin";
import './App.css';
import Leader from "./Dashboard/Leader";


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
                <Route exact path='/dashboard/:index'
                       element={< Dashboard />}
                />
                <Route path="/admin"
                       element={<Admin/>}
                />
                <Route path="/leader"
                       element={<Leader/>}
                />
                <Route exact path='/leader/:index'
                       element={< Leader />}
                />
            </Routes>
        </Router>
    </>
  );
}

export default App;
