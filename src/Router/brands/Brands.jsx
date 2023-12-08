
import { useLoaderData } from "react-router-dom";
import ForData from "./FORDATA/ForData";


const Brands = () => {
    const data = useLoaderData();
    const newData = data.slice(0,3);
    console.log(data);
    return (
       <>
       
       <div>
           

            <div className="carousel w-full h-[50vh] ">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={newData[0].photo}  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[40vh] ">
    <img src={newData[1].photo} className="w-full h-[60vh] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={newData[2].photo} className="w-full h-[60vh] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>


        </div>
        
        
      <div className=" grid md:grid-cols-2 mt-10 lg:grid-cols-3 grid-cols-1 gap-3" > 
      {
                    data.map(data =><ForData key={data.id} data={data} ></ForData> )

                }
      </div>
          
       
       
       </>
    );
};

export default Brands;