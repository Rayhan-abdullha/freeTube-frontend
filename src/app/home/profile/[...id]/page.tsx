'use client'
import ProfileCard from "../../components/ProfileCard";
import { Tabs } from "../../components/Tabs";
const page: React.FC = () => {

  return (
      <div className="max-w-7xl mx-auto">
          <ProfileCard />
          <Tabs activeTab="home" onTabChange={() => {}}/>
    </div>
  );
};
export default page;