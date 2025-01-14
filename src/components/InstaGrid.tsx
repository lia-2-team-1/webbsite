import { InstaType } from "./News";

interface InstaGridPops {
  posts: InstaType[];
}

export default function InstaGrid({ posts }: InstaGridPops) {
  return (
    <div className="lg:w-[1200px] justify-center flex flex-col lg:flex-row gap-10 py-5 mx-auto">
      {posts.map((insta: InstaType) => (
        <figure key={insta.id} className="text-center">
          <img
            src={insta.thumbnailUrl}
            alt={insta.caption}
            className="w-60 h-auto"
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            {insta.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
