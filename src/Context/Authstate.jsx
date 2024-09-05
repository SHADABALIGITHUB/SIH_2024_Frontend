import React, { useState } from 'react'
import Authcontext from './Authcontext'

const Authstate = ({children}) => {

    const [isnotLogged,setLogged] = useState(false)
    const [role,setRole] = useState("")

  return (
    <>
        <Authcontext.Provider value={{isnotLogged,setLogged,role,setRole}}>
            {children}
        </Authcontext.Provider>
    </>
  )
}

export default Authstate