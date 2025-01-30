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
    title: "Unit Testing in Node.js With Jest",
    coverImage: "https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2024-11%2Fjest-unit-tests.jpg&w=1200&q=90",
    sections: [
      {
        type: "paragraph",
        content: "Unit tests are essential for increasing the test coverage of a backend application, ensuring its reliability, functionality, and robustness. Jest has become one of the most popular solutions when unit testing in Node, due to its intuitive API, zero-configuration philosophy, and flexible approach to code transpilation."
      },
      {
        type: "paragraph",
        content: "In this guide, you will learn more about Jest, explore its features, and see it in action through a complete example."
      },
      {
        type: "paragraph",
        content: "Become a Jest unit testing expert!"
      },
      {
        type: "subheading",
        content: "What Is Jest?"
      },
      {
        type: "paragraph",
        content: "Jest is a free, open-source JavaScript testing framework that checks the correctness of your codebase. It is focused on simplicity with a zero-config approach. It works with backend applications built in Node.js as well as frontend applications in React, Angular, Vue, and more. When it comes to code transpilation, it integrates natively with Babel, Vite, Parcel, and webpack."
      },
      {
        type: "paragraph",
        content: "With Jest, you can write unit, integration, and snapshot tests in both JavaScript and TypeScript."
      },
      {
        type: "paragraph",
        content: "At the time of writing, Jest boasts over 44.3k stars on GitHub and over 30 million weekly downloads on npm. These impressive figures place Jest among the top testing libraries in the JavaScript ecosystem."
      },
      {
        type: "subheading",
        content: "Exploring Jest: Features, Capabilities, and Core Aspects"
      },
      {
        type: "paragraph",
        content: "Now that you know what Jest is, it's time to discover why it's so popular by analyzing its main features."
      },
      {
        type: "subheading",
        content: "Intuitive API",
      },
      {
        type: "paragraph",
        content: "By default, a Jest test is a JavaScript or TypeScript file with the .test.{js,jsx,ts,tsx} or .spec.{js,jsx,ts,tsx} extension. Unless configured otherwise, Jest automatically looks for test files in the __tests__ directory or any sub-folder inside your project's root folder.",
      },
      {
        type: "code",
        content: `
        
        // __tests__/login.test.js
        describe("Login service", () => {
          test("should login successfully", () => {
            // test logic for login...
          });
        
          test("should logout successfully", () => {
            // test logic for logout...
          });
        });
        
        `
      },
      {
        type: "subheading",
        content: "DeepSeek is Greeting (adsbygoogle)",
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
