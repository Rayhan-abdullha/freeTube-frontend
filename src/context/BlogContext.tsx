"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
export interface Section {
    type: "heading" | "subheading" | "paragraph" | "code" | "image" | "video";
    content: string;
}
  
export interface Blog {
    id: string;  // Added the id field
    title: string;
    coverImage: string;
    sections: Section[];
}

interface BlogContextProps {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  getBlogById: (id: string) => Blog | undefined;
}

const demoBlogs: Blog[] = [
  {
    id: "1",
    title: "Understanding React Hooks",
    coverImage: "https://www.perfomatix.com/wp-content/uploads/2023/02/React-Hooks-A-Comprehensive-Guide.png",
    sections: [
      {
        type: "heading",
        content: "What are React Hooks?"
      },
      {
        type: "paragraph",
        content: "React Hooks are functions that let you use state and other React features without writing a class."
      },
      {
        type: "subheading",
        content: "useState Hook"
      },
      {
        type: "paragraph",
        content: "The `useState` hook is used to declare state variables in functional components."
      },
      {
        type: "code",
        content: "const [count, setCount] = useState(0);"
      },
      {
        type: "image",
        content: "https://th.bing.com/th/id/OIP.byF4YDSMRBwtKi0wWgiqAQAAAA?rs=1&pid=ImgDetMain"
      }
    ]
  },
  {
    id: "2",
    title: "CSS Grid vs Flexbox",
    coverImage: "https://cdn.geekboots.com/geek/flexbox-vs-grid-meta-1683822175021.jpg",
    sections: [
      {
        type: "heading",
        content: "Grid Layout: A Powerful Tool"
      },
      {
        type: "paragraph",
        content: "CSS Grid is a 2D layout system for CSS. It allows you to create complex layouts easily by defining rows and columns."
      },
      {
        type: "subheading",
        content: "When to use Flexbox"
      },
      {
        type: "paragraph",
        content: "Flexbox is best for 1D layouts, where items are aligned in a row or a column. It's simpler to use compared to Grid."
      },
      {
        type: "code",
        content: "display: flex; align-items: center; justify-content: space-between;"
      },
      {
        type: "video",
        content: "https://www.youtube.com/watch?v=hpwoGjpYygI"
      }
    ]
  }
];

const BlogContext = createContext<BlogContextProps | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([
    ...demoBlogs
  ]);

  const addBlog = (newBlog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    };

    const getBlogById = (id: string): Blog | undefined => {
    return blogs.find((blog) => blog.id === id[0]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, getBlogById }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
