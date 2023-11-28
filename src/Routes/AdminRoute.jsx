import PropTypes from 'prop-types';
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate } from 'react-router-dom';


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        return <p>loading.....</p>
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