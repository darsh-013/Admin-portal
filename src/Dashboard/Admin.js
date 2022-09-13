import React, {useEffect , useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserDataService from '../components/Registration/services/service';
import "./Styles.css";
import Sidebar from '../Sidebar';

export const Admin = () => {
    let navigate = useNavigate();

    const [item, setItem] = useState([]);
    const [text, setText] = useState("");

    useEffect( ()=>{
        setTimeout( ()=>{
            retrieveUser();
        }, 100);
    }, [] );

    const retrieveUser=()=>{
        UserDataService.getAll()
            .then(res => {
                setItem(res.data);
                console.log("userItems", res.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const onChange = e => {
        setText(e.target.value)
    };

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

    const removeData = (id) =>{
        setItem(item.filter((item)=>item._id!==id));
        UserDataService.delete(id)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    // const editData = (id) => {
    //     // navigate(`/signup/${id}`);
    //     navigate('/signup');
    // };

    return (
        <div className="d-flex">
            <div>
                <Sidebar/>
            </div>
            <div className='users'>
                <div key="user._id" className="container">
                    <h1 className="text-center my-5">Employees List</h1>
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
                            <th scope="col">Action</th>
                        </tr>
                        </thead>

                        {
                            !item?.length ? "There r no users for display" :
                                item.map((user) => {
                                    return (
                                        <tbody >
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.number}</td>
                                            <td>{user.position}</td>
                                            <td>{user.city}</td>
                                            {/*<td>*/}
                                            {/*    {*/}
                                            {/*        user.hobby.map((elem) => {*/}
                                            {/*            return elem;*/}
                                            {/*        })*/}
                                            {/*    }*/}
                                            {/*</td>*/}
                                            <td>
                                                <button className="btn btn-danger" onClick={() => {
                                                    removeData(user._id)
                                                }}>remove
                                                </button>
                                                {/*<button className="btn btn-secondary" onClick={() => {*/}
                                                {/*    editData(user._id)*/}
                                                {/*}}>Edit*/}
                                                {/*</button>*/}
                                            </td>
                                        </tr>
                                        </tbody>
                                    )
                                })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Admin;
