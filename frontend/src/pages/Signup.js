import React, {useState} from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

const Signup = () => {

    const[showPassword , setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "", 
        password : "", 
        confirmPassword: "",
        profilePic: "" 
    }   )

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
    
    const handleSubmit = (e) => {
        e.preventDefault();  
    }
    
    console.log(
    "data login", data
    )

  return (
    <section id='signup'>
        <div className='mx-auto container py-5'>
            <div className='bg-white p-5  w-full  max-w-md  mx-auto  '>
                <div className='w-20 h-20 mx-auto '>
                    <div>
                    <img src={loginIcons} alt='login icons' />
                    </div>
                    <div className='text-xs'>
                        Upload Photo
                    </div>
                      
                </div>

                 <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                 <div className='grid '>
                        <label>
                            Name:
                        </label>
                        <div className='bg-slate-200 p-2'>
                        <input 
                        type='text' 
                        placeholder='Enter your name'
                        name='name'
                        onChange={handleOnChange}
                         value={data.name}
                        className='w-full h-full outline-none bg-transparent'  />
                        </div>
                    </div>

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
                        
                    </div>
                    <div>
                        <label>
                            Confirm Password:
                        </label>
                        <div  className='bg-slate-200 flex p-2 '>
                            <input 
                            type={showConfirmPassword ? "text" : "password"}
                            name='confirmPassword'
                            onChange={handleOnChange}
                            value={data.confirmPassword}
                            placeholder='Enter Confirm Password' className='w-full h-full outline-none bg-transparent' />
                            <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            <span>
                                {
                                    showConfirmPassword ? (<FaEyeSlash />): (<FaEye />)
                                }
                                
                                
                            </span>
                            </div>
                        </div>
                        
                    </div>
                    
                    

                    <button className='bg-red-600 hover:bg-red-700 rounded-full text-white px-6 py-2 w-full max-w-[150px] hover:scale-110 transition-all mx-auto block mt-6'>
                        Sign up 
                    </button>
                 </form>
                 <p className='my-4 flex justify-center'>Already have an account ? <Link to={'/login'} className=' text-red-600 hover:text-red-700 hover:underline'> Login </Link></p>
            </div>

        </div>
    </section>
  )
}

export default Signup