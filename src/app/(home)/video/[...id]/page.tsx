'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import YouTube from 'react-youtube';

const VideoDetails = () => {
  const [url] = useParams().id || '';
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

  const videoId = url
  if (!videoId) {
    return <p className='text-red-500 text-center'>Invalid YouTube URL</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center mb-12">
      <div className='max-w-6xl'>
      <div className="bg-white dark:bg-gray-800 shadow-lg p-2 sm:p-4 mt-6 w-full rounded-lg">
      <div style={{ paddingBottom: '56.25%' }} className="relative w-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
      <div className='mx-5 xl:mx-0'>
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
              <div className="w-10 h-10 bg-gray-400 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 bg-gray-300 dark:bg-gray-800 p-2 rounded-lg">Nice song</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-400 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 bg-gray-300 dark:bg-gray-800 p-2 rounded-lg">Wow video</div>
            </div>
          </div>
          <div className="mt-6">
            <textarea
              className="w-full bg-gray-300 dark:bg-gray-800 p-4 rounded-lg resize-none h-24"
              placeholder="Add a comment..."
            ></textarea>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">Comment</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
