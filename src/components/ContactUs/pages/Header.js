import React from 'react';
import header from "../Images/header.jpg";
import phone from "../Images/phone.PNG";
import chat from '../Images/chat.PNG';
import {useNavigate} from "react-router";
import '../Styles.css';


export const Header = () => {
    let navigate = useNavigate();
    const handleOnClick = () =>{
        navigate('/registration');
    }

    return (
        <div>
            <div className="c-header container my-5">
                <div className="contact-header">
                    <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Delight your customers with effortless customer
                        service</h1>
                    <p style={{fontSize: "1.5vw"}}>Engage in more meaningful conversations every day, across every
                        channel, with every customer</p>
                    <button className="btn p-3 my-2"
                            style={{backgroundColor: "#0B1320", color: "white"}}
                            onClick={handleOnClick}
                    >
                        <strong>START FREE TRIAL</strong></button>
                </div>
                <div>
                    <img src={header} alt="header" className="contact-img" />
                </div>
            </div>
            <div className="container">
                <div className="all-cards my-5 text-center">
                    <div className=" my-5">
                        <img src={phone} alt="phone" className=""/>
                        <h5 className="my-5">Talk to Sales</h5>
                        <p className="my-2 mx-5">Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales
                            team.</p>
                        <h6 style={{color: "#0B1320"}} className="my-5">+1 877 929 0687</h6>
                    </div>
                    <div className="my-5">
                        <img src={chat} alt="chat" className=""/>
                        <h5 className="my-5">Contact Customer Support</h5>
                        <p className="my-2 mx-5">Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.</p>
                        <button className="btn my-4" style={{color:'#0B1320'}}><strong>Contact Support</strong></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Header;
