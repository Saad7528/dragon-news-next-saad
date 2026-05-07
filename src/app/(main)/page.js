import Image from "next/image";


const getCategories = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data.news_category;
}
export default async function Home () {
  const categories = await getCategories();
  console.log(categories, "categories");
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <h2 className="text-3xl font-bold  ">All cat</h2>
        <ul className=" ">
          {categories.map(cat =>
            <li className="bg-gray-300  py-2 text-center font-bold my-2" key={cat.category_id}>{cat.category_name}</li>
          )}
        </ul>
      </div>

      <div className="col-span-6">
        <h2 className="text-3xl font-bold bg-pink-500">All cat</h2>
      </div>

      <div className="col-span-3">
        <h2 className="text-3xl font-bold bg-purple-400">All cat</h2>
      </div>
    </div>
  );
}
