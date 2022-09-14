import {useNavigate} from "react-router";
import about from '../Images/about.svg';
import '../Styles.css';

export const Header = () => {
    let navigate= useNavigate();
    const handleOnClick = () =>{
        navigate('/signin');
}
    return (
        <div>
            <div className="header container">
                <div className="my-5">
                    <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Who We Are?</h1>
                    <p style={{fontSize: "1.2vw"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                        We have been offering a wide range of digital services and business
                        solutions for the past few years and we also have a lot of super satisfied customers all around the globe
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    <button className="btn p-3 my-3"
                            style={{backgroundColor:"#0B1320",color:"white"}}
                            onClick={handleOnClick}
                    ><strong>JOIN WITH US</strong></button>
                </div>
                <div>
                    <img src={about} alt="about" style={{width:"40vw"}}/>
                </div>
            </div>
        </div>
    )
};

export default Header;
