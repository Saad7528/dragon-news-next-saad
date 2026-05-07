import Image from "next/image";
import LeftSideBar from "../component/homepage/news/LeftSideBar";
import RightSideBar from "../component/homepage/news/RightSideBar";
import News from "../component/homepage/news/News";


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
export default async function Home() {
  const categories = await getCategories();

  const news = await getNewsByCategoryId('01');
  console.log(news);
  return (

    // Left Section
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <h2 className="text-3xl font-bold  ">All cat</h2>
        <LeftSideBar categories={categories} activeId={"01"} />
      </div>

      {/* News Section   */}
      <div className="col-span-6">
        <h2 className="text-3xl font-bold bg-pink-500">All cat</h2>
        <div className="space-y-10 mt-5">
          {
            news.map(news => <News key={news.category_id} news={news}></News>)
          }
        </div>
      </div>

      {/* Right section */}
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}
