import p1 from '../Images/p1.jpg';
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.jpg';
import p4 from '../Images/p4.jpg';
import p5 from '../Images/p5.jpg';
import p6 from '../Images/p6.jpg';
import '../Styles.css';

export const Middle = () => {
    return (
        <div style={{backgroundColor:"#F7F7F7"}}>
            <div className="container text-center">
                <h2>Connect with one of our global offices</h2>
            </div>
            <div>
                <div className="office container my-5">
                    <div>
                        <img src={p1} alt="header" style={{height:"20rem", width:'40rem'}} />
                    </div>
                    <div className="container mx-5 my-2">
                        <div>
                            <h3>Portsmouth, NH (U.S. Office)</h3>
                            <h5>Address</h5>
                            <p>1 Harbour Pl, Suite 175</p>
                            <p>Portsmouth, NH 03801</p>
                            <p>United States</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>1 888 HUBSPOT</p>
                        </div>
                    </div>
                </div>
                <div className="office container my-5">

                    <div className="container mx-5 my-2">
                        <div>
                            <h3>Dublin (European HQ)</h3>
                            <h5>Address</h5>
                            <p>1 Sir John Rogerson's Quay,</p>
                            <p>Dublin 2</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+353 1 5187500</p>
                        </div>
                    </div>
                    <div>
                        <img src={p2} alt="p2" style={{height:"20rem", width:'40rem'}} />
                    </div>
                </div>
                <div className="office container my-5">
                    <div>
                        <img src={p3} alt="p3" style={{height:"20rem", width:'40rem'}} />
                    </div>
                    <div className="container mx-5 my-2">
                        <div>
                            <h3>Singapore (Asia-Pacific HQ)</h3>
                            <h5>Address</h5>
                            <p>60 Anson Road</p>
                            <p>Mapletree Anson, #10-03</p>
                            <p>Singapore 079914</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+65 800 852 3301</p>
                        </div>
                    </div>
                </div>
                <div className="office container my-5">
                    <div className="container mx-5 my-2">
                        <div>
                            <h3>Sydney (Australia Office)</h3>
                            <h5>Address</h5>
                            <p>20 Hunter St, Level 7</p>
                            <p>Sydney NSW 2000</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+61 1300 482 7768</p>
                        </div>
                    </div>
                    <div>
                        <img src={p4} alt="p4" style={{height:"20rem", width:'40rem'}} />
                    </div>
                </div>
                <div className="office container my-5">
                    <div>
                        <img src={p5} alt="p5" style={{height:"20rem", width:'40rem'}} />
                    </div>
                    <div className="container mx-5 my-2">
                        <div>
                            <h3>Tokyo (Japan Office)</h3>
                            <h5>Address</h5>
                            <p>ShinOtemachi Building 9F, 2-2-1 Otemachi,</p>
                            <p>Chiyoda-ku, Tokyo 100-0004, Japan</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+81 3 6863 5293</p>
                        </div>
                    </div>
                </div>
                <div className="office container my-5">
                    <div className="container mx-5 my-2">
                        <div>
                            <h3>Berlin (Berlin Office)</h3>
                            <h5>Address</h5>
                            <p>HubSpot Germany GmbH</p>
                            <p>AM Postbahnhof 17</p>
                            <p>10243 Berlin</p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+49 30 22027335</p>
                        </div>
                    </div>
                    <div>
                        <img src={p6} alt="p6" style={{height:"20rem", width:'40rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Middle;
