/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ brandes }) => {
  const { brand, photo } = brandes || {};

  return (
    <Link to={`/${brand}`}>
      <div>
        <div className="card w-72 h-[250px] bg-base-100 shadow-xl image-full">
          <figure>
            <img src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center">
              <h2 className="text-2xl font-bold mt-[70%] ">{brand} </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
