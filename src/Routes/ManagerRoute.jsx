
import PropTypes from 'prop-types';
import useManager from '../Hooks/useManager';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';

const ManagerRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isManager, isManagerLoading] = useManager()

    if(loading || isManagerLoading){
        return <Loading></Loading>
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