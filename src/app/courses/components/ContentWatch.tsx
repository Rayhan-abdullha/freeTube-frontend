'use client'
import React, { useState } from 'react'
import ContentList from './ContentList'
import { VideosType } from '@/static/videos'
import YouTubePlayer from '@/app/components/YoutubePlayer'

const ContentWatch = ({courseName,videos} : {courseName: string, videos: VideosType[]}) => {
    const [videoId, setVideoId] = useState<string>(videos[0].url);
  return (
    <div className='flex flex-col gap-5 lg:flex-row'>
    <div className="w-full lg:w-2/3">
        <YouTubePlayer url={videoId} />
    </div>
    <div className="w-full lg:w-1/3 overflow-y-auto max-h-[60vh] lg:max-h-[60vh] custom-scrollbar">
        <ContentList courseName={courseName} videos={videos} setVideoId={setVideoId} />
    </div>
</div>

  )
}

export default ContentWatch