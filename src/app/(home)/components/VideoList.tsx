'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getYouTubeVideoId } from '@/utlis/getYoutubeId';
import { videos, VideosType } from '@/static/videos';
import VideoModal from './VideoModal';
import { FiBell, FiMessageSquare, FiPlay } from 'react-icons/fi';
import VideoSkeleton from '@/components/VideoSkeleton';
import Link from 'next/link';

const VideoList = () => {
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
    navigate.push(`/video/${id}`)
  };

  const handleUserProfile = (id: string) => {
    navigate.push(`/uploader/@${id}`)
  };

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        const videoFeeds = videos.sort(() => 0.5 - Math.random()).slice(0, videos.length)
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
        videoFeeds.length === 0 ? < VideoSkeleton grid='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'/> :
        <div className="my-5 mx-5 2xl:mx-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-3">
        {videoFeeds.map((video: VideosType, index: number) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-900 transition-colors duration-300"
          >
            {/* Responsive Thumbnail */}
            <div className="w-full h-0 pb-[56.25%] relative">
              <Image
                onClick={() => handleDetails(video)}
                src={video.thumbnail}
                alt={video.title}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <div
                  onClick={() => handleUserProfile('rayhan')}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain"
                    alt="Avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 capitalize">
                    Rayhan
                  </span>
                </div>
                <button>
                  <FiBell className="text-lg text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300" />
                </button>
              </div>
              <Link href={`/video/${getYouTubeVideoId(video.url)}`} className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 cursor-pointer">
                {video.title}
              </Link>
              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => handleOpenModal(e, video.url)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-300"
                >
                  <FiPlay className="text-lg" />
                  Play
                </button>
                <button
                  onClick={() => handleDetails(video)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-300"
                >
                  <FiMessageSquare className="text-lg" />
                  Comments
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


        {modalIsOpen && (
          <VideoModal
            handleCloseModal={handleCloseModal}
            selectedVideoUrl={selectedVideoUrl}
            handleOverlayClick={handleOverlayClick}
          />
        )}
      </div>
      }
    </>
  );
};

export default VideoList;
