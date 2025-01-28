import React from 'react'

const ProfileCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                src="/profile-placeholder.png"
                alt="Profile"
                className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1"> 
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                Rayhan
                </h1>
                <p className="text-gray-600 dark:text-gray-400">programmer.rayhan1@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard