'use client'
import { useState } from "react";

import { Tabs } from "../../components/Tabs";
import ComingSoon from "@/app/components/ComingSoon";
import ProfileInfo from "../../components/ProfileInfo";
import UploadVideoList from "../../components/UploadVideoList";
const ProfileData: React.FC = () => {
  const [activeTab, setActiveTab] = useState("video");
  return (
      <div className="max-w-7xl mx-auto">
        <ProfileInfo />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="mt-6">
          {activeTab === "video" && (
            <UploadVideoList/>
          )}
          {activeTab === "blogs" && (
            <ComingSoon/>
          )}
        </div>
    </div>
  );
};
export default ProfileData;