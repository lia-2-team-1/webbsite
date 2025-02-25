import React, { useState, useEffect } from "react";
import InstaGrid from "./InstaGrid.tsx";
import Button from "./Button.tsx";
import SectionHeading from "./SectionHeading.tsx";

export interface Post {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  image_versions2?: {
    candidates: { url: string }[];
  };
}

export const News = () => {
  const [fetchPosts, setFetchPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_INSTA_URL;

  const fallbackPosts: Post[] = Array(4).fill({
    id: "fallback",
    caption: "Trandareds IF",
    media_type: "image",
    media_url: "./public/tif-hero.jpg",
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const posts = result.data.map((post: Post) => ({
        id: post.id,
        caption: post.caption || "Ingen beskrivning..",
        mediaType: post.media_type,
        mediaUrl:
          post.media_url || post.image_versions2?.candidates?.[0]?.url || "",
      }));

      setFetchPosts(posts.slice(0, 4));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return (
    <div className="w-full bg-wheat dark:bg-codgray">
      <div className="pt-5 pb-5 mx-auto md:w-4/5 w-full lg:max-w-screen-lg">
        <SectionHeading text="Senaste hos klubben" />
        <div>
          {loading ? (
            <div className="text-center py-5">Laddar...</div>
          ) : error ? (
            <div className="text-center py-5">
              <InstaGrid posts={fallbackPosts} />
              <p className="text-codgray dark:text-sandybrown mt-4">
                Kunde inte ladda nyheterna just nu.
              </p>
              <p className="text-codgray dark:text-sandybrown">
                Försök igen senare!
              </p>
            </div>
          ) : (
            <InstaGrid posts={fetchPosts} />
          )}
        </div>
        <div className="flex justify-center pb-5 pt-5 mx-auto">
          <Button isLink={true} linkTo={"news"} text={"FLER NYHETER"} />
        </div>
      </div>
    </div>
  );
};

export default News;
