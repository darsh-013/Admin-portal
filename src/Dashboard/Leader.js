import React, {useEffect, useState} from 'react';
import Sidebar from '../Sidebar';
import {useParams, useNavigate} from "react-router-dom";
import UserDataService from "../components/Registration/services/service";
import "./Styles.css";

export const Leader = () => {
    let index = useParams();
    let id = index.index;
    const [item, setItem] = useState([]);
    const [lead, setLead] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        setTimeout(() => {
            getUserItem();
        });
    }, []);

    const getUserItem = () =>{
        UserDataService.getAll()
            .then(res => {
                const userItem = res.data || [];
                console.log("UserData====>", userItem);
                const data = userItem.find((item) => item._id === id) || "";
                console.log("data id:", data);
                setItem(data);
                console.log("Lead", lead);
            })
            .catch(e => {
                console.log(e);
            });
    }
    const getUser = () => {
        UserDataService.getAll()
            .then(res => {
                const userItem = res.data || [];
                console.log("UserData====>", userItem);
                const data = userItem.find((item) => item._id === id) || "";
                console.log("data id:", data);
                setItem(data);
                userItem.map((item) => {
                    if (data._id === item.leader[0]) {
                        if(lead.values()!==item)
                            lead.push(item);
                        // setLead(item);
                    }
                })
                // setLead(userData);
                console.log("Lead", lead);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const onChange = e => {
        setText(e.target.value);
    };
    // const removeData = (id) =>{
    //     setItem(item.filter((item)=>item._id!==id));
    //     UserDataService.delete(id)
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    const handleClick = () => {
        if (text === '') {
            alert('Please enter user', 'light');
        } else {
            const results = item.filter((obj) => {
                return obj.name.toLowerCase().includes(text);
            });
            setItem(results);
            setText("");
        }
    }

    return (
        <div className="dashboard">
            <div>
                <Sidebar/>
            </div>
            <div>
                <div>
                    <div key="user._id" className="user-data">
                        <h2 className="text-center">User's Detail</h2>
                        <div className="">
                            <div className="input">
                                <label htmlFor="email" className="my-3 mx-4"><strong>Name:</strong></label>
                                <label htmlFor="email" className=" my-3 mx-4">{item.name}</label>
                            </div>
                            <div className="input ">
                                <label htmlFor="email" className=" my-3 mx-4"><strong>Email:</strong></label>
                                <label htmlFor="email" className=" my-3 mx-4">{item.email}</label>
                            </div>
                            <div className="input ">
                                <label htmlFor="email" className=" my-3 mx-4"><strong>Number:</strong></label>
                                <label htmlFor="email" className=" my-3 mx-4">{item.number}</label>
                            </div>
                            <div className="input">
                                <label htmlFor="email" className=" my-3 mx-4"><strong>Position:</strong></label>
                                <label htmlFor="email" className=" my-3 mx-4">{item.position}</label>
                            </div>
                            <div className="input">
                                <label htmlFor="email" className=" my-3 mx-4"><strong>City:</strong></label>
                                <label htmlFor="email" className=" my-3 mx-4">{item.city}</label>
                            </div>
                        </div>
                        {/*<div className="d-flex">*/}
                        {/*    <label htmlFor="email" className="form-label my-3 mx-4"><strong>Hobby:</strong></label>*/}
                        {/*    <label htmlFor="email" className="form-label my-3 mx-4">{item.hobby}</label>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div>
                    <div>
                    <button
                        className="btn btn-dark mt-5"
                        style={{marginLeft:"36rem"}}
                        onClick={getUser}
                    >Employees</button>
                </div>
                    <div style={{marginLeft: "12rem", width: "100%"}}>
                        <div key="user._id">
                            <h1 className="text-center my-5">Team Employees</h1>
                            <div className="text-center my-5">
                                <input type="text"
                                       name="text"
                                       className='search mx-3 '
                                       placeholder='Search User...'
                                       value={text}
                                       onChange={onChange}
                                />
                                <input type="submit"
                                       value="Search"
                                       className="btn btn-dark search-btn"
                                       onClick={handleClick}
                                />
                                <input type="reset"
                                       value="Reset"
                                       className="btn btn-primary search-btn"
                                    // onClick={handleReset}
                                />
                            </div>

                            <table className='table user-item'>
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">City</th>
                                    {/*<th scope="col">hobby</th>*/}
                                    {/*<th scope="col">Action</th>*/}
                                </tr>
                                </thead>
                                {
                                    !lead?.length ? "There r no users for display" :
                                        lead.map((user) => {
                                            return (
                                                <tbody>
                                                <tr>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.number}</td>
                                                    <td>{user.position}</td>
                                                    <td>{user.city}</td>
                                                    {/*<td>*/}
                                                    {/*    <button className="btn btn-danger" onClick={() => {*/}
                                                    {/*        removeData(user._id)*/}
                                                    {/*    }}>remove*/}
                                                    {/*    </button>*/}
                                                    {/*</td>*/}
                                                </tr>
                                                </tbody>
                                            )
                                        })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Leader;
