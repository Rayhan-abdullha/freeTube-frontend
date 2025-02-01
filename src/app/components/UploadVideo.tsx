'use client'
import React, { useState } from "react";
interface AddVideoFormProps {
  onSubmit: (videoData: {
    title: string;
    url: string;
    description: string;
    thumbnail: File | null;
  }) => void;
}

export const AddVideoForm: React.FC<AddVideoFormProps> = ({ onSubmit }) => {
  const [videoData, setVideoData] = useState({
    title: "",
    url: "",
    description: "",
    thumbnail: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVideoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideoData((prev) => ({ ...prev, thumbnail: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(videoData);
    setVideoData({ title: "", url: "", description: "", thumbnail: null });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        Add a Video
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Video Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Video Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={videoData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-[#5f27cd] focus:border-[#5f27cd] text-gray-800 dark:text-gray-100"
            placeholder="Enter video title"
          />
        </div>

        {/* Video URL */}
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Video URL
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={videoData.url}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-[#5f27cd] focus:border-[#5f27cd] text-gray-800 dark:text-gray-100"
            placeholder="Enter video URL"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={videoData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-[#5f27cd] focus:border-[#5f27cd] text-gray-800 dark:text-gray-100"
            placeholder="Enter video description"
            rows={4}
          />
        </div>

        {/* Upload Thumbnail */}
        <div>
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Upload Thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-[#5f27cd] text-white rounded-md hover:bg-[#421e8a]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
