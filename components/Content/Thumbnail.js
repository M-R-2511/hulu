import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef, memo } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ item }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer 
    transition duration-300 ease-in 
    transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
          `
          ${BASE_URL}${item.poster_path || item.backdrop_path}
        `
        }
        alt={item.title}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2
          className="mt-1 text-2xl text-white 
        transition-all duration-100 
        group-hover:font-bold ease-in-out"
        >
          {item.title || item.original_name}
        </h2>
        <p
          className="flex items-center opacity-0 
        group-hover:opacity-100 transition duration-300"
        >
          {item.media_type && item.media_type}
          {item.release_date && item.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {item.vote_count}
        </p>
      </div>
    </div>
  );
});

export default memo(Thumbnail);
