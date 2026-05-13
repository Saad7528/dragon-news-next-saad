"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(errors);

    
    const handleSubmitFunc = (data) => {
        console.log(data);
       
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Password</legend>
                        <input
                            type="text"
                            {...register("password", { required: "Enter your Password" })}
                            className="input"
                            placeholder="Your Password" />
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