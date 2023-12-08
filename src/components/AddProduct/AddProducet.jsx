// import Swal from "sweetalert2";

import Swal from "sweetalert2";

const AddProducet = () => {
  const handelAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const technology = form.technology.value;
    const price = form.price.value;
    const description = form.description.value;
    const Reating = form.Reating.value;
    const photo = form.photo.value;
    const newproduct = {
      name,
      brand,
      technology,
      description,
      price,
      Reating,
      photo,
    };
    console.log(newproduct);
    
    fetch(" https://brand-shope-server-nzer12g5f-hridoy-roys-projects.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify(newproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Add Porducet successfully",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handelAddProduct}>
        <div className="text-center bg-[#F4F3F0] p-10 mb-14 mt-11 ">
          <h2 className="text-2xl font-bold"> Add producet </h2>

          {/* fomre name  row */}
          <div className="md:flex justify-between">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter your product name"
                  name="name"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Brand Name </span>
              </label>
              <label className="input-group">
             

                <input type="text"
            placeholder="Brand Name "  name="brand" className="input input-bordered bg-white text-black w-full "
            
            
            
            
            />
              </label>
            </div>
          </div>
          {/* fomre supplier */}
          <div className="md:flex justify-between">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Technology and Electronics</span>
              </label>



              {/* <select className="input input-bordered bg-white text-black w-full">
                  <option disabled selected>
                  Technology and Electronics
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select> */}
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Technology"
                  name="technology"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>
          {/* category */}
          <div className="md:flex justify-between">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Short description"
                  name="description"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Reating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="reatin"
                  name="Reating"
                  className="input input-bordered bg-white text-black w-full "
                />
              </label>
            </div>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">photo url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter photo URL"
                name="photo"
                className="input input-bordered bg-white text-black w-full "
              />
            </label>
          </div>
          <div className="mt-4 ">
            <button className="btn btn-block bg-black text-white ">
              block
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducet;