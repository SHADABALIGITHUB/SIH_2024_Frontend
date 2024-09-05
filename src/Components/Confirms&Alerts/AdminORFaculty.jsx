
import { Button } from "flowbite-react";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from "../../assets/Index.js";
import { useNavigate } from "react-router-dom";
import Authcontext from "../../Context/Authcontext.js";


const AdminORFaculty = () => {
             
  const {role,setRole} = useContext(Authcontext)

    const [isFaculty, setIsFaculty] = useState(false);
    const [admin, setAdmin] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
      if(role===""){
        navigate(`/confirm`)
      }else{
        navigate(`/auth/${role}`)
      }
    },[role])
    


  return (
      <div className='overflow-hidden flex justify-center flex-col md:flex-row items-center gap-10 fixed h-screen w-screen bg-background transition'>

        <div className='w-full h-1/2 flex flex-col gap-5 md:w-1/2 md:h-full  justify-center items-center cursor-pointer hover:bg-card'>

        <img src={Image.AdminLightSvg} alt="" className="w-96 h-96 bg-teal-200 rounded-xl shadow-border shadow-2xl" />

        


        

       


        <Button size="xl" outline gradientDuoTone="greenToBlue" onClick={()=>{setRole("Admin")}} > <FaShieldAlt className='mr-2 h-5 w-5'  />  Admin</Button>

       



        </div>

        <div className='w-full h-1/2 flex flex-col  md:w-1/2 md:h-full justify-center items-center cursor-pointer hover:bg-card gap-5'>

        <img src={Image.FacultyLightSvg} alt="" className="w-96 h-96 bg-orange-200 rounded-lg shadow-border shadow-2xl"  />
          
       

        <Button size="xl" outline gradientDuoTone="greenToBlue" onClick={()=>{setRole("Faculty")}}>   <IoMdSchool className='mr-2 h-5 w-5'  /> Faculty </Button>
             
       
        </div>

      </div>

  )
}


export default AdminORFaculty;