import { VideosType } from '@/static/videos'
import React from 'react'
import { FaPlay } from 'react-icons/fa'; // You can use Font Awesome for the play icon

const ContentList = ({ courseName, videos, setVideoId }: { courseName: string, videos: VideosType[], setVideoId: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
      <div className="bg-gray-500 dark:bg-gray-700 text-white text-xl font-bold p-5 rounded-t-2xl shadow-sm">
        {courseName}
      </div>
      <div className="mt-5 space-y-4">
        {videos?.map((video, index) => (
          <div
            onClick={() => setVideoId(video.url)}
            key={index}
            className="flex items-center gap-3 p-3 md:p-5 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md hover:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaPlay className="text-gray-600 dark:text-gray-300 w-4 h-4 min-w-[16px] min-h-[16px]" />
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium truncate">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentList;
