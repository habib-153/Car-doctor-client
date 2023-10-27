/* eslint-disable react/prop-types */
import { useContext, } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)

    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <div className="w-full text-center"><span className="loading mx-auto loading-dots loading-lg"></span></div>
    }

    if(user?.email){
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;