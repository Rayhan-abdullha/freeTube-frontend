import { VideosType } from '@/static/videos'
import React from 'react'

const ContentList = ({courseName, videos, setVideoId}: {courseName: string, videos: VideosType[], setVideoId: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className="w-full lg:w-1/3 bg-gray-300 dark:bg-gray-700 p-4 mb-10">
        <div className="bg-gray-600 text-white text-lg p-2 rounded-t-md shadow">
            {courseName}
        </div>
        <div className="space-y-2 mt-2">
            {videos?.map((video, index) => (
            <div
                key={index}
                className="h-10 bg-gray-400 rounded-md shadow-sm flex items-center px-2"
            >
                <p onClick={() => setVideoId(video.url)} className="text-white text-sm truncate cursor-pointer">
                {video.title}
                </p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ContentList