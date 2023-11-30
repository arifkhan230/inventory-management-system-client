import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
// import useAuth from "../Hooks/useAuth";
// import Loading from "../Components/Loading/Loading";


const Main = () => {
    // const {loading} = useAuth();

    // if(loading){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;