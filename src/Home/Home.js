import Header from "./pages/Header";
import Service from "./pages/Service";
import Product from "./pages/Product";
import Footer from "../Footer/Footer";
import './Styles.css';

export const Home = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Service/>
            </div>
            <div>
                <Product/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;
