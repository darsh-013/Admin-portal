import p1 from "../../../Home/images/p1.jpg";
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.jpg';
import p4 from '../Images/p4.jpg';
import {useNavigate} from "react-router-dom";
import '../Styles.css';


export const Products = () => {
    let navigate=useNavigate();
    const handleContact = () =>{
        navigate('/contact');
    }
    return (
        <div className="container my-5">
            <div className="images text-center my-5">
                <div className="image" style={{borderRadius:"10px"}}>
                    <h3>Online Visitors Management System</h3>
                    <img src={p1} alt="p1" className="image"/>
                </div>
                <div className="image" style={{borderRadius:"10px"}}>
                    <h3>Restaurant App- Mobile & Web Application</h3>
                    <img src={p2} alt="p2" className="image"/>
                </div>
            </div>
            <div className="images text-center">
                <div className="image" style={{borderRadius:"10px"}}>
                    <h3>Em Tracker- Mobile App</h3>
                    <img src={p3} alt="p3" className="image"/>
                </div>
                <div className="image" style={{borderRadius:"10px"}}>
                    <h3>Service App- Mobile & Web Application</h3>
                    <img src={p4} alt="p4" className="image"/>
                </div>
            </div>
            <div className="text-center p-4 my-5" style={{background:"#F1F1F1"}}>
                <h1 className="my-4">Have any question?</h1>
                <p className="my-3" style={{fontSize: "1.3vw",color:"gray"}}>Professional Services For All Your Business Needs</p>
                <div className="text-center">
                    <button className="btn p-3 my-3"
                            style={{backgroundColor:"#0B1320",color:"white"}}
                            onClick={handleContact}
                    ><strong>Talk to Us</strong></button>
                </div>
            </div>
        </div>
    )
};

export default Products;
