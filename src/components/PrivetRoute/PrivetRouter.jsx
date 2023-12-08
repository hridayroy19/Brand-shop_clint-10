/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontaxt } from "../../Porvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {

const location = useLocation();
// console.log(location.pathname)

    const { user, loading}=useContext(Authcontaxt);

if(loading){
    return <span className="loading loading-spinner text-info"></span>
}


    if(user){
        return children;
    }
    return <Navigate state={location.pathname}  to={"/login"} ></Navigate>;
};

export default PrivetRouter;