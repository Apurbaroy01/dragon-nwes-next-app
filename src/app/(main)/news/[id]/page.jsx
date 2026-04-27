import Leftbar from "@/components/HomePage/Leftbar";
import NewsCard from "@/components/HomePage/NewsCard";
import RightSidebar from "@/components/HomePage/RightSidebar";
import { catagity, getCategoriesId } from "@/lib/data";


export default async function Home({ params }) {

  const { id } =await params;

  const categories = await catagity();

  const categoryNews = await getCategoriesId(id);


  return (
    <div className="grid grid-cols-12 max-w-5xl container mx-auto">
      <div className="col-span-3">
        <p className="p-2 font-semibold text-center">Categories</p>
        <ul className="flex flex-col gap-2 p-2 rounded-xl">
          {categories.map((item) => (
            <Leftbar key={item.category_id} item={item} activeid={id} />
          ))}
        </ul>
      </div>

      <div className="col-span-6">
        <p className="mb-4 text-center">All News</p>
        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-1 p-10">
          {categoryNews.map((news) => (
            <NewsCard key={news._id} news={news} />
          ))}
        </div>

      </div>
      <div className="col-span-3">
        <p className="mb-4 text-center">Login with</p>
        <RightSidebar />
      </div>
    </div>
  );
}
