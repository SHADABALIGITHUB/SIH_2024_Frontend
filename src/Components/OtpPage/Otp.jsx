import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../lib/axiosInstance'
import toast from 'react-hot-toast'

const Otp = ({ length = 6 }) => {

    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRef = useRef([])
    const [finalotp, setFinalotp] = useState()
    const navigate = useNavigate()
    const { user } = useParams();

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])

    const handleSubmit = async () => {
        const data = {
            otp: finalotp
        }

        await axiosInstance.post(`/api/${user}/auth/verify-otp`, data).then((res) => {
            toast.success("User verified successfully");
            if(user == "faculty"){
                toast.success("Login to your account")
                navigate('/auth/faculty');
            }
            else {
                toast.success("Login to your account")
                navigate("/auth/admin");
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (index, e) => {
        const value = e.target.value
        if (isNaN(value)) return

        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        const combinedOtp = newOtp.join("")
        if (combinedOtp.length === length) {
            setFinalotp(parseInt(combinedOtp))
        }

        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus()
        }
    }

    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(1, 1)

        if (index > 0 && !otp[index - 1]) {
            inputRef.current[otp.indexOf("")].focus()
        }
    }

    const handlekeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus()
        }
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-primary/50 w-full">
                <div className="bg-white/90  flex flex-col justify-center items-center md:w-[50%] w-[80%] h-[60%] rounded-lg shadow-lg">
                    <h1 className="text-3xl font-extrabold">Verify</h1>
                    <p className="">Your code has been send via your email</p>
                    <div className="my-3">
                        {/* otp boxes */}
                        {
                            otp.map((value, index) => {

                                return (
                                    <input key={index} type="text" ref={(input) => (inputRef.current[index] = input)} value={value} onChange={(e) => handleChange(index, e)} onClick={() => handleClick(index)} onKeyDown={(e) => handlekeyDown(index, e)} className={`w-[40px] h-[40px] m-[5px] p-1 text-center text-[1.2rem] shadow-md border focus:border-red-900 outline-none rounded`} />

                                )
                            })
                        }

                    </div>
                    <button onClick={handleSubmit} className="bg-primary text-gray-200 font-bold px-2 py-1 rounded">Verify</button>
                    <p className="mt-3">Didn't receive code? <span className='text-blue-500 font-semibold underline cursor-pointer'>Request code</span></p>
                </div>
            </div>
        </>
    )
}

export default Otp