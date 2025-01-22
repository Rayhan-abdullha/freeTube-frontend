'use client'
import React, { useState } from 'react';
// import { useVideoContext } from '../context/VideoContext';

const VideoInput: React.FC = () => {
  // const { addVideo } = useVideoContext(); // Get the addVideo function from context
  const [url, setUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create the video object
    // const newVideo = { url, title, description, thumbnail };

    // Add the new video to the global state using the context
    // addVideo(newVideo);

    // Optionally, clear the form after submission
    setUrl('');
    setTitle('');
    setDescription('');
    setThumbnail('');
  };

  return (
    <div className="p-6 font-sans bg-gray-50 max-w-lg mx-auto mt-10 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Play YouTube Video</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields as before */}
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">YouTube URL</label>
          <input
            id="url"
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 text-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            placeholder="Enter video description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 text-gray-600  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            id="thumbnail"
            type="text"
            placeholder="Enter thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 text-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Play Video
        </button>
      </form>
    </div>
  );
};

export default VideoInput;
