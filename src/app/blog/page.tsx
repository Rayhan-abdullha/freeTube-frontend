'use client'
import React, { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Blog, useBlogContext } from "@/context/BlogContext";
import Skeleton from "@/components/Skeleton";

export default function BlogHome() {
  const [blog, setBlogs] = React.useState<Blog[]>([]);
  const router = useRouter();
    const { blogs } = useBlogContext();
  

  const navigateToBlog = (id: string) => {
    router.push(`/blog/${id}`);
  };

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        const randBlogs = blogs.sort(() => 0.5 - Math.random()).slice(0, blogs.length)
        resolve(randBlogs)
      }, 500)
    })
    promise.then((res) => {
      setBlogs(res as Blog[])
    })
  },[blogs])
  

  return (
    <>
      {
        blog.length === 0 ? <div className="mx-auto max-w-7xl"><Skeleton len={2} grid="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"/></div> : <div className="mx-auto max-w-7xl p-5">
        <h1 className="text-xl font-bold mb-6">Blog Home</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => navigateToBlog(blog.id)}
            >
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
    </>
  );
}
