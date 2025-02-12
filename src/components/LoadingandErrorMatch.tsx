import React from "react";

interface LoadingAndErrorProps {
  loading: boolean;
  error: string | null;
}

const LoadingAndErrorMatch: React.FC<LoadingAndErrorProps> = ({ loading, error }) => {
  if (loading) {
    return <div className="text-center py-5">Laddar...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-black dark:text-sandybrown mt-4">
          Kunde inte ladda matcherna just nu.
        </p>
        <p className="text-black dark:text-sandybrown">Försök igen senare!</p>
      </div>
    );
  }

};

export default LoadingAndErrorMatch;
