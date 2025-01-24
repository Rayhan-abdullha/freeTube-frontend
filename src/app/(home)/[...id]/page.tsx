import React from 'react';

const VideoDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-xl font-semibold mt-8">Video Details</h1>
      <div className="bg-white shadow-lg p-6 mt-6 w-full max-w-4xl rounded-lg">
        {/* Video Section */}
        <div className="mb-6">
          <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
            <span className="text-gray-600">Video</span>
          </div>
        </div>
        {/* Description Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            qui rerum ab velit blanditiis dolor dignissimos aliquid laudantium
            hic explicabo.
          </p>
        </div>
        {/* Comments Section */}
        <div>
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
