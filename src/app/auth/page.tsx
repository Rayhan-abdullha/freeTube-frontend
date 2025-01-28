'use client';
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "./components/SocialLogin";

const AuthPage = () => {
  const searchParams = useSearchParams(); // Dynamically reads query params
  const router = useRouter();
  const tab = searchParams.get("tab") || "login"; // Default to "login"

  const handleTabChange = (tab: string) => {
    router.push(`/auth?tab=${tab}`); // Update the URL
  };

  return (
    <div className="flex items-center justify-center h-[80vh] mb-10 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleTabChange("login")}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              tab === "login"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange("register")}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              tab === "register"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            Register
          </button>
        </div>

        {/* Conditional Rendering */}
        {tab === "register" ? <RegisterForm /> : <LoginForm />}

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="mx-2 text-sm text-gray-600 dark:text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social Login */}
        <SocialLogin isLogin={tab !== "register"} />
      </div>
    </div>
  );
};

export default AuthPage;
