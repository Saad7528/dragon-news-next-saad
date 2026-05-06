'use client'
import React from 'react';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-base-200 text-base-content">
            <div className="hero-content text-center flex-col">

                <div className="flex justify-center mb-4 animate-bounce">
                    <FaExclamationTriangle className="text-8xl text-error drop-shadow-lg" />
                </div>

                <div className="max-w-md">

                    <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                        404
                    </h1>

                    <h2 className="text-3xl font-bold mb-4">
                        উফ! পৃষ্ঠাটি পাওয়া যায়নি
                    </h2>

                    <p className="py-4 text-lg opacity-80">
                        আপনি যে পৃষ্ঠাটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ আছে।
                    </p>


                    <div className="mt-6">
                        <button
                            className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition-transform duration-200"
                            onClick={() => window.location.href = '/'}
                        >
                            <FaHome className="mr-2 text-xl" />
                            হোম পেজে ফিরে যান
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;