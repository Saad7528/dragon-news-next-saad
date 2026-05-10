import React from 'react';
import { FiBookmark, FiShare2, FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const News = ({n}) => {
    console.log(n);
  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      
      <div className="card w-full bg-base-100 border border-gray-200 rounded-lg shadow-sm">
        <div className="bg-[#F3F3F3] px-5 py-4 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full">
                {/* Placeholder image for author */}
                <img src={n.author.img} alt="Author" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#403F3F] leading-tight">{n.author.name}</h4>
              <p className="text-sm text-[#706F6F]">{n.author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-4 text-[#706F6F]">
            <button className="hover:text-gray-800 transition-colors">
              <FiBookmark size={20} />
            </button>
            <button className="hover:text-gray-800 transition-colors">
              <FiShare2 size={20} />
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body p-5">
          <h3 className="card-title text-xl font-bold text-[#403F3F] leading-snug mb-3">
            {n.title}
          </h3>

          <figure className="mb-4 w-full">
            {/* Placeholder image for news thumbnail */}
            <img
              src={n.image_url}
              alt="News Thumbnail"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </figure>

          <p className="text-[#706F6F] text-sm leading-relaxed mb-1">
            {n.details}
          </p>
          
          <Link href={`/news/${n._id}`}>
          <button className="text-[#FF8C47] font-semibold text-sm hover:underline mb-5 text-left w-fit">
            Read More
          </button>
          </Link>

          {/* Card Footer (Ratings & Views) */}
          <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex text-[#FF8C47] text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-[#706F6F] font-medium ml-2">{n.rating.number}</span>
            </div>
            
            <div className="flex items-center gap-2 text-[#706F6F]">
              <FiEye size={20} />
              <span className="font-medium">{n.total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;