import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;
  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      {/* Author Info */}
      <div className="flex bg-base-200 items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover h-48 sm:h-56 md:h-64"
        />
      </figure>

      {/* Title + Details */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold leading-tight">{title}</h2>
        <p className="text-sm text-gray-600">
          {details.slice(0, 160)}...
          <span className="text-orange-500 font-semibold cursor-pointer">
            Read More
          </span>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 text-sm">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 ml-1">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
