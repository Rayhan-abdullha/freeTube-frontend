'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import YouTube from 'react-youtube';
import Image from 'next/image';
import { videos } from '@/static/videos';

const VideoDetails = () => {
  const navigate = useRouter();
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

  const videoId = url || '';

  const video = videos.find((video) => video.url === `https://www.youtube.com/watch?v=${videoId}`);
  const [comments, setComments] = useState(video?.comments || []);
  const [newComment, setNewComment] = useState('');
  
  if (!videoId) {
    return <p className='text-red-500 text-center text-xl'>Invalid YouTube URL</p>;
  }

  const handleUserProfile = (id: string) => {
    navigate.push(`/uploader/@${id}`);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, user: 'Anonymous' }]);
      setNewComment('');
    }
  };



  return (
<div className="min-h-screen flex flex-col items-center">
  <div className='w-full max-w-4xl'>
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-2 sm:p-4 mb-8">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <YouTube
          videoId={videoId}
          opts={opts}
          className="absolute top-0 left-0 w-full h-full rounded-xl"
        />
      </div>
      <div className='video-info overflow-y-auto custom-scrollbar max-h-screen mt-5 mx-5'>
        <div onClick={() => handleUserProfile('rayhan')} className="flex items-center gap-4 cursor-pointer mb-6">
          <Image
            src="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain"
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">Rayhan</span>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-gray-700 dark:text-gray-300 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui rerum ab velit blanditiis dolor dignissimos aliquid laudantium hic explicabo.
          </p>
        </div>
        <div className='mt-8'>
          <h3 className="text-xl font-bold mb-5">Comments ({comments.length})</h3>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold text-white">
                  {comment.user.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{comment.user}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="mt-6 flex flex-col xs:flex-row xs:items-center gap-4 mr-5">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default VideoDetails;
