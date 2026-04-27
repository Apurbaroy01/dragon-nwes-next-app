import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { newsDetails } from "@/lib/data";

const NewsPage = async ({ params }) => {
    const { id } = await params;

    const news = await newsDetails(id);

    const {
        title,
        image_url,
        details,
        author,
    } = news;

    return (
        <div className="max-w-11/12 mx-auto bg-gray-100 border rounded-lg p-4">

            {/* Image */}
            <div className=" w-full h-64 rounded-lg overflow-hidden">
                <Image
                    src={image_url}
                    alt={title}
                    width={500}
                    height={300}
                    loading="lazy"
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-4 space-y-3">

                {/* Title */}
                <h1 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                    {title}
                </h1>

                {/* Meta + Details */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-medium text-gray-700">
                        {new Date(author?.published_date).toDateString()}
                    </span>{" "}
                    | {details}
                </p>
            </div>

            {/* Button */}
            <div className="mt-6">
                <Link href={`/category/${news.category_id}`}>
                    <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                        <ArrowLeft size={16} />
                        All news in this category
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NewsPage;