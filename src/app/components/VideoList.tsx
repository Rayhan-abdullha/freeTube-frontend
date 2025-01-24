'use client'
import Link from 'next/link';
import React from 'react';

const VideoList: React.FC = () => {
  return (
    <div className="p-6 font-sans bg-gray-50 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Video List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          new Array(100).fill(1).map((video: number, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
              <div className="p-4">
                <div>
                  <img src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">How to Success in your life 202{index}</h3>
                
              <Link href={`${index}`}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Watch Video
              </Link>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default VideoList;
