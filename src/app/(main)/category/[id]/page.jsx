import LeftSideBar from '@/app/component/homepage/news/LeftSideBar';
import News from '@/app/component/homepage/news/News';
import RightSideBar from '@/app/component/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';
  

const NewCategoryPage = async ({params}) => {
    const {id} = await params;
    console.log(id);

    const categories = await getCategories();

  const news = await getNewsByCategoryId(id);
    return (
         // Left Section
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <h2 className="text-3xl font-bold  ">All cat</h2>
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      {/* News Section   */}
      <div className="col-span-6">
        <h2 className="text-xl font-bold mb-4 text-[#403F3F]">Dragon News Home</h2>
      <div>
        {
          news.length > 0 ? (news.map(n => <News key={n._id} n={n}></News>)) : (<h2 className='text-center text-3xl font-bold'>No News Found</h2>)
        }

      </div>
      </div>

      {/* Right section */}
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
    );
};

export default NewCategoryPage;