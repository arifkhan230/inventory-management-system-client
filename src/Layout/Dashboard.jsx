import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Container from "../Components/Container/Container";
import { FaBars, FaCheck, FaDollarSign, FaHome, FaMoneyBillAlt, FaRegEdit, FaShoppingBag, FaThList, FaYoutube } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useManager from "../Hooks/useManager";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Footer from "../pages/Home/Footer/Footer";
import logo from "../assets/images/nexgen.png"


const Dashboard = () => {
    const { logOut } = useAuth()
    const [isAdmin] = useAdmin();
    const [isManager] = useManager()
    const navigate = useNavigate()
    // console.log(isAdmin);
    console.log(isManager);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want To Log Out",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, !"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        toast('Logged Out successfully')
                        navigate('/')
                        Swal.fire({
                            title: "Logged Out!",
                            text: "Your Have successfully logged out.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error)
                        toast(error.message)
                    })

            }
        });

    }

    const linkStyle = "flex justify-center items-center gap-1 font-medium text-white  my-4 py-2 rounded w-full bg-black"

    const dashLink =
        <>

            {/* manager route */}

            {
                isManager && <>
                    <li>
                        <NavLink
                            className={linkStyle}
                            to="/dashboard/manageProducts"
                        >
                            <FaRegEdit />
                            Manage Product
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
                            to="/dashboard/salesCollection"
                        >
                            <FaMoneyBillAlt />
                            Sales Collection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={linkStyle}
                            to="/dashboard/checkout"
                        >
                            <FaCheck />
                            Checkout
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={linkStyle}
                            to="/dashboard/salesSummery"
                        >
                            <FaDollarSign />
                            Sales Summery
                        </NavLink>
                    </li>

                </>
            }


            {/* admin route */}

            {
                isAdmin && <>
                    <li>
                        <NavLink
                            className={linkStyle}
                            to="/dashboard/manageShop"
                        >
                            <FaRegEdit />
                            ManageShop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={linkStyle}
                            to="/dashboard/adminSummary"
                        >
                            <FaThList />
                            Admin Summery
                        </NavLink>
                    </li>
                </>
            }

            {/* normal route */}

            <div className="divider"></div>

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
                <button
                    onClick={handleLogout}
                    className={linkStyle}
                >
                    <FaShoppingBag />
                    Sign Out
                </button>
            </li>
        </>


    return (
        <Container>
            <Helmet>
                <title>NexGen Inventory || Dashboard</title>
            </Helmet>
            <div className="min-h-screen flex flex-col md:flex-row ">

                <div>
                    <div className="hidden lg:block min-h-full w-64 border-l-2 border-r-2 px-4 py-5 space-y-3">
                    <img className="object-cover" src={logo} alt="" />
                        <ul className="menu">{dashLink}</ul>
                    </div>

                    <div className="lg:hidden">
                        <div className="drawer z-50 ">
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
                                <img className="w-60 h-16 object-cover" src={logo} alt="" />
                            </div>
                            <div className="drawer-side ">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>

                                <ul className=" w-80 min-h-full px-10 pt-20 bg-base-200 text-base-content">
                                    {dashLink}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-screen p-10">
                    <div className="min-h-[60vh] mb-10"><Outlet></Outlet></div>
                    <Footer></Footer>
                </div>
            </div>
            
        </Container>
    );
};

export default Dashboard;