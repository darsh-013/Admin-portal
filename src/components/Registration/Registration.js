import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import UserDataService from "./services/service.js";
import {Link} from 'react-router-dom';
import './Styles.css';

export const Registration = (props) => {

    let navigate = useNavigate();
    let id = useParams();
    const [error, setValidation] = useState({})

    const [users, setUsers] = useState(
        {
            // id: Math.floor(Math.random() * 100),
            name: "",
            email: "",
            password: "",
            number: "",
            position: "",
            // hobby: [],
            city: ""
            // image: null
        }
    );

    const onHandleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === "image") {
            setUsers({...users, [name]: files})
        }

        if (name === "hobby") {
            let value = users.hobby || [];
            if (e.target.checked) {
                value.push(e.target.value);
            } else {
                value = users.hobby.filter((item) => item !== e.target.value);
            }
            setUsers((preState) => ({
                ...preState,
                hobby: value,
            }));
        } else {
            setUsers({...users, [name]: value})
        }
    }

    // register
    const onSubmit = () => {

        const allErrors = {};
        const userData = {
            name: users.name,
            email: users.email,
            password: users.password,
            number: users.number,
            position: users.position,
            // hobby: users.hobby || [],
            city: users.city,
            // image: users.image
        };

        Object.keys(userData).forEach(key => {
            const error = handleValidate(key, userData[key]);
            if (error && error.length) {
                allErrors[key] = error;
            }
        });
        if (Object.keys(allErrors).length) {
            return setValidation(allErrors);
        }

        console.log("userData======>", userData);

        if (id.index) {
            UserDataService.update(id.index, userData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            try {
                const res = UserDataService.create(userData);
                console.log("response", res);
            } catch (e) {
                console.log('error', error);
            }
        }
        alert("registered successfully");
        navigate('/signin');
    };
//==========================================================================
    useEffect(() => {
        setTimeout(() => {
            id.index && getUser(id.index);
        }, 100);
    }, []);

    const getUser = (id) => {
        UserDataService.get(id)
            .then(res => {
                console.log("data-=>", res.data);
                if (id) {
                    setUsers(res.data);
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleValidate = (name, value) => {
        let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let validNumber = /^[0-9]{10}$/;
        switch (name) {
            case "name": {
                if (value === "" || null) {
                    return "enter name";
                }
                break;
            }
            case "email": {
                if (!value.match(validEmail)) {
                    return "Enter valid Email";
                }

                break;
            }
            case "number": {
                if (!value.match(validNumber)) {
                    return "Enter valid number";
                }
                break;
            }
            case "position": {
                if (value === "") {
                    return "Enter position";
                }
                break;
            }
            case "city": {
                if (value === "") {
                    return "Enter city";
                }
                break;
            }
            case "hobby": {
                if (value.length <= 0) {
                    return "Enter hobby";
                }
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <>
            <div className="">
                <div>

                    <div className='addUser'>

                        <div className="my-5">
                            <h3 className="my-5">Sign Up For Joining Us</h3>
                            <div className="item">

                                {/*name*/}
                                <div className="mb-3" key="users">
                                    <label htmlFor="name" className="form-label"><strong>Name :</strong> </label>
                                    <input type="text"
                                           name="name"
                                           value={users.name}
                                           onChange={(e) => {
                                               onHandleChange(e)
                                           }}
                                           className="form-control"

                                    />

                                    <p style={{color: 'red'}}>{error.name}</p>
                                </div>

                                {/*email*/}
                                <div className="mb-3" key="users">
                                    <label htmlFor="email" className="form-label"><strong>Email :</strong></label>
                                    <input type="text"
                                           name="email"
                                           value={users.email}
                                           onChange={(e) => {
                                               onHandleChange(e)
                                           }}
                                           className="form-control"
                                    />

                                    <p style={{color: 'red'}}>{error.email}</p>
                                </div>

                                {/*password*/}
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label"><strong>Password
                                        :</strong> </label>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           value={users.password}
                                           onChange={(e) => onHandleChange(e)}
                                    />

                                </div>

                                {/*number*/}
                                <div className="mb-3" key="users">
                                    <label htmlFor="number" className="form-label"><strong>Contact no.:</strong></label>
                                    <input type="text"
                                           value={users.number}
                                           name="number"
                                           className="form-control"
                                           onChange={(e) => {
                                               onHandleChange(e)
                                           }}
                                    />

                                    <p style={{color: 'red'}}>{error.number}</p>
                                </div>

                                {/* Position */}
                                <div className="position-radio">
                                    <label htmlFor="number" className="form-labe "
                                           style={{marginRight: "1rem"}}><strong>Position : </strong></label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input"
                                               type="radio"
                                               name="position"
                                               onChange={(e) => {
                                                   onHandleChange(e)
                                               }}
                                               id="inlineRadio1"
                                               value="Team Leader"
                                               checked={(users || {}).position === "Team Leader" ? true : false}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Team Leader</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input"
                                               type="radio"
                                               name="position"
                                               onChange={(e) => {
                                                   onHandleChange(e)
                                               }}
                                               id="inlineRadio2"
                                               value="Employee"
                                               checked={(users || {}).position === "Employee" ? true : false}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Employee</label>
                                    </div>
                                    <br/>
                                    <p style={{color: 'red'}}>{error.position}</p>
                                </div>


                                {/* city */}
                                <div className="city">

                                    <div className="dropdown">

                                        <label htmlFor="number" className="form-label"
                                               style={{marginRight: "1rem"}}><strong>City : </strong></label>

                                        <select
                                            onChange={(e) => {
                                                onHandleChange(e)
                                            }}
                                            value={users.city || ""} name="city" id="city">
                                            <option value="" name="city">select city</option>
                                            <option value="pune" name="city"
                                                    selected={(users || {}).city === "pune" ? true : false}>pune
                                            </option>
                                            <option value="mumbai" name="city"
                                                    selected={(users || {}).city === "mumbai" ? true : false}>mumbai
                                            </option>
                                            <option value="kolkata" name="city"
                                                    selected={(users || {}).city === "kolkata" ? true : false}>kolkata
                                            </option>
                                            <option value="bangluru" name="city"
                                                    selected={(users || {}).city === "bangluru" ? true : false}>bangluru
                                            </option>
                                        </select>
                                    </div>
                                    <p style={{color: 'red'}}>{error.city}</p>
                                </div>


                                {/*/!* Hobby *!/*/}
                                {/*<div className="hobby">*/}

                                {/*    <label htmlFor="number" className="form-label"><strong>Hobby : </strong></label>*/}
                                {/*    <div className="form-check">*/}
                                {/*        <input className="form-check-input" name='hobby'*/}
                                {/*               onChange={(e) => {*/}
                                {/*                   onHandleChange(e)*/}
                                {/*               }}*/}
                                {/*               type="checkbox"*/}
                                {/*               value="codding"*/}
                                {/*               checked={(users.hobby || []).some((item) => item === 'codding')}*/}
                                {/*        />*/}
                                {/*        <label className="form-check-label" htmlFor="flexCheckDefault">*/}
                                {/*            Codding*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*    <div className="form-check">*/}
                                {/*        <input className="form-check-input"*/}
                                {/*               name='hobby'*/}
                                {/*               onChange={(e) => {*/}
                                {/*                   onHandleChange(e)*/}
                                {/*               }}*/}
                                {/*               type="checkbox"*/}
                                {/*               value="Travelling"*/}
                                {/*            // checked={(users || {}) && (users || {}).hobby.filter((e) => e === "Travelling")[0] === "Travelling" ? true : false}*/}
                                {/*               checked={(users.hobby || []).some((item) => item === 'Travelling')}*/}
                                {/*        />*/}
                                {/*        <label className="form-check-label" htmlFor="flexCheckChecked">*/}
                                {/*            Travelling*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*    <div className="form-check">*/}
                                {/*        <input className="form-check-input"*/}
                                {/*               name='hobby'*/}
                                {/*               type="checkbox"*/}
                                {/*               onChange={(e) => {*/}
                                {/*                   onHandleChange(e)*/}
                                {/*               }}*/}
                                {/*               value="Playing"*/}
                                {/*            // checked={(users || {}) && (users || {}).hobby.filter((e) => e === "Playing")[0] === "Playing" ? true : false}*/}
                                {/*               checked={(users.hobby || []).some((item) => item === 'Playing')}*/}
                                {/*        />*/}
                                {/*        <label className="form-check-label" htmlFor="flexCheckChecked">*/}
                                {/*            Playing*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*    <div className="form-check">*/}
                                {/*        <input className="form-check-input"*/}
                                {/*               name='hobby'*/}
                                {/*               type="checkbox"*/}
                                {/*               onChange={(e) => {*/}
                                {/*                   onHandleChange(e)*/}
                                {/*               }}*/}
                                {/*               value="Dancing"*/}
                                {/*            // checked={(users || {}) && (users || {}).hobby.filter((e) => e === "Dancing")[0] === "Dancing" ? true : false}*/}
                                {/*               checked={(users.hobby || []).some((item) => item === 'Dancing')}*/}
                                {/*        />*/}
                                {/*        <label className="form-check-label" htmlFor="flexCheckChecked">*/}
                                {/*            Dancing*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*    <p style={{color: 'red'}}>{error.hobby}</p>*/}
                                {/*</div>*/}

                                <button type="submit" className="btn my-3"
                                        style={{backgroundColor: "#0B1320", color: "white"}}
                                        onClick={() => onSubmit()}>Sign Up for free
                                </button>
                                <br/>
                            </div>
                        </div>
                        <div className="to-signin text-center">
                            <div className="my-3">
                                <h1>
                                    Welcome To Lorem Ipsum
                                </h1>
                            </div>
                            <div className="my-3">
                                <p>Get meaningful results with essential </p>
                                <p>tools for brainstorming</p>
                            </div>
                            <div>
                                <button style={{backgroundColor: "#0B1320"}} className="btn p-2">
                                    <Link to='/signin'
                                          style={{textDecoration: "none", color: "white"}}
                                    > Have An Account</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Registration
