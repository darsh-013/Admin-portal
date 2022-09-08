import React, {useEffect, useState} from 'react';
import Sidebar from '../Sidebar';
import { useParams, useNavigate } from "react-router-dom";
import UserDataService from "../components/Registration/services/service";
import "./Styles.css";

export const Dashboard = () => {
    let index = useParams();
    let id=index.index;
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getUser(id.index);
        }, 100);
    }, []);
    const getUser = () => {
        UserDataService.getAll()
            .then(res => {
                // debugger
                const userItem = res.data || [];
                console.log("UserData====>", userItem);
                const data = userItem.find((item) => item._id === id) || "";
                console.log("data id:", data);
                setItem(data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
       <div className="dashboard">
           <div >
               <Sidebar/>
           </div>
           <div>
               <div key="user._id" className="user-data">
                   <h2 className="text-center">User's Detail</h2>
                   <div className="d-flex">
                       <label htmlFor="email" className="form-label my-3 mx-4"><strong>Name:</strong></label>
                       <label htmlFor="email" className=" my-3 mx-4">{item.name}</label>
                   </div>
                   <div className="d-flex ">
                       <label htmlFor="email" className="form-label my-3 mx-4"><strong>Email:</strong></label>
                       <label htmlFor="email" className="form-label my-3 mx-4">{item.email}</label>
                   </div>
                   <div className="d-flex ">
                       <label htmlFor="email" className="form-label my-3 mx-4"><strong>Number:</strong></label>
                       <label htmlFor="email" className="form-label my-3 mx-4">{item.number}</label>
                   </div>
                   <div className="d-flex">
                       <label htmlFor="email" className="form-label my-3 mx-4"><strong>Position:</strong></label>
                       <label htmlFor="email" className="form-label my-3 mx-4">{item.position}</label>
                   </div>
                   <div className="d-flex">
                       <label htmlFor="email" className="form-label my-3 mx-4"><strong>City:</strong></label>
                       <label htmlFor="email" className="form-label my-3 mx-4">{item.city}</label>
                   </div>
                   {/*<div className="d-flex">*/}
                   {/*    <label htmlFor="email" className="form-label my-3 mx-4"><strong>Hobby:</strong></label>*/}
                   {/*    <label htmlFor="email" className="form-label my-3 mx-4">{item.hobby}</label>*/}
                   {/*</div>*/}
               </div>
           </div>
       </div>

    )
};

export default Dashboard;
