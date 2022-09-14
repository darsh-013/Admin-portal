import p1 from '../Images/p1.png'
import p2 from '../Images/p2.png'
import p3 from '../Images/p3.png'
import p4 from '../Images/p4.png'
import p5 from '../Images/p5.png'
import p6 from '../Images/p6.png'
import {useNavigate} from "react-router";
import '../Styles.css';

export const Client = () => {
    let navigate=useNavigate();

    const handleContact = () =>{
        navigate('/contact');
    }
    return (
        <div>
        <div className="container my-5" style={{background: "#F1F1F1"}}>
            <div className="p-4 text-center">
                <h1>Our Clients</h1>
                <p className="my-3" style={{fontSize: "1.3vw", color: "gray"}}>We are so proud to work with some of the
                    world's best known company's .</p>
            </div>
            <div className="client p-4">
                <div className="client1">
                    <div className="cards">
                        <img src={p1} alt="p1"/>
                    </div>
                    <div className="cards">
                        <img src={p2} alt="p2"/>
                    </div>
                    <div className="cards">
                        <img src={p3} alt="p3"/>
                    </div>
                </div>
                <div className="client1">
                    <div className="cards">
                        <img src={p4} alt="p4"/>
                    </div>
                    <div className="cards">
                        <img src={p5} alt="p5"/>
                    </div>
                    <div className="cards">
                        <img src={p6} alt="p6"/>
                    </div>
                </div>
            </div>

        </div>
            <div className="text-center p-4 my-2">
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

export default Client;
