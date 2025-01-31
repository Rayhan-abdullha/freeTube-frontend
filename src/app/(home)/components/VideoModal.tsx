'use client'
import YouTubePlayer from '@/app/components/YoutubePlayer'
import React from 'react'
import { FiX } from 'react-icons/fi'
interface PropsType {
    handleOverlayClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    handleCloseModal: () => void
    selectedVideoUrl: string
}

const VideoModal = ({handleOverlayClick, handleCloseModal, selectedVideoUrl}: PropsType) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex md:items-center justify-center z-50"
        onClick={handleOverlayClick}
        >
        <div className="overflow-hidden w-full max-w-4xl">
            <div className="relative">
            <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 z-[999] text-white text-2xl font-bold flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300"
                aria-label="Close"
            >
                <FiX size={24} />
            </button>
            <YouTubePlayer url={selectedVideoUrl} className='bg-white dark:bg-gray-800'/>
            </div>
        </div>
    </div>
  )
}

export default VideoModal