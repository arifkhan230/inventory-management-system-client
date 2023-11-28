import { Link, NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import userLogo from "../../../assets/images/profile-user.png"
import useAdmin from "../../../Hooks/useAdmin";
import useManager from "../../../Hooks/useManager";


const Navbar = () => {

    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isManager] = useManager()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast('Logged Out successfully')
            })
            .catch(error => {
                console.log(error)
                toast(error.message)
            })

    }

    const navLinks = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-[#638ecb] font-bold mr-4" : "text-xl font-semibold mr-4"
        }
        > Home</NavLink>
        <NavLink to="/createShop" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-[#638ecb] font-bold mr-4" : "text-lg font-semibold mr-4"
        }
        > Create Shop</NavLink>
        <NavLink to="/watchDemo" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-[#638ecb] font-bold mr-4" : "text-lg font-semibold mr-4"
        }
        > Watch Demo</NavLink>

        {
            isAdmin  && 
            <NavLink to="/dashboard/manageShop" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg text-[#638ecb] font-bold mr-4" : "text-lg font-semibold mr-4"
            }
            > DashBoard</NavLink>
        }
        {
            isManager  && 
            <NavLink to="/dashboard/manageProducts" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg text-[#638ecb] font-bold mr-4" : "text-lg font-semibold mr-4"
            }
            > DashBoard</NavLink>
        }

    </>

    return (
        <div className="shadow-xl py-3">
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start  w-full  flex justify-between lg:w-1/2">
                        {/* TODO: Change store name */}
                        <a className="btn btn-ghost text-xl">My System</a>
                        <div className="dropdown dropdown-left dropdown-bottom">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                {
                                    user?.email && <img className="w-10 rounded-full" src={user?.photoURL ? user.photoURL : userLogo} />
                                }
                                {
                                    user && <a className="justify-between text-xl font-bold mb-2">
                                        {
                                            user?.displayName ? user.displayName : "username"
                                        }
                                    </a>
                                }
                                {
                                    navLinks
                                }
                                {
                                    user?.email ? <button onClick={handleLogOut} className="btn btn-sm text-white bg-[#2eca7f] mb-2 hover:bg-[#6610f2]">Logout</button>
                                        :
                                        <>
                                            <Link
                                                to='/login'>
                                                <button
                                                    className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                                                >Login</button>
                                            </Link>
                                            <Link
                                                to='/register'>
                                                <button
                                                    className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                                                >Register</button>
                                            </Link>
                                        </>
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex gap-4">

                        {user?.email ?
                            <div className="dropdown dropdown-left dropdown-bottom">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={user?.photoURL ? user.photoURL : userLogo} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between text-xl font-bold mb-2">
                                            {
                                                user?.displayName ? user.displayName : "username"
                                            }
                                        </a>
                                    </li>
                                    <button onClick={handleLogOut} className="btn btn-sm text-white bg-[#2eca7f] mb-2 hover:bg-[#6610f2]">Logout</button>
                                </ul>
                            </div>
                            :
                            <>
                                <Link
                                    to='/login'>
                                    <button
                                        className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                                    >Login</button>
                                </Link>
                                <Link
                                    to='/register'>
                                    <button
                                        className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                                    >Register</button>
                                </Link> </>
                        }

                        {/* <Link
                            to='/login'>
                            <button
                                className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                            >Login</button>
                        </Link>
                        <Link
                            to='/register'>
                            <button
                                className="btn text-white rounded-full px-6 bg-[#2eca7f] hover:bg-[#6610f2] duration-500"
                            >Register</button>
                        </Link> */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;