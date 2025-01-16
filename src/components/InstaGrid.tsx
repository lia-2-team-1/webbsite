import React, { useState } from "react";
import { InstaType } from "./News";
import InstaPopup from "./InstaPopup";

interface InstaGridProps {
  posts: InstaType[];
}

export default function InstaGrid({ posts }: InstaGridProps) {
  const [selectedPost, setSelectedPost] = useState<InstaType | null>(null);

  const handlePostClick = (post: InstaType) => {
    setSelectedPost(post);
  };

  const handleClosePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <div className="lg:w-[1200px] md:w-[90%] justify-center flex flex-col flex-wrap md:flex-row gap-5 py-5 mx-auto">
        {posts.map((insta: InstaType) => {
          const mediaUrl = insta.mediaUrl || "./public/tif-hero.jpg";
          const shortCaption =
            insta.caption.split(" ").slice(0, 3).join(" ") +
            (insta.caption.split(" ").length > 3 ? ".." : "");

          return (
            <div
              key={insta.id}
              className="relative w-full lg:w-1/5 md:w-1/2 p-1 mx-auto"
              onClick={() => handlePostClick(insta)}
            >
              <figure className="relative w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 cursor-pointer"></div>
                <img
                  src={mediaUrl}
                  alt={insta.caption}
                  className="h-auto w-[80%] mx-auto md:w-full"
                />
                <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sandybrown text-lg font-bold z-20 p-2 text-center w-full">
                  {shortCaption}
                </h3>
              </figure>
            </div>
          );
        })}
      </div>

      {selectedPost && (
        <InstaPopup post={selectedPost} onClose={handleClosePopup} />
      )}
    </div>
  );
}
