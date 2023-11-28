import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NexGen Inventory || Home</title>
            </Helmet>
           <Banner></Banner>
           <FAQ></FAQ>
           <Testimonials></Testimonials>
           <Footer></Footer>
        </div>
    );
};

export default Home;