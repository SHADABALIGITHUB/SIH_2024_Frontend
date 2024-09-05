import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";
import "./custom.css";
import axiosInstance from '../../../lib/axiosInstance';

const personalSchema = z.object({
    name: z.string().min(1, "Cannot be empty!").max(30, "Cannot be more than 30 characters"),
    email: z.string().min(1, "Cannot be empty!").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        , "Must be a valid email!"),
    department: z.string().min(1, "Cannot be empty!").max(50, "Cannot be more than 50 characters long!"),
    institute: z.string().min(1, "Cannot be empty!").max(100, "Cannot be more than 50 characters long!"),
    experience: z.object({
        role: z.string().min(1, "Cannot be empty!").max(50, "Cannot be more than 50 characters long!"),
        org: z.string().min(1, "Cannot be empty!").max(50, "Cannot be more than 50 characters long!"),
        description: z.string().max(500, "Cannot be more than 500 characters long!").optional(),
        start: z.string().optional(),
        end: z.string().optional()
    }).optional()
})

const FacultyPersonal = () => {
    const [loading,setLoading] = useState(false);
    const [theme, setTheme] = useState("light");
    const [experiences, setExperiences] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        institute: ""
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(personalSchema),
    })

    const handleAddExperience = () => {
        setExperiences([...experiences, {
            role: "",
            org: "",
            description: "",
            start: "",
            end: ""
        }])
    }

    const handleDeleteExperience = (index_remove) => {
        let temp_exp = [...experiences].filter((exp,index)=>{
            return index_remove!=index;
        });
        setExperiences(temp_exp);
    }

    const handleFormDataChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleExpChange = (index, e) => {
        let temp_exp = [...experiences];
        temp_exp[index][e.target.name] = e.target.value;
        setExperiences(temp_exp);
    }


    // NEED TO IMPLEMENT
    const onSubmit = () => {

    }


    // NEED TO IMPLEMENT
    const fetchData = async () => {
        try {
            console.log(document.cookie.token)
            const fid = axiosInstance.get("/decode-token",{headers:{Authorization:document.cookie.token}})
            .then(data => { console.log(data); return data; })
            .catch(err => {console.log(err)});
            // const res = await axiosInstance.get("/api/faculty/meta",{params:{fid:}})
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className={`flex w-full h-full ${theme}`}>
            <div className={`h-[100vh] w-[30vw] bg-sky-600 flex flex-col justify-center items-center shadow-inner max-md:hidden text-center`}>
                <strong className='text-4xl font-extrabold text-white mb-4'>Welcome to UpRaisal</strong>
                <p className='text-sm font-semibold text-sky-200'>Streamlining the whole appraisal process</p>
            </div>
            <div className={`flex flex-col justify-center items-center h-[100vh] w-[68vw] max-md:w-full overflow-y-auto overflow-x-hidden transition ease`}>
                <p className='text-2xl font-bold my-2'>Verify Your Details</p>
                <div className='h-[90%] w-fit p-4 mb-4'>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full mb-4'>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div>
                                <label for="email-address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <div class="relative w-[15vw] max-md:w-full">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input {...register("email")} type="text" name='email' id="email-address" class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? "border-red-500" : ""}`} value={formData.email} onChange={(e) => handleFormDataChange(e)} />
                                </div>
                                {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <div class="relative w-[15vw] max-md:w-full mb-2">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-500 dark:text-gray-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                    <input {...register("name")} type="text" name='name' id="name" class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? "border-red-500" : ""}`} value={formData.name} onChange={(e) => handleFormDataChange(e)} />
                                </div>
                                {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Department</label>
                                <div class="relative w-[15vw] max-md:w-full mb-2">
                                    <input {...register("department")} type="text" name='department' id="department" class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? "border-red-500" : ""}`} value={formData.department} onChange={(e) => handleFormDataChange(e)} />
                                </div>
                                {errors.department && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.department.message}</p>}
                            </div>

                            <div>
                                <label for="institute" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Institute</label>
                                <div class="relative w-[15vw] max-md:w-full mb-2">
                                    <input {...register("institute")} type="text" name='institute' id="institute" class={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? "border-red-500" : ""}`} value={formData.institute} onChange={(e) => handleFormDataChange(e)} />
                                </div>
                                {errors.institute && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.institute.message}</p>}
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Professional Experience <span className='text-sm'>( Optional )</span></h2>
                        {experiences.map((experience, index) => (
                            <div key={index} className="mb-4">

                                <label htmlFor={`role-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                <div className="relative w-full mb-2">
                                    <input
                                        type="text"
                                        id={`role-${index}`}
                                        name="role"
                                        value={experience.role}
                                        onChange={(e) => handleExpChange(index, e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Software Engineer"
                                    />
                                </div>

                                <label htmlFor={`organization-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization</label>
                                <div className="relative w-full mb-2">
                                    <input
                                        type="text"
                                        id={`organization-${index}`}
                                        name="org"
                                        value={experience.org}
                                        onChange={(e) => handleExpChange(index, e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Company Name"
                                    />
                                </div>

                                <label htmlFor={`description-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                                <div className="relative w-full mb-2">
                                    <textarea
                                        id={`description-${index}`}
                                        name="description"
                                        value={experience.description}
                                        onChange={(e) => handleExpChange(index, e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Describe your role..."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <label htmlFor={`startDate-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                                <div className="relative w-full mb-2">
                                    <input
                                        type="date"
                                        id={`startDate-${index}`}
                                        name="startDate"
                                        value={experience.startDate}
                                        onChange={(e) => handleExpChange(index, e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <label htmlFor={`endDate-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                                <div className="relative w-full mb-2">
                                    <input
                                        type="date"
                                        id={`endDate-${index}`}
                                        name="endDate"
                                        value={experience.endDate}
                                        onChange={(e) => handleExpChange(index, e)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={()=>handleDeleteExperience(index)}
                                    className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-2"
                                >
                                    Delete Experience
                                </button>

                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddExperience}
                            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mr-2"
                        >
                            Add Experience
                        </button>
                        <button
                            type="submit"
                            className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                        >
                            {loading && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle animate-spin h-5 w-5 mr-3 flex"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>}
                            {!loading && "Submit"}
                        </button>

                    </form>
                </div>
            </div>
        </div >
    )
}

export default FacultyPersonal