import React,{useState} from 'react';
import Navbar from "../../Navbar";
import "./Styles.css";

export const Login = () => {
    const [items, setItems] = useState(
        {
            email: '',
            password: ''
        }
    );
    const handleChange = (e) => {
        const {name, value} = e.target;
        setItems({...items, [name]: value})
    }
    return (
        <div className="my-5 text-center container">
            <div>
                <Navbar/>
            </div>
            <div className="my-5 login" >
                <h1 className="my-5" style={{fontWeight:"bold"}}>Log in to your Freshdesk account</h1>
                <h5>Please enter your Freshdesk domain name and we'll help you out!</h5>
                <form className="form">
                    <div className="mb-3 mx-3 my-3" key="users">
                        <label htmlFor="email" className="form-label"><strong>Email</strong>
                            <input type="text"
                                   name="email"
                                   value={items.email}
                                   onChange={(e) => { handleChange(e) }}
                                   className="form-control"
                            />
                        </label>
                    </div>

                    <div className="mb-3 mx-3" key="users">
                        <label htmlFor="exampleInputPassword1" className="form-label"><strong>Password</strong>
                            <input type="password"
                                   className="form-control"
                                   name="password"
                                   value={items.password}
                                   id="exampleInputPassword1"
                                   onChange={(e)=>handleChange(e)}
                            />
                        </label>
                    </div>

                    <button className="btn p-2 my-2" type="submit" style={{backgroundColor: "#5D35D7", color: "white"}}><strong>PROCEED</strong></button>
                </form>
            </div>
            <div style={{backgroundColor:"#F1F1F1"}} className="text-center footer-bar  fixed-bottom">
                <div className="footer-end">
                    <p>Terms of Service</p>
                    <p>Privacy Notice</p>
                    <p>Takedown Policy</p>
                    <p>Anti-Modern Slavery Statement</p>
                    <p>Security</p>
                    <p>Unsubscribe</p>
                </div>
                <div>
                    <p>Copyright © Freshworks Inc. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
};

export default Login;
