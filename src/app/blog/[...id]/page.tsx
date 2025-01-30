'use client'
import { Section, useBlogContext } from "@/context/BlogContext";
import { useParams } from "next/navigation";
import { Blog } from "../components/BlogForm"; // Import BlogForm type
import YouTubePlayer from "@/app/components/YoutubePlayer";

const BlogDetail = () => {
  const { getBlogById } = useBlogContext();
  const params = useParams();
  const id = params?.id as string;

  const blog: Blog | undefined = getBlogById(id); // Get blog by ID

  if (blog === undefined) {
    return <p className="text-center text-lg">There is no blog available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>

      {/* Blog Cover Image */}
      {blog.coverImage && (
        <div className="mb-6">
          <img
            src={blog.coverImage}
            alt="Cover Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Dynamic Sections */}
      {blog.sections.map((section: Section, index: number) => (
        <div key={index} className="mb-6">
          {section.type === "heading" && (
            <h2 className="text-2xl font-bold mb-2">{section.content}</h2>
          )}
          {section.type === "subheading" && (
            <h3 className="text-xl font-semibold mb-2">{section.content}</h3>
          )}
          {section.type === "paragraph" && (
            <p className="text-gray-700 mb-4">{section.content}</p>
          )}
          {section.type === "code" && (
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">{section.content}</code>
            </pre>
          )}
          {section.type === "image" && (
            <div className="mb-4">
              <img
                src={section.content}
                alt="Blog Image"
                className="w-full rounded-lg"
              />
            </div>
          )}
          {section.type === "video" && (
            <div className="mb-4">
              <YouTubePlayer url={section.content} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogDetail;
