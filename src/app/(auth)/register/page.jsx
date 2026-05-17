"use client"
import { authClient } from '@/lib/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(errors);
    
    const [isShowPassword, setIsShowPassword] = useState(false)



    const handleSubmitFunc = async (data) => {
        const { email, name, photo, password } = data;
        console.log(data);


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });



        console.log("res", res, "Error", error);

        if (error) {
            toast.error("User Already Exist Please Try Another Email")
        }

        if (res) {
            toast.success("SineUp Successful")
        }
    }



    return (
        <div className='container mx-auto bg-slate-200 min-h-[80vh] flex justify-center items-center'>
            <div className='rounded-xl bg-slate-50 p-6 '>
                <h2 className='text-3xl font-bold'>Register A Account</h2>

                <form onSubmit={handleSubmit(handleSubmitFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input
                            type="text"
                            {...register("name", { required: "Enter your Name" })}
                            className="input"
                            placeholder="Your Email" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Photo URL</legend>
                        <input
                            type="text"
                            {...register("photo", { required: "Enter your Photo URL" })}
                            className="input"
                            placeholder="Your Photo URL" />
                        {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input
                            type="text"
                            {...register("email", { required: "Enter your Email" })}
                            className="input"
                            placeholder="Your Email" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Your Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            {...register("password", { required: "Enter your Password" })}
                            className="input"
                            placeholder="Your Password" />
                        <span className='absolute top-5 right-5 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />
                        }</span>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                    </fieldset>
                    <button className='btn bg-slate-900 text-white font-bold w-full mt-4'>Register</button>
                    <p className='text-center mt-2'>Have an account? <Link href={'/login'} className='text-blue-900'>Login</Link></p>
                </form>
            </div>

        </div>
    );
};

export default RegisterPage;