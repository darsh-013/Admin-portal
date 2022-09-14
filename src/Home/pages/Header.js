
import {useNavigate} from "react-router-dom"
import header from '../images/header.jpg'
import '../Styles.css';

export const Home = () => {
    let navigate= useNavigate();
    const handleOnClick = () =>{
        navigate('/signin');
    }
    return (
        <div>
            <div className="header container">
                <div className="my-5">
                    <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Everything you need
                        is in one place</h1>
                    <p className="my-3" style={{fontSize: "1.3vw",color:"gray"}}>Web Designing & Development, Mobile Application, Digital Marketing
                        and Smart Device.</p>
                    <button className="btn p-3 my-3"
                            style={{backgroundColor:"#0B1320",color:"white"}}
                            onClick={handleOnClick}
                    ><strong>JOIN WITH US</strong></button>
                </div>
                <div>
                    <img src={header} alt="header" style={{width:"40vw"}}/>
                </div>
            </div>
        </div>
    )
};

export default Home;
