import web from '../images/web.svg';
import android from '../images/android.svg'
import iot from '../images/iot.svg';
import market from '../images/market.svg';
import brand from '../images/brand.svg';
import '../Styles.css';

export const Service = () => {

    return (
        <div className="my-5 ">
            <div className="text-center p-4" style={{background:"#F1F1F1"}}>
                <button className="btn btn-outline-dark my-3"><strong>Our Services</strong></button>
                <h1>We provide IT & Business Solutions</h1>
                <p className="my-3" style={{fontSize: "1.3vw",color:"gray"}}>Professional Services For All Your Business Needs</p>
            </div>
            <div>
                <div className="container">
                    <div className="all-cards my-5 text-center">
                        <div className="cards">
                            <img src={web} alt="web" />
                            <p><strong>Web Development</strong></p>
                            <p>
                                A website design is a dominant element that adds reliability to your business.
                            </p>
                        </div>
                        <div className="cards">
                            <img src={android} alt="android" />
                            <p className="my-3"><strong>Mobile App Development</strong></p>
                            <p>
                                In today's business world, all types of business need mobile app development.
                            </p>
                        </div>
                        <div className="cards">
                            <img src={iot} alt="iot" />
                            <p><strong>Internet of Things</strong></p>
                            <p>
                                Smart devices play a major role in today’s world. Smart devices idea compiles with the Internet of Things.
                            </p>
                        </div>
                    </div>
                    <div className="card-item my-5 text-center">
                        <div className="cards">
                            <img src={market} alt="market" />
                            <p><strong>Digital marketing</strong></p>
                            <p>
                                In today's business environment, digital marketing is crucial for success.</p>
                        </div>
                        <div className="cards">
                            <img src={brand} alt="brand" />
                            <p className="my-3"><strong>Corporate Branding</strong></p>
                            <p>
                                Progbiz is a full-fledged agency that delivers a wide range of digital marketing services to help your business flourish.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Service;
