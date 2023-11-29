import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import logo from "../../../assets/images/nexgen.png"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <Container>
                <div className="">

                    <footer className="bg-gray-200 dark:bg-gray-900">
                        <div className="lg:mx-auto w-full max-w-[1440px] p-4 py-6 lg:py-8 lg:pl-0 pl-10">
                            <div className="md:flex md:justify-around  ">
                                <div className="mb-6 md:mb-0 flex flex-col justify-center items-center">
                                    <img className="w-80 h-24 object-cover" src={logo} alt="" />
                                    <p>MoulviBazar,Shylhet</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Features</h2>
                                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                            <li>
                                                <Link to="/createShop">Create Shop</Link>
                                            </li>
                                            <li className="mt-4">
                                                <Link to="/watchDemo">Watch Demo</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us On</h2>
                                        <div className="flex items-center gap-2 my-4">
                                            <FaFacebook></FaFacebook>
                                            <p className="text-gray-500 dark:text-gray-400 font-medium">Facebook</p>
                                        </div>
                                        <div className="flex items-center gap-2 my-4">
                                            <FaInstagram></FaInstagram>
                                            <p className="text-gray-500 dark:text-gray-400 font-medium">Facebook</p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block ">
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contract Info</h2>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">01764230122</p>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">nexgen@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                            <p className="text-center text-sm mt-8">Copyright © 2023 - All rights reserved By NexGen</p>
                        </div>
                    </footer>

                </div>

            </Container>
        </div>
    );
};

export default Footer;