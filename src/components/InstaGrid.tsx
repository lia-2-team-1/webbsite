import { InstaType } from "./News";

interface InstaGridPops {
  posts: InstaType[];
}

export default function InstaGrid({ posts }: InstaGridPops) {
  return (
    <div className="lg:w-[1200px] md:w-[90%] justify-center flex flex-col flexwrap md:flex-row  gap-10 py-5 mx-auto">
      {posts.map((insta: InstaType) => {
        const mediaUrl = insta.mediaUrl || "./public/tif-hero.jpg";
        const shortCaption =
          insta.caption.split(" ").slice(0, 3).join(" ") +
          (insta.caption.split(" ").length > 3 ? ".." : "");
        const instagramLink = `https://www.instagram.com/p/${insta.id}/`;
        
        return (
          <div
            key={insta.id}
            className=" relative w-full lg:w-1/4 md:w-1/2 p-2 mx-auto"
          >
            {" "}
            <figure className="relative w-full">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img
                src={mediaUrl}
                alt={insta.caption}
                className="h-auto w-[80%] mx-auto md:w-full"
              />{" "}
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Läs mer på Instagram"
              >
                <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sandybrown text-lg font-bold z-20 p-2 text-center w-full">
                  {shortCaption}
                </h3>
              </a>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
