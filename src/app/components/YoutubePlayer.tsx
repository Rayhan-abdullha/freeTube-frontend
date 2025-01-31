'use client'
import { getYouTubeVideoId } from '@/utlis/getYoutubeId';
import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  url: string;
  className: string
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url, className }) => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      disablekb: 1,
    },
  };


  return (
    <div className={`shadow-lg p-2 sm:p-4 w-full rounded-lg ${className}`}>
      <div style={{ paddingBottom: '56.25%' }} className="relative w-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;