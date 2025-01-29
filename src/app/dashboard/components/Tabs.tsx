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
          activeTab === "add-video"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("add-video")}
      >
        Add-Video
      </button>
      <button
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === "add-course"
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 dark:text-gray-400"
        }`}
        onClick={() => onTabChange("add-course")}
      >
        Add-Course
      </button>
    </div>
  );
};
