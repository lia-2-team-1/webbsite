import React, { useState, useEffect } from "react";
import InstaGrid from "./InstaGrid.tsx";
import Button from "./Button.tsx";

export interface InstaType {
  id: string;
  caption: string;
  mediaType: string;
  mediaUrl: string;
}

export const News = () => {
  const [fetchPosts, setFetchPosts] = useState<InstaType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_INSTA_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (Array.isArray(result.data)) {
        const posts = result.data.map((post: any) => ({
          id: post.id,
          caption: post.caption || "No caption",
          mediaType: post.media_type,
          mediaUrl:
            post.media_url || post.image_versions2?.candidates[0]?.url || "",
        }));

        setFetchPosts(posts.slice(0, 4));
      } else {
        throw new Error("Data is not an array");
      }
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
    <div className="pt-5 pb-5 mx-auto md:w-[90%] ">
      <h2 className="uppercase pb-2 font-mono text-center text-2xl font-bold text-sandybrown">
        Senaste hos klubben
      </h2>
      <div className="">
        {loading ? (
          <div className="text-center py-5">Laddar...</div>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : (
          <InstaGrid posts={fetchPosts} />
        )}
      </div>
      <div className="flex justify-center pb-5 pt-5 mx-auto">
        <Button isLink={true} linkTo={"#"} text={"FLER NYHETER"} />
      </div>
    </div>
  );
};

export default News;
