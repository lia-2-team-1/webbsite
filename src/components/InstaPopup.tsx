import React from "react";
import { InstaType } from "./News";

interface InstaPopupProps {
  post: InstaType;
  onClose: () => void;
}

const InstaPopup: React.FC<InstaPopupProps> = ({ post, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-sandybrown rounded-lg p-5 max-w-[500px] w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-700 text-white p-2 rounded"
        >
          &times;
        </button>
        <img
          src={post.mediaUrl}
          alt={post.caption}
          className="w-full rounded-lg"
        />
        <p className="mt-4 text-black">{post.caption}</p>
      </div>
    </div>
  );
};

export default InstaPopup;
