"use client"
import { authClient } from '@/lib/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleGitHubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }


    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn ' onClick={handleGoogleSignin}><FaGoogle />Login With Google</button>
                <button className='btn ' onClick={handleGitHubSignin}><FaGithub />Login With Google</button>
            </div>

        </div>
    );
};

export default RightSideBar;