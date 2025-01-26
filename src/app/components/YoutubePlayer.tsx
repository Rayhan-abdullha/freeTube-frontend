import { getYouTubeVideoId } from '@/utlis/getYoutubeId';
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

interface YouTubePlayerProps {
  url: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
  const videoId = getYouTubeVideoId(url);
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
    <div className="relative" ref={containerRef}>
      <div style={{ paddingBottom: '56.25%' }} className="relative w-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={handleReady}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white flex flex-col gap-3">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex gap-3 items-center">
          <button
            onClick={handlePlayPause}
            className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
          >
            {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
          </button>
          <button
            onClick={handleRewind}
            className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
          >
            <FiRewind size={18} />
          </button>
          <button
            onClick={handleFastForward}
            className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
          >
            <FiFastForward size={18} />
          </button>
          <button
            onClick={handleMuteUnmute}
            className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
          >
            {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
          </button>
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
          <button
            onClick={toggleFullscreen}
            className="px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
          >
            {isFullscreen ? <FiMinimize size={18} /> : <FiMaximize size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;