import PropTypes from 'prop-types';
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/forbidden"></Navigate>

    
};

AdminRoute.propTypes = {
    children: PropTypes.node
};

export default AdminRoute;