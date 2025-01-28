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
          activeTab === "home"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("home")}
      >
        Home
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "video"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("video")}
      >
        Video
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
    </div>
  );
};
