"use client"

import Link from 'next/link';
import React from 'react';
import profile from '../../../assets/user.png'
import Image from 'next/image';
import NavLinks from './NavLinks';
import { authClient } from '@/lib/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;
    


    const links = <>
        <NavLinks href={'/'} className="text-red-600">Home</NavLinks>
        <NavLinks href={'/about'}>About</NavLinks>
        <NavLinks href={'/career'}>Career</NavLinks>
    </>
    return (
        <div>
            <div className="navbar container mx-auto bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end'>
                    {isPending ? <span className="loading loading-spinner loading-xl"></span>
                        : user ? <div className="navbar-end flex items-center gap-5">
                            <h2 >Hollow {user?.name}</h2>
                            <Image
                                src={user?.image ?? profile}
                                alt='profile'
                                height={60}
                                width={60}
                            ></Image>
                            <Link className='btn bg-gray-400 font-bold' onClick={async () => await authClient.signOut()} href={'/login'}>Log Out</Link>

                        </div>
                            :
                            <Link className='bg-gray-400 font-bold btn' href={'/login'}>Lon In</Link>}
                </div>


            </div>
        </div>
    );
};

export default Navbar;