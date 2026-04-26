const catagity = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories =await catagity();
  console.log(categories);

  
  return (
    <div className="grid grid-cols-12 max-w-5xl container mx-auto">
      <div className="col-span-2">
        <p className="p-2 font-semibold">Categories</p>
        <ul className="flex flex-col gap-2 bg-gray-50 p-4 rounded-xl">
          {categories.map((item) => (
            <li className=" font-semibold text-sm text-center bg-amber-50 p-2" key={item.category_id}>{item.category_name}</li>
          ))}
        </ul>
      </div>

      <div className="col-span-6">
        <p>bb</p>
      </div>
      <div className="col-span-2">
        <p>cc</p>
      </div>
    </div>
  );
}
