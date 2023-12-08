import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import SectionONe from "../../MainLout/section/SectionONe";



const Home = () => {

const brands = useLoaderData()
console.log(brands)

    return (
        <>

<div>

<img src="https://i.ibb.co/z6qfVPc/download.jpg" alt="" className="w-full  h-[50vh]  " />
</div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mt-5" > 
      {
                    brands.map(brandes =><HomeCard  key={brandes.id} brandes={brandes} ></HomeCard> )

                }
      </div>

      <div className="mt-9">
    <SectionONe></SectionONe>
</div>


        </>
    );
};

export default Home;