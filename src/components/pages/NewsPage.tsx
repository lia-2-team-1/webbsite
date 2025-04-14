import React, { useEffect } from "react";
import NewsInfoHeader from "../NewsInfoHeader";
import { News } from "../News";

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);
  return (
    <div>
      <NewsInfoHeader />
      <News variant="news" />
    </div>
  );
}
