import {useNavigate} from "react-router-dom";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import '../Styles.css';

export const Product = () => {
    let navigate = useNavigate();
    const handleOnClick = () =>{
        navigate('/product');
    }
    const handleContact = () =>{
        navigate('/contact');
    }
    return (
        <div>
        <div className="container my-5">
            <div className="text-center">
                <button className="btn p-3 my-3"
                        style={{backgroundColor:"#0B1320",color:"white"}}
                        onClick={handleOnClick}
                ><strong>Our Product</strong></button>
            </div>
            <div className="my-3">
                <h2>Features Products</h2>
            </div>
            <div className="images text-center">
                <div>
                    <img src={p1} alt="p1" className="image"/>
                </div>
                <div>
                    <img src={p2} alt="p2" className="image"/>
                </div>
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

export default Product;
