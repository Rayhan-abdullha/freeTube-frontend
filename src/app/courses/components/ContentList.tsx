import { VideosType } from '@/static/videos'
import React from 'react'
import { FaPlay } from 'react-icons/fa'; // You can use Font Awesome for the play icon

const ContentList = ({ courseName, videos, setVideoId }: { courseName: string, videos: VideosType[], setVideoId: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="w-full bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-10">
      <div className="bg-gray-600 dark:bg-gray-700 text-white dark:text-gray-200 text-xl font-semibold p-4 rounded-t-lg shadow-md">
        {courseName}
      </div>
      <div className="mt-4 space-y-4">
        {videos?.map((video, index) => (
          <div
            onClick={() => setVideoId(video.url)}
            key={index}
            className="flex items-center justify-between p-4 bg-gray-500 dark:bg-gray-700 rounded-lg shadow hover:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-2">
              <FaPlay className="text-white text-sm" />
              <p className="text-white dark:text-gray-200 text-sm truncate">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentList;
