import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../../assets/LogoJEV.png"
import "../Login/style.css"
import { useState } from "react"
import axios from "axios"
function signUp() {
const navigate= useNavigate()
    const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [phone , setPhone] = useState("")
  const [name , setName] = useState("")
const signUp = ()=>{
  console.log(email)
  console.log(password)
  console.log(phone)
  console.log(name)
  axios.post("http://localhost:8000/api/user",{
  email
  ,password 
  ,phone
  ,name
  })
  .then(data=>{
console.log(data)
navigate("/home")
  }).catch(
    err=>console.log(err.response.data)
    )

}
  
  return (
    <>
     
      <div className={` bgAll flex min-h-full h-[100vh] w-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8`}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
              </label>
              <div className="mt-2">
                <input
                value={name}
                 onChange={(e)=>{setName(e.target.value)}}
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-[#0078aa] pl-[10px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0078aa] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

     <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                  id="Email"
                  name="Email"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-[#0078aa] pl-[10px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0078aa] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
 <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Phone
              </label>
              <div className="mt-2">
                <input
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                  id="number"
                  name="number"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-[#0078aa] pl-[10px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0078aa] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#0078aa] hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-[#0078aa] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[10px] focus:ring-2 focus:ring-inset focus:ring-[#0078aa] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
              onClick={signUp}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#b9f7f9] px-3 py-1.5 text-sm font-bold leading-6 transition-all duration-[2s
                ] text-[#0078aa] shadow-sm hover:bg-[#0078aa] hover:text-[#b9f7f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
           <p className="mt-10 text-center text-sm text-gray-500">
            Already have an Account?  
            <NavLink to={"/"} className=" leading-6 font-bold text-[#0078aa]">
               SignUp
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}


export default signUp