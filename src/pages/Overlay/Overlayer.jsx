

import { Outlet } from 'react-router-dom'

const Overlayer = () => {


  return (
    <>

        <div className="flex h-screen justify-center items-center bg-[#006fde]/60">
           <Outlet/>
        </div>


      
    </>
  )
}

export default Overlayer
