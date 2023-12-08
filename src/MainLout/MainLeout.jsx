import { Outlet } from "react-router-dom";
import Navaber from "../components/HOme/Navbar/Navaber";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLeout = () => {
    return (
        <div>

           <div className="px-24 bg-gray-200 p-4 ">
             <Navaber></Navaber>
             </div>
         

            <div className=" px-24  bg-gray-200 ">
           
            <Outlet></Outlet>
            <Toaster/>
            </div>
           

         <div className="mt-11" >

         <Footer/>
         </div>
        </div>
    );
};

export default MainLeout;