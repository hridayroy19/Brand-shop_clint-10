import { createBrowserRouter } from "react-router-dom";
import MainLeout from "../MainLout/MainLeout";
import Home from "../components/HOme/Home";
import AddProducet from "../components/AddProduct/AddProducet";
import Mycard from "../components/Mycard/Mycard";
import Login from "../Login/Login";
import Register from "../components/register/Register";
import PrivetRouter from "../components/PrivetRoute/PrivetRouter";
import ErrorPage from "../errorpage/ErrorPage";
import Brands from "./brands/Brands";
import UpdateData from "../components/UpdateData/UpdateData";
// import Brands from "./brands/Brands";


const MyCreateRouter =createBrowserRouter([{

path:"/",
element:<MainLeout></MainLeout>,
errorElement:<ErrorPage></ErrorPage>,
children:[{
    path:"/",
    element:<Home/>,
    loader:()=>fetch("https://brand-shope-server-nzer12g5f-hridoy-roys-projects.vercel.app/brands")
   
},
{
    path:"/AddProduct",
    element:<PrivetRouter> <AddProducet></AddProducet> </PrivetRouter>

},
{
    path:"/MyCart",
    element:<Mycard></Mycard>,
    loader:()=>fetch(" https://brand-shope-server-nzer12g5f-hridoy-roys-projects.vercel.app/product")
},
{
    path:"/login",
    element:<Login></Login>
},
{
    path:"/registation",
    element:<Register></Register>
},
{
    path:'/:id',
    loader: ({params})=> fetch(` https://brand-shope-server-nzer12g5f-hridoy-roys-projects.vercel.app/${params.id}`),
    element:<Brands></Brands>
},
{
    path:"/update",
    element:<UpdateData></UpdateData>,
    loader:({params})=>fetch(` https://brand-shope-server-nzer12g5f-hridoy-roys-projects.vercel.app/product/${params.id}`)
}



]


}])
export default MyCreateRouter;