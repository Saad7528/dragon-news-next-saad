"use client"
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

    }

    return (
        <div className='container mx-auto bg-slate-200 min-h-[80vh] flex justify-center items-center'>
            <div className='rounded-xl bg-slate-50 p-6 '>
                <h2 className='text-3xl font-bold'>Login Your Account</h2>

                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input 
                        type="text"
                        name="email"
                        className="input" 
                        placeholder="Your Email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Password</legend>
                        <input 
                        type="text"
                        name="password"
                        className="input" 
                        placeholder="Your Password" />
                    </fieldset>
                    <button className='btn bg-slate-900 text-white font-bold w-full mt-4'>Login</button>
                    <p className='text-center mt-2'>Have no account? <Link href={'/register'} className='text-blue-900'>Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;