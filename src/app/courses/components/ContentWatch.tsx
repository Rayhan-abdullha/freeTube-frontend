'use client'
import React, { useState } from 'react'
import ContentList from './ContentList'
import { VideosType } from '@/static/videos'
import YouTubePlayer from '@/app/components/YoutubePlayer'

const ContentWatch = ({courseName,videos} : {courseName: string, videos: VideosType[]}) => {
    const [videoId, setVideoId] = useState<string>(videos[0].url);
  return (
      <>
        <div className="w-full lg:w-2/3 p-4">
            <YouTubePlayer url={videoId} />
            </div>
          <ContentList courseName={courseName} videos={videos} setVideoId={setVideoId} />
      </>
  )
}

export default ContentWatch