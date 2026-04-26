import Leftbar from "@/components/HomePage/Leftbar";
import RightSidebar from "@/components/HomePage/RightSidebar";

const catagity = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}
const getCategoriesId = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories =await catagity();
  console.log(categories);

  const categoryNews = await getCategoriesId("01");
  console.log(categoryNews);

  
  return (
    <div className="grid grid-cols-12 max-w-5xl container mx-auto">
      <div className="col-span-3">
        <p className="p-2 font-semibold text-center">Categories</p>
        <ul className="flex flex-col gap-2 p-2 rounded-xl">
          {categories.map((item) => (
            <Leftbar key={item.category_id} item={item} activeid={"01"} />
          ))}
        </ul>
      </div>

      <div className="col-span-6">
        <p className="mb-4 text-center">All News</p>
      </div>
      <div className="col-span-3">
        <p className="mb-4 text-center">Login with</p>
        <RightSidebar />
      </div>
    </div>
  );
}
