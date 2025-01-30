import { useBlogContext } from "@/context/BlogContext";
import React, { useState } from "react";

export type typeTypes = "heading" | "subheading" | "paragraph" | "code" | "image" | "video";
export interface Section {
    type: typeTypes;
  content: string;
}

export interface Blog {
  id: string; // Added the id field
  title: string;
  coverImage: string;
  sections: Section[];
}

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null); // for storing the cover image URL
  const [sections, setSections] = useState<Section[]>([]); // fixed state type for sections
  const { addBlog } = useBlogContext();

  // Function to handle the file upload (this could be extended for actual file uploads to a server)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file); // Temporary URL for preview
      setCoverImage(fileUrl);
    }
  };

  const addSection = (type: typeTypes) => {
    setSections([...sections, { type, content: "" }]);
  };

  // Update the content of a specific section
  const updateSectionContent = (index: number, content: string) => {
    const updatedSections = [...sections];
    updatedSections[index].content = content;
    setSections(updatedSections);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const blog: Blog = {
        id: "random11",
        title, coverImage: coverImage || "", sections,
    };
    addBlog(blog);
    alert("Blog saved successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Create a New Blog</h1>

      {/* Blog Title */}
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Cover Image Upload */}
      <div className="mb-6">
        <label className="block text-sm font-semibold">Cover Image</label>
        <input
          type="file"
          onChange={handleFileUpload}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {coverImage && (
          <div className="mt-4">
            <img
              src={coverImage}
              alt="Cover Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          {section.type === "heading" && (
            <input
              type="text"
              placeholder="Heading"
              value={section.content}
              onChange={(e) => updateSectionContent(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-bold"
            />
          )}
          {section.type === "subheading" && (
            <input
              type="text"
              placeholder="Subheading"
              value={section.content}
              onChange={(e) => updateSectionContent(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
            />
          )}
          {section.type === "paragraph" && (
            <textarea
              placeholder="Paragraph"
              value={section.content}
              onChange={(e) => updateSectionContent(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          )}
          {section.type === "code" && (
            <textarea
              placeholder="Code Block"
              value={section.content}
              onChange={(e) => updateSectionContent(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono bg-gray-100"
              rows={4}
            />
          )}
          {section.type === "image" && (
            <input
              type="text"
              placeholder="Image URL"
              value={section.content}
              onChange={(e) => updateSectionContent(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          {section.type === "video" && (
            <input
              type="text"
              placeholder="Video URL"
              value={section.content}
              onChange={(e) => updateSectionContent(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      ))}

      {/* Add Section Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          type="button"
          onClick={() => addSection("heading")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Heading
        </button>
        <button
          type="button"
          onClick={() => addSection("subheading")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Subheading
        </button>
        <button
          type="button"
          onClick={() => addSection("paragraph")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Paragraph
        </button>
        <button
          type="button"
          onClick={() => addSection("code")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Code
        </button>
        <button
          type="button"
          onClick={() => addSection("image")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Image
        </button>
        <button
          type="button"
          onClick={() => addSection("video")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Video
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Save Blog
      </button>
    </div>
  );
};

export default BlogForm;
