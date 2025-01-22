'use client'
import React from 'react';

const VideoList: React.FC = () => {
  return (
    <div className="p-6 font-sans bg-gray-50 max-w-7xl mx-auto mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Video List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          [1, 2, 3].map((video: number, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800">How to Success in your life 2025</h3>
              <p className="text-gray-600 text-sm mt-2">how to success</p>
              <button
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Watch Video
              </button>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default VideoList;
