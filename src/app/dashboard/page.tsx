'use client'
import React, { useState } from 'react'
import { AddVideoForm } from '../components/UploadVideo'
import { Tabs } from './components/Tabs'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('add-video')
  return (
    <div className='max-w-7xl mx-auto px-6 xl:px-0 mb-10'>
        <div className='mb-5'>
          <Tabs activeTab={activeTab} onTabChange={setActiveTab}/>
      </div>
      
      {
        activeTab === 'add-video' && <AddVideoForm onSubmit={() => {}}/>
      }
      {
        activeTab === 'add-course' && <PlaylistComponent/>
      }
    </div>
  )
}

export default Dashboard

// Playlist Component
const PlaylistComponent = () => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      thumb: "https://via.placeholder.com/150",
      title: "My First Playlist",
      description: "This is my first playlist."
    }
  ]);

  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
    thumb: ""
  });

  const addPlaylist = () => {
    setPlaylists([...playlists, { ...newPlaylist, id: playlists.length + 1 }]);
    setNewPlaylist({ title: "", description: "", thumb: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Playlists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="p-4">
            <img src={playlist.thumb} alt="Thumbnail" className="w-full h-32 object-cover rounded" />
            <div>
              <h3 className="font-semibold text-lg mt-2">{playlist.title}</h3>
              <p className="text-sm text-gray-600">{playlist.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Add New Playlist</h3>
        <div className="grid gap-4">
          <Input
            placeholder="Thumbnail URL"
            value={newPlaylist.thumb}
            onChange={(e) => setNewPlaylist({ ...newPlaylist, thumb: e.target.value })}
          />
          <Input
            placeholder="Title"
            value={newPlaylist.title}
            onChange={(e) => setNewPlaylist({ ...newPlaylist, title: e.target.value })}
          />
          <Textarea
            placeholder="Description"
            value={newPlaylist.description}
            onChange={(e) => setNewPlaylist({ ...newPlaylist, description: e.target.value })}
          />
          <Button onClick={addPlaylist} className="w-full bg-blue-500 text-white">Add Course</Button>
        </div>
      </div>
    </div>
  );
};
