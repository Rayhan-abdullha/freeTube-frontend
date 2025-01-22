// import React, { useRef, useState } from 'react';
// import YouTube, { YouTubeEvent, YouTubePlayer as Player } from 'react-youtube';
// import { getYouTubeVideoId } from '../utils/index';

// interface YouTubePlayerProps {
//   url: string;
// }

// const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
//   const videoId = getYouTubeVideoId(url);
//   const playerRef = useRef<Player | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(100);

//   if (!videoId) {
//     return <p>Invalid YouTube URL</p>;
//   }

//   const opts = {
//     height: '100%',
//     width: '100%',
//     playerVars: {
//       autoplay: 0,
//       controls: 0,
//       modestbranding: 1,
//       rel: 0,
//       showinfo: 0,
//       iv_load_policy: 3,
//     },
//   };

//   const handleReady = (event: YouTubeEvent) => {
//     playerRef.current = event.target;
//   };

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       playerRef.current?.pauseVideo();
//     } else {
//       playerRef.current?.playVideo();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = parseInt(e.target.value, 10);
//     setVolume(newVolume);
//     playerRef.current?.setVolume(newVolume);
//   };

//   return (
//     <div className="relative">
//       <div style={{ paddingBottom: '56.25%' }} className="relative w-full">
//         <YouTube
//           videoId={videoId}
//           opts={opts}
//           onReady={handleReady}
//           className="absolute top-0 left-0 w-full h-full"
//         />
//       </div>

//       {/* Custom Controls */}
//       <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-75 text-white flex justify-between items-center">
//         <button
//           onClick={handlePlayPause}
//           className="px-4 py-2 bg-gray-800 rounded-md"
//         >
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//         <div className="flex items-center gap-2">
//           <span className="text-sm">Volume</span>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={volume}
//             onChange={handleVolumeChange}
//             className="w-24"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YouTubePlayer;
