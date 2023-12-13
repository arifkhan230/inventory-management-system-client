import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import SellingPoints from "../SellingPoints/SellingPoints";
import OurLocation from "../OurLocation/OurLocation";
import Contact from "./Contact/Contact";


const Home = () => {
    return (
        <div className="overflow-hidden">
            
            <Helmet>
                <title>NexGen Inventory || Home</title>
            </Helmet>
           <Banner></Banner>
           <SellingPoints></SellingPoints>
           <FAQ></FAQ>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <OurLocation></OurLocation>
           <Footer></Footer>
        </div>
    );
};

export default Home;