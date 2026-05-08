import LeftSideBar from '@/app/component/homepage/news/LeftSideBar';
import News from '@/app/component/homepage/news/News';
import RightSideBar from '@/app/component/homepage/news/RightSideBar';
import React from 'react';

const getCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
}

const getNewsByCategoryId = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;

}
  

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
        <h2 className="text-3xl font-bold bg-pink-500">All News</h2>
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