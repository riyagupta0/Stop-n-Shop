import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common/index1';
import {toast } from "react-toastify"
import Context from '../context/index2';

const Login = () => {
    const[showPassword , setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "", 
        password : ""
    }   )

    const navigate = useNavigate() 

    const generalContext = useContext(Context)
    console.log("genralContext", generalContext.fetchUserDetails
    )
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((prev) =>{
            return{
                ...prev, 
                [name] :value
            }
        }
        )
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method: SummaryApi.signIn.method,
            credentials : 'include',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
        } )

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            
            navigate('/')
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    console.log(
    "data login", data
    )


  return (
    <section id='login' >
        <div className='mx-auto container py-5 '>
            <div className='bg-white p-5  w-full  max-w-md  mx-auto '>
                <div className='w-20 h-20 mx-auto '>
                    <img src={loginIcons} alt='login icons' />
                      
                </div>

                 <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid '>
                        <label>
                            Email:
                        </label>
                        <div className='bg-slate-200 p-2'>
                        <input 
                        type='email' 
                        placeholder='Enter Email'
                        name='email'
                        onChange={handleOnChange}
                         value={data.email}
                        className='w-full h-full outline-none bg-transparent'  />
                        </div>
                    </div>

                    <div>
                        <label>
                            Password:
                        </label>
                        <div  className='bg-slate-200 flex p-2 '>
                            <input 
                            type={showPassword ? "text" : "password"}
                            name='password'
                            onChange={handleOnChange}
                            value={data.password}
                            placeholder='Enter Password' className='w-full h-full outline-none bg-transparent' />
                            <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}>
                            <span>
                                {
                                    showPassword ? (<FaEyeSlash />): (<FaEye />)
                                }
                                
                                
                            </span>
                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='block ml-auto w-fit hover:underline hover:text-red-600'>
                                Forgot Password ?
                        </Link> 
                    </div>
                    

                    <button className='bg-red-600 hover:bg-red-700 rounded-full text-white px-6 py-2 w-full max-w-[150px] hover:scale-110 transition-all mx-auto block mt-6'>
                        Login
                    </button>
                 </form>
                 <p className='my-4 flex justify-center'>Don't have an account ? <Link to={'/sign-up'} className=' text-red-600 hover:text-red-700 hover:underline'> Sign up</Link></p>
            </div>

        </div>
    </section>
  )
}

export default Login