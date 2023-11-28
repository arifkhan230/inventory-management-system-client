
import PropTypes from 'prop-types';
import useManager from '../Hooks/useManager';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ManagerRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isManager, isManagerLoading] = useManager()

    if(loading || isManagerLoading){
        return <p>loading.....</p>
    }

    if(user && isManager){
        return children
    }
    return <Navigate to="/forbidden"></Navigate>
};

ManagerRoute.propTypes = {
    children:PropTypes.node
};

export default ManagerRoute;