import { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Authcontaxt } from "../../Porvider/AuthProvider";



const Register = () => {

// 12121212
const [registerError,setRegisterError] =useState('')
const [ seccess,setSeccess]=useState('')


   const{creatUser,sigIn}=useContext(Authcontaxt)

   const location = useLocation()
   // console.log(location);
   const navigate =useNavigate();

  const handeRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
   console.log(name,photo,email,password);


  //  1212
setRegisterError('')
setSeccess('')


if(password.length<6){
  toast.error(" please must be at least 6 characters")
  return;
}
else if(!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,15}$/.test(password)){
  setRegisterError()
  return toast.error(" Your password should have at lest one upercase and spcial caratore")
}





sigIn(email,password)
.then(result =>{console.log( ' login susscessfull', result.user)
navigate(location?.state ? location.state :'/' )

})

  .catch(error =>{
    console.error(error);
  })

// crate user
creatUser(email,password)
.then(res => {console.log(res.user)
setSeccess('')
return toast.success(' user create Successfully !')
})



.catch(error =>{
  console.log(error);
  setRegisterError()
  return toast.error("all ready use please try again ")
})

  }



    return (
        <div className="hero min-h-[70vh] items-center ">
        <div className="hero-content flex-col">
         <h2 className="text-black text-3xl font-bold"> Register Now </h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-auto ">
         <form onSubmit={handeRegister} >
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="your name" name="name"  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"  className="input required: input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input required: input-bordered" />
                <label className="label">
               <a href="#" className="label-text-alt link link-hover font-bold ">Forgot password?</a>
                 </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary font-bold">Register</button>
              </div>
         </form>
         {
          registerError && <p className="text-red-300"> {registerError} </p>
         }
         {
          seccess && <p className="text-green-400"> {seccess} </p>
         }



         <p className=" font-semibold"> All ready have a account <Link to={"/login"}>  <button className="uppercase ml-2 underline font-extrabold " > Login</button> </Link> </p>
            </div>
          </div>
      
         
        </div>
      </div>
    );
};

export default Register;