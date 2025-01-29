'use client'
import CourseList from "@/app/courses/components/CourseList";
import { Button } from "@/components";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
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
            <CourseList key={playlist.id} course={{ id: 1, thumb: "https://cdn.ostad.app/course/cover/2024-11-07T13-34-17.205Z-Untitled-1%20(18).jpg", title: "Python, Django & React", enrolled: 100 }}/>
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
            <Button onClick={addPlaylist} className="w-full bg-blue-500 text-white">Add Playlist</Button>
          </div>
        </div>
      </div>
    );
  };
export default PlaylistComponent  