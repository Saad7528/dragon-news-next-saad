"use client"
import { authClient } from '@/lib/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(errors);


    const handleSubmitFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error);

    }

    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <div className='container mx-auto bg-slate-200 min-h-[80vh] flex justify-center items-center'>
            <div className='rounded-xl bg-slate-50 p-6 '>
                <h2 className='text-3xl font-bold'>Login Your Account</h2>

                <form onSubmit={handleSubmit(handleSubmitFunc)}>
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
                        <span className='absolute top-5 right-5' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />
                        }</span>

                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                    </fieldset>
                    <button className='btn bg-slate-900 text-white font-bold w-full mt-4'>Login</button>
                    <p className='text-center mt-2'>Have no account? <Link href={'/register'} className='text-blue-900'>Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;