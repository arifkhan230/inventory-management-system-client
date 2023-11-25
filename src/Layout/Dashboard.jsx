import { NavLink, Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import { FaBars, FaCartPlus, FaHome, FaList, FaShoppingBag, FaYoutube } from "react-icons/fa";


const Dashboard = () => {

    const linkStyle = "flex justify-center items-center gap-1 font-medium text-white  my-4 py-1 rounded w-full bg-black"

    const dashLink =
        <>
            <li>
                <NavLink
                    className={linkStyle}
                    to="/dashboard/products"
                >
                    <FaCartPlus />
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={linkStyle}
                    to="/dashboard/subscription"
                >
                    <FaYoutube />
                    Subscription
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={linkStyle}
                    to="/"
                >
                    <FaHome />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={linkStyle}
                    to="/our-menu"
                >
                    <FaList />
                    Menu
                </NavLink>
            </li>
            <li>
                <button
                    className={linkStyle}
                >
                    <FaShoppingBag />
                    Sign Out
                </button>
            </li>
        </>


    return (
        <Container>
            <div className="min-h-screen flex flex-col md:flex-row ">
                <div>
                    <div className="hidden lg:block min-h-screen w-64 bg-zinc-200 px-10 py-5 space-y-3">
                        <span className="text-xl font-medium">My System</span>
                        <ul className="menu p-4">{dashLink}</ul>
                    </div>

                    <div className="lg:hidden">
                        <div className="drawer ">
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle "
                            />
                            <div className="drawer-content p-8 flex items-center gap-6">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="drawer-button"
                                >
                                    <FaBars className="text-xl" />
                                </label>
                                <span className="text-xl">My System </span>
                            </div>
                            <div className="drawer-side ">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                
                                <ul className=" w-80 min-h-full px-10 bg-base-200 text-base-content">
                                    {dashLink}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;