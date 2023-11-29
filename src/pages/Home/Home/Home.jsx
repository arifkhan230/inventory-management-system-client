import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import SellingPoints from "../SellingPoints/SellingPoints";
import OurLocation from "../OurLocation/OurLocation";


const Home = () => {
    return (
        <div>
            
            <Helmet>
                <title>NexGen Inventory || Home</title>
            </Helmet>
           <Banner></Banner>
           <SellingPoints></SellingPoints>
           <FAQ></FAQ>
           <Testimonials></Testimonials>
           <OurLocation></OurLocation>
           <Footer></Footer>
        </div>
    );
};

export default Home;