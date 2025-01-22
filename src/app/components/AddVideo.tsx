'use client'
import React, { useState } from 'react'
import VideoInput from './UploadVideo'
import VideoList from './VideoList'

const AddVideo = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
      <div>
        {
            toggle ? (
                <div>
                    <VideoInput />
                    <button
                        className='bg-blue-500 text-white text-sm px-4 py-2 rounded-md mt-4'
                        onClick={handleToggle}
                    >
                        Show Video List
                    </button>
                </div>
            ) : (
                <div>
                    {/* When toggle is false, show the VideoList */}
                    <button
                        className='bg-blue-500 mb-5 text-white text-sm px-4 py-2 rounded-md'
                        onClick={handleToggle}
                    >
                        Add Video
                    </button>
                    <VideoList />
                </div>
            )
        }
      </div>
    )
}

export default AddVideo
