import { Eye, Flame, Star } from "lucide-react";
import Image from "next/image";

export default function NewsCard({ news }) {
  const {
    title,
    thumbnail_url,
    image_url,
    details,
    author,
    rating,
    total_view,
    others_info,
  } = news;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">

      {/* Image */}
      <Image
        src={thumbnail_url || image_url}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">

        {/* Top Meta */}
        <div className="flex justify-between items-center text-xs mb-2">
          <div className="flex items-center gap-2">
            {others_info?.is_trending && (
              <span className="flex items-center gap-1 text-red-500 font-medium">
                <Flame size={14} /> Trending
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-yellow-500 font-medium">
            <Star size={14} />
            {rating?.number}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {title}
        </h2>

        {/* Details */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-grow">
          {details}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={author?.img}
            alt={"Author Image"}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border"
          />

          <div className="text-xs">
            <p className="font-medium text-gray-800">
              {author?.name || "Unknown"}
            </p>
            <p className="text-gray-500">
              {author?.published_date
                ? new Date(author.published_date).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t text-xs">
          <div className="flex items-center gap-1 text-gray-500">
            <Eye size={16} /> {total_view || 0}
          </div>

          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
            {rating?.badge}
          </span>
        </div>
      </div>
    </div>
  );
}