'use client'
import { useState } from "react";
import { ProfileCard } from "./components/ProfileCard";
import { Tabs } from "./components/Tabs";
import { AddVideoForm } from "../components/UploadVideo";
import CourseItem from "./components/CourseItem";
import PlaylistComponent from "./components/AddPlaylist";
// import ComingSoon from "../components/ComingSoon";
import BlogForm from "../blog/components/BlogForm";
import BlogHome from "../blog/page";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("enrolled-courses");
  const [profile, setProfile] = useState({
    name: "Rayhan Abdullah",
    email: "programmer.rayhan1@gmail.com",
    password: "********",
  });

  const handleProfileUpdate = (updatedProfile: typeof profile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="container max-w-7xl mx-auto p-4">
      <ProfileCard profile={profile} onUpdate={handleProfileUpdate} />
      <div className="mt-8">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="mt-6">
          {activeTab === "enrolled-courses" && (
            <CourseItem/>
          )}
          {activeTab === "add-video" && (
            <AddVideoForm onSubmit={() => {}}/>
          )}
          {
            activeTab === "playlist" && (
              <PlaylistComponent/>
            )
          }
          {
            activeTab === 'add-blogs' && ( <BlogForm />)
          }
          {
            activeTab === 'blogs' && ( <BlogHome />)
          }
        </div>
      </div>
    </div>
  );
}
