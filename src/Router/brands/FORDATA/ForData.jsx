/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ForData = ({data}) => {
    const {brand,photo, Reating, price,name, }=data || {}
    console.log(data)
    return (
        <div>
           <div className="card w-724 h-[60vh] bg-base-100 shadow-xl">
  <figure><img src={photo} className="w-full h-[100%] " alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title">
    <h1 className="font-semibold" > {name} </h1>
      <div className="badge badge-secondary">{brand}</div>
     
    </h2>
    <div className="flex justify-between" >
    <p className="font-bold"> price:{price}</p>
      <p className="font-bold"> reating:{Reating} </p>
    </div>
    <div className="card-actions  flex justify-between">
    {/* <div className="badge badge-outline">view ditals</div>  */}
    <Link>
    <button  className=" bg-gray-400 py-2 px-2 rounded-xl text-xs ">view ditals</button>
    </Link>
      <Link  >
      <button className=" bg-green-600 py-2 px-2 rounded-xl text-xs ">
       Update button
      </button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ForData;