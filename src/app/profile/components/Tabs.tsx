import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "enrolled-courses"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("enrolled-courses")}
      >
        Enrolled Courses
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "playlist"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("playlist")}
      >
        Playlist
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "blogs"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("blogs")}
      >
        Blogs
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "add-video"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("add-video")}
      >
        Add Video
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "add-blogs"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("add-blogs")}
      >
        Add Blogs
      </button>
    </div>
  );
};
