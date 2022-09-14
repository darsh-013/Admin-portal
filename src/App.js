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
import Leader from "./Dashboard/Leader";
import Home from "./Home/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Contact from "./components/ContactUs/Contact";
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
                <Route exact path='/dashboard/:index'
                       element={<Dashboard/>}
                />
                <Route exact path="/admin"
                       element={<Admin/>}
                />
                <Route exact path="/leader"
                       element={<Leader/>}
                />
                <Route exact path='/leader/:index'
                       element={<Leader/>}
                />
                <Route exact path='/'
                       element={<Home/>}
                />
                <Route exact path='/about'
                       element={<About/>}
                />
                <Route exact path='/product'
                       element={<Product/>}
                />
                <Route exact path='/contact'
                       element={<Contact/>}
                />
            </Routes>
        </Router>
    </>
  );
}

export default App;
