'use client'
import React, { useRef, useState, useEffect } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer as Player } from 'react-youtube';
import {
  FiPlay,
  FiPause,
  FiVolumeX,
  FiVolume2,
  FiRewind,
  FiFastForward,
  FiMaximize,
  FiMinimize,
} from 'react-icons/fi';
import { useParams } from 'next/navigation';

const VideoDetails = () => {
  const [url] = useParams().id || '';
  
  const videoId =url
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      disablekb: 1,
        fullscreen: 0,
    },
  };

  const handleReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    setDuration(event.target.getDuration());
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    if (isMuted) {
      playerRef.current?.unMute();
    } else {
      playerRef.current?.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    playerRef.current?.setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleRewind = () => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;
    playerRef.current?.seekTo(Math.max(0, currentTime - 10));
  };

  const handleFastForward = () => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;
    const totalDuration = playerRef.current?.getDuration() || 0;
    playerRef.current?.seekTo(Math.min(totalDuration, currentTime + 10));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    const seekTime = (newProgress / 100) * duration;
    playerRef.current?.seekTo(seekTime);
    setProgress(newProgress);
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreenNow = !!document.fullscreenElement;
      setIsFullscreen(isFullscreenNow);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime();
          const totalDuration = playerRef.current.getDuration();
          setProgress((currentTime / totalDuration) * 100);
        }
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center mb-12">
      <h1 className="text-xl font-semibold mt-8">Video Details</h1>
      <div className="bg-white dark:bg-gray-800 shadow-lg p-6 mt-6 w-full max-w-4xl rounded-lg">
      <div className="relative" ref={containerRef}>
        <div style={{ paddingBottom: '56.25%' }} className="relative w-full">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={handleReady}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        {/* Custom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white flex flex-col gap-3">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />

          {/* Controls */}
          <div className="flex justify-between items-center">
            {/* Play/Pause */}
            <button
              onClick={handlePlayPause}
              className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
            >
              {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
            </button>

            {/* Rewind */}
            <button
              onClick={handleRewind}
              className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
            >
              <FiRewind size={18} />
            </button>

            {/* Fast Forward */}
            <button
              onClick={handleFastForward}
              className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
            >
              <FiFastForward size={18} />
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={handleMuteUnmute}
              className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
            >
              {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-12 h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
            >
              {isFullscreen ? <FiMinimize size={18} /> : <FiMaximize size={18} />}
            </button>
          </div>
        </div>
      </div>
        <div className="mb-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            qui rerum ab velit blanditiis dolor dignissimos aliquid laudantium
            hic explicabo.
          </p>
        </div>
        <div className='comment'>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Comments (20)</h3>
            <button className="text-blue-500 text-sm">See more...</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              <div className="flex-1 bg-gray-300 p-2 rounded-lg">Awesome course</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              <div className="flex-1 bg-gray-300 p-2 rounded-lg">Awesome course</div>
            </div>
          </div>
          <div className="mt-6">
            <textarea
              className="w-full bg-gray-300 p-4 rounded-lg resize-none h-24"
              placeholder="Add a comment..."
            ></textarea>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
