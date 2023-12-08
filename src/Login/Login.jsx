import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Authcontaxt } from "../../Porvider/AuthProvider";
import toast from "react-hot-toast";
import { Authcontaxt } from "../Porvider/AuthProvider";
// import {  FaGoogle } from "react-icons/fa";


const Login = () => {

  const [loginError,setLoginError] =useState('')
const [ seccess,setSeccess]=useState('')

const {sigIn,signInWithgoogle}=useContext(Authcontaxt)

// masage show



const location = useLocation()
// console.log(location);
const navigate =useNavigate();

const handelogin = e =>{
  e.preventDefault();
  console.log(e.currentTarget);
  const form = new FormData(e.currentTarget);
  const email = form.get('email')
  const password = form.get('password')

 setLoginError('')
setSeccess('')
  


  // console.log(email,password);
if (password.length<6){
  toast("password must be at 6 chareacters");
  return;
}


sigIn(email,password)
.then(result =>{console.log(  result.user)
navigate(location?.state ? location.state :'/' )
setSeccess()
return toast.success(' login Successfully !')

})


  .catch(error =>{
    console.error(error);
    setLoginError()
    return toast.error(" please try again ")
  })

}

const handelGoogleSignWith=()=>{
  signInWithgoogle()
  .then(res=>{
    console.log(res)
  

  })
  .catch(error=>{
    console.erro(error)
  
  })


}




    return (
        <div>
          
          <div className="hero min-h-[70vh] bg-gray-100">
        <div className="hero-content flex-col">
         <h2 className="text-black  text-3xl font-bold"> Login Now </h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
         <form onSubmit={handelogin} >
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
                <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                <label className="label">
               <a href="#" className="label-text-alt link link-hover font-bold ">Forgot password?</a>
                 </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
         </form>


{
  loginError && <p> {loginError} </p>
}

{

  seccess && <p> {seccess} </p>
}

         <p className=" font-semibold "> New Here? Please <Link to={"/registation"}>  <button className="uppercase ml-2 underline font-extrabold" > Register</button> </Link> </p>

         <div className="text-center  p-1 items-center text-white rounded-sm"> <button className=" items-start text-blue-400 " onClick={handelGoogleSignWith} 
         > google </button> </div>
            </div>
          </div>
      
         
        </div>
      </div>





        </div>
    );
};

export default Login;