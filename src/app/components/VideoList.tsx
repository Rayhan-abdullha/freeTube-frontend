'use client'
import React, { useEffect, useState } from 'react';
// import { useVideoContext } from '../context/VideoContext';
import YouTubePlayer from './YoutubePlayer';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { getYouTubeVideoId } from '@/utlis/getYoutubeId';
import { videos, VideosType } from '@/static/videos';
import Skeleton from '@/components/Skeleton';

const VideoList: React.FC = () => {
  const [videoFeeds, setVideoFeeds] = useState<VideosType[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>('');

  const handleOpenModal = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    setSelectedVideoUrl(url);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedVideoUrl('');
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  const navigate = useRouter()
  const handleDetails = (video: VideosType) => {
    const { url } = video
    const id = getYouTubeVideoId(url)
    navigate.push(`/home/${id}`)
  };

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        const videoFeeds = videos.sort(() => 0.5 - Math.random()).slice(0, 10)
        resolve(videoFeeds)
      }, 500)
    })
    promise.then((res) => {
      setVideoFeeds(res as VideosType[])
    })
  },[])

  return (
    <>
      {
        videoFeeds.length === 0 ? < Skeleton /> :
      <div className="p-6 font-sans rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Video Feed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            videoFeeds.map((video: VideosType, index: number) => (
            <div
              onClick={() => handleDetails(video)}
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-800">{video.title}</h3>
                <button
                 onClick={(e) => handleOpenModal(e, video.url)}
                  className="text-blue-600 hover:underline dark:text-blue-400 mt-4 inline-block"
                >
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
        {modalIsOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
              <div className="relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 z-[999] text-white text-2xl font-bold flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300"
                  aria-label="Close"
                >
                  <FiX size={24} />
                </button>
                <YouTubePlayer url={selectedVideoUrl} />
              </div>
            </div>
          </div>
        )}
      </div>
      }
    </>
  );
};

export default VideoList;
