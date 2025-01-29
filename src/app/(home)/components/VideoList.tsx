'use client'
import React, { useEffect, useState } from 'react';
// import { useVideoContext } from '../context/VideoContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getYouTubeVideoId } from '@/utlis/getYoutubeId';
import { videos, VideosType } from '@/static/videos';
import Skeleton from '@/components/Skeleton';
import VideoModal from './VideoModal';
import { FiBell } from 'react-icons/fi';

const VideoList = ({title}: {title?: string}) => {
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
        videoFeeds.length === 0 ? < Skeleton grid='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'/> :
      <div className="rounded-lg my-5 mx-5 xl:mx-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            videoFeeds.map((video: VideosType, index: number) => (
              <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
                <Image
                onClick={() => handleDetails(video)}
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover cursor-pointer"
              />
              <div className="p-4">
                  <div className='flex justify-between items-center'>
                    <div onClick={() => handleUserProfile('rayhan')} className="flex items-center mb-4 cursor-pointer">
                    <Image
                      src="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain"
                      alt="Avatar"
                      width={30}
                      height={30}
                      className="rounded-full mr-2"
                    />
                    <span className="text-md font-medium text-gray-800 dark:text-gray-100">
                      Rayhan
                    </span>
                  </div>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white text-sm py-[5px] px-3 rounded-full flex items-center gap-2'>
                    <FiBell className='mt-[3px]'/>
                    Subscribe
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-800">{video.title}</h3>
                <div className='flex justify-between'>
                    <button
                      onClick={(e) => handleOpenModal(e, video.url)}
                      className="text-blue-600 hover:underline dark:text-blue-400 mt-4 inline-block"
                    >
                      Watch Now
                    </button>
                    <button
                      onClick={() => handleDetails(video)}
                      className="text-blue-600 hover:underline dark:text-blue-400 mt-4 inline-block"
                    >
                      Details Watch
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
