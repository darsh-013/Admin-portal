import header from '../Images/header.png';
import '../Styles.css';
export const Header = () => {

    return (
        <div>
            <div className="header container">
                <div className="my-5">
                    <h1>Learning Management System</h1>
                    <h3>Features:</h3>
                    <div >
                        <p className="my-3" style={{fontSize: "1.2vw",color:"gray"}}>
                            1. What is learning management system?
                        </p>
                        <p className="my-3" style={{fontSize: "1.2vw",color:"gray"}}>
                            2. How much cost??
                        </p>
                        <p className="my-3" style={{fontSize: "1.2vw",color:"gray"}}>
                            3. What are the benefits of LMS?
                        </p>
                        <p className="my-3" style={{fontSize: "1.2vw",color:"gray"}}>
                            4. Is LMS is accessible for wide range of users?
                        </p>
                    </div>
                </div>
                <div>
                    <img src={header} alt="header" style={{width:"40vw"}}/>
                </div>
            </div>
        </div>
    )
};

export default Header;
