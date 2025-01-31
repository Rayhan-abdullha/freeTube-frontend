import React from "react";

interface SkeletonProps {
  grid: string;
}

const VideoSkeleton = ({ grid }: SkeletonProps) => {
  const shimmerEffect =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-300/50 dark:via-gray-600/30 before:to-transparent";

  return (
    <div className={`w-full px-4 ${grid}`}>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`relative space-y-5 border border-gray-200 dark:border-gray-700 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 p-4 shadow-md shadow-gray-200/40 dark:shadow-gray-900/30 ${shimmerEffect}`}
        >
          {/* Thumbnail Placeholder */}
          <div className="h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>

          {/* Avatar and Info Placeholder */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-3 w-24 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>

          {/* Title Placeholder */}
          <div className="h-3 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-600 mb-3"></div>

          {/* Buttons Placeholder */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-3 w-20 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-20 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSkeleton;
