import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";


const Mycard = () => {

    const addCard =useLoaderData()
    console.log(addCard);
    return (
        <div className=" mt-24 grid lg:grid-cols-3 grid-cols-1 gap-4 md:grid-cols-2">
       {

        addCard.map(addCard=> <AllCard key={addCard} addCard={addCard}></AllCard> )
       }
        </div>
    );
};

export default Mycard;