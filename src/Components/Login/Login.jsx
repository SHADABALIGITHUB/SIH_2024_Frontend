import React, { useContext, useState } from "react";
import Inputs from "../ui/Inputs";
import google from "../../assets/Google.png";
import Authcontext from "../../Context/Authcontext";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import axiosInstance from "../../lib/axiosInstance";

const Login = () => {
  
  const { isnotLogged, setLogged,role } = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [role,setRole] = useState('')
  const [wrong, setWrong] = useState("border-none");
  const [instituteId, setInstitueId] = useState("");
  const [department, setDepartment] = useState("");


  const navigate = useNavigate()

  const handleRegister = async() => {
    if (confirmPassword === password) {
        
      const admindata = ({
        name:username,
        email:email,
        password:password,
        instituteId:instituteId,
      })
      const facultydata = ({
        name:username,
        email:email,
        password:password,
        instituteId:instituteId,
        department:department
      })

      alert(username+email+password+instituteId)

      // Register api call
      if(role === "Admin"){
        const data = JSON.stringify(admindata)
        await axios.post('http://0.0.0.0:3000/api/admin/auth/register',data).then((res)=>{
          console.log(res)
        }).then(()=>{
          navigate('/otp')
        }).catch((err)=>{
          console.log("Error message:-->>"+err)
        })
      }
      else if(role === "Faculty"){
        const data  = JSON.stringify(facultydata)
        await axios.post('http://0.0.0.0:3000/api/faculty/auth/register',facultydata).then((res)=>{
          console.log(res)
        }).then(()=>{
          navigate('/otp')
        }).catch((err)=>{
          console.log("Error message:-->>"+err)
        })
      }

      

    } else {
      setWrong("border animate-shake animate-twice animate-duration-1000");
      setTimeout(() => {
        setWrong("border-none ");
      }, 1000);
    }
  };

  const handlelogin = async() => {
    // login api call

    const data = {
      email:email,
      password:password
    }

    if(role === 'Admin'){
      await axios.post('http://0.0.0.0:3000/api/admin/auth/login',data).then((res)=>{
        console.log(res)
        
      }).then(()=>{
        navigate('/dashboard')
      }).catch((err)=>{
        console.log(err)
      })
    }
    else if(role === "Faculty"){
      await axios.post('http://0.0.0.0:3000/api/faculty/auth/login',data).then((res)=>{
        console.log(res)
      }).then(()=>{
        navigate('/tech')
      }).catch((err)=>console.log(err))
    }

  
    
  };

  return (
    <>
      {/* login form */}
      <div
        className={`w-[70%] relative  min-h-[80%] max-h-[95%] h-auto bg-card border-background/20 border-2 rounded-lg overflow-hidden flex shadow-2xl shadow-background`}
      >
        <div
          className={`md:flex flex-col justify-center items-center gap-5 rounded-xl bg-card md:w-[50%] w-full md:py-12 py-6 ${
            isnotLogged ? "hidden" : "flex"
          }`}
        >
          <h1 className="text-3xl font-semibold font-Google1 text-mytext">
            {role} Login{" "}
          </h1>

          <div className="flex flex-col gap-6">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                icon={HiMail}
                rightIcon={HiMail}
                placeholder="name@gmail.com"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                icon={RiLockPasswordFill}
                placeholder="password"
              />
            </div>

            {/* <Inputs value={email} Changes={(e)=>setEmail(e.target.value)} id={"email"} pholder='Email'/> */}
            {/* <Inputs value={password} Changes={(e)=>setPassword(e.target.value)} id='password' pholder='Password' /> */}

            <p className="text-mytext cursor-pointer">Forget Password?</p>

            <div className="flex gap-2 justify-center items-center border-border border cursor-pointer p-1 rounded">
              <img src={google} alt="" className="h-5 inline" />
              <span className="text-mytext">SignIn with Google</span>
            </div>
            <button
              onClick={handlelogin}
              className="bg-bg_btn p-2 rounded bg-btnbg text-btntext px-10 font-bold"
            >
              SIGN IN
            </button>
          </div>
          <p className="flex md:hidden">
            Don't have account
            <span
              className="text-blue-600 cursor-pointer font-bold"
              onClick={() => {
                setLogged(true);
              }}
            >
              {" "}
              SignUp{" "}
            </span>
          </p>
        </div>

        {/*  */}
        <div
          className={`absolute w-[50%] ${
            isnotLogged
              ? "left-0 rounded-r-[64px] "
              : "right-0 rounded-l-[64px] "
          } bg-primary z-10 hidden md:flex flex-col justify-center items-center text-mytext h-full  gap-5 transition-[border-radius] duration-[100ms] ease-in-out `}
        >
          <h1 className="font-normal text-[2.1rem] font-Google1 cursor-pointer">
            {isnotLogged ? "Have An Account!!!" : "Create New Account"}
          </h1>
          <p className="cursor-pointer">
            {isnotLogged ? "Have an account" : "New Admin?"}
          </p>
          <button
            className="capitalize text-btntext bg-btnbg rounded shadow-lg border-border border py-1 px-4"
            onClick={() => {
              isnotLogged ? setLogged(false) : setLogged(true);
            }}
          >
            {isnotLogged ? "Sign In" : "SignUp"}
          </button>
        </div>

        {/* signup form */}
        <div
          className={`md:w-[50%] h-auto w-[100%] md:flex flex-col justify-center items-center gap-5 rounded-xl bg-card py-12 ${
            isnotLogged ? "flex" : "hidden"
          }`}
        >
          <h1 className=""></h1>
          <h1 className="text-3xl text-mytext font-semibold font-Google1">Sign Up</h1>

          <div action="" className="flex w-3/4 flex-col gap-2">
            {/* <Inputs id={"User"} value={username} Changes={(e)=>setUsername(e.target.value)} pholder='UserName'/>
                <Inputs id={"email"} value={email} Changes={(e)=>setEmail(e.target.value)} pholder='Email'/>
                <Inputs id={"InstituteId"} value={instituteId} Changes={(e)=>setInstitueId(e.target.value)} pholder='Institute Id'/>
                <Inputs id={"Department"} value={department} Changes={(e)=>setDepartment(e.target.value)} pholder='Department'/>
                <Inputs id={"password"} value={password} Changes={(e)=>setPassword(e.target.value)} pholder='Password'/>
                <Inputs id={"confirmPassword"} wrong={wrong} value={confirmPassword} Changes={(e)=>setConfirmPassword(e.target.value)} pholder='Confirm Password'/> */}

            <div className="mb-2 block ">
              
              <TextInput
                id="Admin"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name "
                required
              />
            </div>

            <div className="mb-2 block">
              
              <TextInput
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-2 block">
              
              <TextInput
                id="InstituteId"
                value={instituteId}
                type="text"
                onChange={(e) => setInstitueId(e.target.value)}
                placeholder="Institute Id"
                required
              />
            </div>

            {
              (role==="Faculty")?
              <div className="mb-2 block">
              
              <TextInput
                id="Department"
                // value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Department"
                
              />
            </div>:""
            }
            

            <div className="mb-2 block">
              
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-2 block">
              
              <TextInput
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={`${wrong} rounded-lg border-red-700`}
                required
              />
              {!wrong && <p className="text-red-500 text-sm">Passwords do not match</p>}
            </div>

            <div className="flex gap-2 justify-center items-center border-gray-500 border cursor-pointer p-1 rounded">
              <img src={google} alt="" className="h-5 inline" />
              <span className="text-mytext">SignIn with Google</span>
            </div>
            <button
              onClick={handleRegister}
              className="bg-btnbg p-2 rounded text-btntext hover:bg-btnbg/90 font-bold"
            >
              SIGN IN
            </button>
            <p className="flex md:hidden">
              Have Account{" "}
              <span
                className="text-blue-600 cursor-pointer font-bold"
                onClick={() => {
                  setLogged(false);
                }}
              >
                {" "}
                SignIn{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
