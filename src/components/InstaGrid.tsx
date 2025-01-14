import { InstaType } from "./News";

interface InstaGridPops {
  posts: InstaType[];
}

export default function InstaGrid({ posts }: InstaGridPops) {
  return (
    <div className="lg:w-[1200px] justify-center flex flex-col lg:flex-row gap-10 py-5 mx-auto">
      {posts.map((insta: InstaType) => {
        console.log("mediaurl ", insta.mediaUrl);

        const mediaUrl = insta.mediaUrl || "./public/tif-hero.jpg";

        const shortCaption =
          insta.caption.split(" ").slice(0, 3).join(" ") +
          (insta.caption.split(" ").length > 3 ? ".." : "");

        return (
          <div className="flex-nowrap relative w-full lg:w-1/4 md:w-1/2 p-2 mx-auto">
            {" "}
            <figure key={insta.id} className="relative w-full">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img
                src={mediaUrl}
                alt={insta.caption}
                className="lg:w-full h-auto w-[80%] mx-auto"
              />
              <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sandybrown text-lg font-bold z-20 p-2 text-center">
                {shortCaption}
              </h3>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
