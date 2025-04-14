import React, { useState } from "react";
import { Post } from "./News";
import InstaPopup from "./InstaPopup";

interface InstaGridProps {
  posts: Post[];
}

export default function InstaGrid({ posts }: InstaGridProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleClosePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <div
        className=" 
      md:place-content-between 
      md:items-stretch
      md:gap-y-4
      w-full
      justify-center flex flex-col flex-wrap md:flex-row my-5"
      >
        {posts.map((insta: Post) => {
          const mediaUrl = insta.mediaUrl || "./tif-hero.jpg";
          const shortCaption =
            insta.caption.split(" ").slice(0, 3).join(" ") +
            (insta.caption.split(" ").length > 3 ? ".." : "");

          return (
            <div
              key={insta.id}
              className="w-full md:w-1/2 lg:w-1/4 mb-5"
              onClick={() => handlePostClick(insta)}
            >
              <figure className="relative w-full">
                <div
                  className="
                w-4/5 mx-auto 
                absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent cursor-pointer"
                >
                  <h3 className="absolute bottom-0 left-0 right-0 transform text-sandybrown font-bold text-center text-base  md:text-xl lg:text-2xl">
                    {shortCaption}
                  </h3>
                </div>
                <img
                  src={mediaUrl}
                  alt={shortCaption}
                  className="w-4/5 h-[220px] mx-auto object-cover"
                />
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
