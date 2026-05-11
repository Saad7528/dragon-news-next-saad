import RightSideBar from '@/app/component/homepage/news/RightSideBar';
import { getNewsDetailsById } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';


export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);

    return {
        title: news.title,
  description: news.details
    }
  
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    console.log("id -", news);
    return (
        <div className='grid max-w-7xl mx-auto p-4 md:p-6 font-sans gap-8  grid-cols-12'>
            <div className="col-span-9">

            <div className="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-[#403F3F]">Dragon News Home</h2>

                {/* ডায়নামিক ইমেজ (image_url) */}
                <figure className="mb-6 w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                    <img
                        src={news.image_url}
                        alt={news.title}
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* ডায়নামিক হেডলাইন (title) */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#403F3F] leading-snug mb-5">
                    {news.title}
                </h1>

                {/* ডায়নামিক ডিটেইলস (details) */}
                <div className="text-[#706F6F] text-[15px] leading-relaxed space-y-4 mb-8">
                    <p>
                        {news.details}
                    </p>
                </div>

                {/* ক্যাটাগরি বাটন */}
                <div className="text-left">
                    
                    <Link href={`/category/${news.category_id}`}>
                    <button className="flex items-center gap-2 bg-[#d81b60] text-white font-medium px-7 py-3 rounded-xl shadow-md hover:bg-[#c2185b] transition-colors duration-300">
                        <FiArrowLeft size={18} />
                        <span>All news in this category</span>
                    </button>
                    </Link>
                </div>

            </div>
        </div>

        <div className=' col-span-3'>
            <RightSideBar></RightSideBar>
        </div>
        </div>
    );
};

export default NewsDetailsPage;