'use client'
import React, { useState } from 'react';
// import { useVideoContext } from '../context/VideoContext';
import YouTubePlayer from './YoutubePlayer';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { getYouTubeVideoId } from '@/utlis/getYoutubeId';
interface VideosType { id: number; url: string; title: string; description: string; thumbnail: string }

const VideoList: React.FC = () => {
  const videos: VideosType[] = [
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 1',
        description: 'Description 1',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
      }, {
        id: 2,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 2',
        description: 'Description 2',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
    },
      {
        id: 3,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 3',
        description: 'Description 3',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
      },
      {
        id: 4,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 4',
        description: 'Description 4',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
      },
      {
        id: 5,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 5',
        description: 'Description 5',
      thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',  
      },
      {
        id: 6,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 6',
        description: 'Description 6',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
      },
      {
        id: 7,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 7',
      description: 'Description 7',
      thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
    },
      {
        id: 8,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 8',
        description: 'Description 8',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
      },
      {
        id: 9,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 9',
      description: 'Description 9',
      thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
    },
      {
        id: 10,
        url: 'https://www.youtube.com/watch?v=IJc6AJz-TGk', 
        title: 'Video 10',
        description: 'Description 10',
        thumbnail: 'https://i.ytimg.com/vi/IJc6AJz-TGk/hqdefault.jpg',
      },  
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>('');

  // Open modal with the selected video URL
  const handleOpenModal = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    setSelectedVideoUrl(url);
    setModalIsOpen(true);
  };

  // Close modal and reset selected video URL
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedVideoUrl('');
  };

  // Close modal if clicking on the overlay
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

  return (
    <div className="p-6 font-sans bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Video List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          videos.map((video: VideosType, index: number) => (
          <div
            onClick={() => handleDetails(video)}
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
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
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Watch Video
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick} // Add click handler for overlay
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
  );
};

export default VideoList;
