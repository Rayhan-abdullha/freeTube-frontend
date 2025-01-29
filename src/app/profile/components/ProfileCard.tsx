'use client'
import Image from "next/image";
import React, { useState } from "react";
interface ProfileCardProps {
  profile: {
    name: string;
    email: string;
    password: string;
  };
  onUpdate: (updatedProfile: { name: string; email: string; password: string }) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedProfile);
    setEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 space-x-4">
        <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
          <Image
            src="https://toppng.com/public/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
            alt="Profile"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          {editing ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updatedProfile.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 text-gray-800 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedProfile.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 text-gray-800 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={updatedProfile.password}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 text-gray-800 dark:text-gray-100"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {profile.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">{profile.email}</p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Password:</span> {profile.password}
              </p>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
