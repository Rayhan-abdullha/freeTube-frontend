'use client'
import { Section, useBlogContext } from "@/context/BlogContext";
import { useParams } from "next/navigation";
import { Blog } from "../components/BlogForm";
import YouTubePlayer from "@/app/components/YoutubePlayer";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogDetail = () => {
  const { getBlogById } = useBlogContext();
  const params = useParams();
  const id = params?.id as string;

  const blog: Blog | undefined = getBlogById(id);

  if (blog === undefined) {
    return <p className="text-center text-lg">There is no blog available.</p>;
  }

  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-800 py-10 md:py-14 overflow-hidden mt-[-26px]">
        <div className="max-w-4xl mx-auto items-center flex flex-col lg:flex-row gap-10 ">
          <div className="mx-5">
            <h5 className="text-xl font-bold mb-6">Javascript</h5>
            <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
            <div className="flex items-center gap-2">
              <Image
                src="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain"
                alt="not found"
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-1 sm:flex-row">
                <p>Rayhan Abdullah</p>
                <p className="text-gray-600 dark:text-gray-400">1 hour ago</p>
              </div>
            </div>
          </div>
            {/* Blog Cover Image */}
            {blog.coverImage && (
            <div className="mb-6 lg:mb-0">
              <Image
              src={blog.coverImage}
              alt="Cover Image"
                className="px-5 md:p-0 md:w-[400px] h-auto rounded-lg"
                width={500}
                height={500}
            />
          </div>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
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
            <SyntaxHighlighter
              language="javascript" 
              style={oneDark} 
              wrapLines
              customStyle={{ fontSize: "0.875rem" }}
            >
              {section.content}
            </SyntaxHighlighter>
     
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
              <YouTubePlayer url={section.content} className="bg-white dark:bg-gray-800"/>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default BlogDetail;
