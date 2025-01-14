import React from "react";
import { useState, useEffect } from "react";
import InstaGrid from "./InstaGrid.tsx";

export interface InstaType {
  id: string;
  caption: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl: string;
}

export const News = () => {
  const [fetchPosts, setFetchPosts] = useState<InstaType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.VITE_API_INSTA_URL;
  // const apiUrl = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("API URL:", import.meta.env.VITE_API_INSTA_URL);

      try {
        console.log("Fetching data from", apiUrl);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        if (!apiUrl) {
          throw new Error("API URL is not defined");
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setFetchPosts(data.slice(0, 3));
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="  ">
      <h2 className="uppercase font-mono text-center text-2xl font-bold text-sandybrown">
        Nyheter
      </h2>
      {loading ? (
        <div className="text-center py-5">Loading...</div>
      ) : error ? (
        <p className="text-red-600">Error..</p>
      ) : (
        <InstaGrid posts={fetchPosts} />
      )}
    </div>
  );
};

export default News;
