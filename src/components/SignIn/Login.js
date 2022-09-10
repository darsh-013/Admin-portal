import React,{useState} from 'react';
import Navbar from "../../Navbar";
import UserDataService from '../Registration/services/service';
import {useNavigate} from 'react-router-dom';
import "./Styles.css";

export const Login = () => {
    let navigate = useNavigate();
    const [items, setItems] = useState(
        {
            email: '',
            password: ''
        }
    );
    const handleSubmit = () => {
        const userItem = {
            email: items.email,
            password: items.password
        }
        UserDataService.getAll()
            .then(res => {
                const userItems = res.data;
                console.log("userItems", res.data);
                if(userItem.email==='bvm123@gmail.com'){
                    navigate(`/admin`);
                }
                else{
                    const data = userItems.find((item) => item.password === items.password)||"";
                    console.log("data password", data);
                    const id=data._id;

                    console.log("id--->", id);
                    if(data.position==="Team Leader"){
                        navigate(`/leader/${id}`);
                    }
                    else{
                        if ( items.password === data.password) {
                            alert("login successfully");
                            navigate(`/dashboard/${id}`);
                        }
                        else {
                            alert("Invalid password or email");
                        }
                    }

                }


            })
            .catch(e => {
                console.log(e);
            });
        setItems(userItem);
        // navigate("/dashboard");
    }

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
                <h1 className="my-5" style={{fontWeight:"bold"}}>Log in to your Lorem account</h1>
                <h5>Please enter your userId and Password and we'll help you out!</h5>
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

                    <button className="btn p-2 my-2"
                            type="submit"
                            style={{backgroundColor: "#0B1320", color: "white"}}
                            onClick={handleSubmit}
                    ><strong>PROCEED</strong></button>
                </form>
            </div>
            {/*<div style={{backgroundColor:"#F1F1F1"}} className="text-center footer-bar  fixed-bottom">*/}
            {/*    <div className="footer-end">*/}
            {/*        <p>Terms of Service</p>*/}
            {/*        <p>Privacy Notice</p>*/}
            {/*        <p>Takedown Policy</p>*/}
            {/*        <p>Anti-Modern Slavery Statement</p>*/}
            {/*        <p>Security</p>*/}
            {/*        <p>Unsubscribe</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p>Copyright © Freshworks Inc. All Rights Reserved</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
};

export default Login;
