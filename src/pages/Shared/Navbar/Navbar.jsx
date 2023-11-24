import { Link, NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";


const Navbar = () => {

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
        {/* <NavLink to="/register" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-lg text-[#638ecb] font-bold mr-4" : "text-lg font-semibold mr-4"
        }
        > Register</NavLink> */}

    </>

    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    {/* TODO: Change store name */}
                    <a className="btn btn-ghost text-xl">My System</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex gap-4">
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
                </div>
            </div>
        </Container>
    );
};

export default Navbar;