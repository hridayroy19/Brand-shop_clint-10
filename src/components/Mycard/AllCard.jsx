/* eslint-disable react/prop-types */

const AllCard = ({ addCard}) => {

    const {brand,photo,price,Reating,name}=addCard || {}
    return (
        <div>
          <div className="card w-72 h-72 bg-base-100 shadow-xl">
  <figure><img src={photo} className="" alt="Shoes" /></figure>
 
  <div className="card-body">
  <h2> {name} </h2>
    <h2 className="card-title">
      {brand}
      
      <div className="badge badge-secondary">{price}</div>
    </h2>
    <p> </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{Reating}</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
     
        </div>
    );
};

export default AllCard;