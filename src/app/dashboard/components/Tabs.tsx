import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <ul className="flex items-center rounded-full p-1 relative">
      <div
        className={`${
          activeTab === "add-video" && "translate-x-[10px]"
        } ${
          activeTab === "add-course" && "translate-x-[140px]"
        } absolute bg-[#3B9DF8] text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full cursor-pointer`}
      ></div>

      <li
        className={`${
          activeTab === "add-video" && " !text-[#fff]"
        } px-6 py-1 text-[#424242] dark:text-[#fff] z-20 transition duration-300 rounded-full cursor-pointer`}
        onClick={() => onTabChange("add-video")}
      >
        Add-Video
      </li>
      <li
        className={`${
          activeTab === "add-course" && " !text-[#fff]"
        } px-6 py-1 text-[#424242] dark:text-[#fff] z-20 transition duration-300 rounded-full cursor-pointer`}
        onClick={() => onTabChange("add-course")}
      >
        Add-Course
      </li>
    </ul>
  );
};
