import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1 my-5 text-center">
          <div className="ft1 my-5">

            <div className="icon">
              <h3 style={{ color: "white" }}>
                <AiFillLinkedin />
              </h3>
              <h3 style={{ color: "white" }}>
                <AiFillFacebook />
              </h3>
              <h3 style={{ color: "white" }}>
                <AiOutlineInstagram />
              </h3>
              <h3 style={{ color: "White" }}>
                <AiOutlineTwitter />
              </h3>
            </div>
          </div>
          <div className="footertext ">
            <h3>Menu</h3>
            <p>Home</p>
            <p>About US</p>
            <p>Success Stories</p>
            <p>Blog</p>
            <p>Guides</p>
            <p>Contact Us</p>
          </div>
          <div className="footertext">
            <h3>Solutions</h3>
            <p>Monetize With Google Adx</p>
            <p>Mobile App Monetization</p>
            <p>User Growth</p>
            <p>Ad Revenue optimization</p>
            <p>Manged ASO</p>
          </div>
          <div className="footertext">
            <h3>Contacts</h3>
            <p>Publisher@gmail.com</p>
            <p>26985 Brighton Lane,
              Lake Forest, CA 92630</p>
          </div>
        </div>
        <div style={{backgroundColor:"#F1F1F1"}} className="text-center footer-bar">
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
    </>
  );
}
