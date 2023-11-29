import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Subscription = () => {
    return (
        <div>
            <Helmet>
                <title>NexGen Inventory || Subscription</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center my-10">Choose a Package</h2>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                {/* card - 1  */}
                <div className="card bg-blue-300 shadow-xl  space-y-4">
                    <div className="card-body">
                        <h2 className="card-title ">$10/Basic</h2>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 200</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 200</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 200</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 200</p>
                        </div>
                        <Link to={`/dashboard/payment/${10}`}>
                            <div className="card-actions mt-6">
                                <button className="btn w-full btn-primary">Pay</button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-blue-300 shadow-xl space-y-4 ">
                    <div className="card-body">
                        <h2 className="card-title ">$20/Advance</h2>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 450</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 450</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 450</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 450</p>
                        </div>
                        <Link to={`/dashboard/payment/${20}`}>
                            <div className="card-actions mt-6">
                                <button className="btn w-full btn-primary">Pay</button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-blue-300 shadow-xl space-y-4 ">
                    <div className="card-body">
                        <h2 className="card-title ">$50/Basic</h2>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 1500</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 1500</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 1500</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle></FaCheckCircle>
                            <p>Increase Limit to 1500</p>
                        </div>
                        <Link to={`/dashboard/payment/${50}`}>
                            <div className="card-actions mt-6">
                                <button className="btn w-full btn-primary">Pay</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;