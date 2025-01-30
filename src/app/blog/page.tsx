'use client'
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useBlogContext } from "@/context/BlogContext";

export default function BlogHome() {
  const router = useRouter();
    const { blogs } = useBlogContext();
  

  const navigateToBlog = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
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
  );
}
