'use client';

import React from "react";
// import { useSearchParams, useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "./components/SocialLogin";

const AuthPage = () => {
  // const searchParams = useSearchParams(); // Dynamically reads query params
  // const router = useRouter();
  
  // // Local state to handle the current tab, default to "login"
  // const [tab, setTab] = useState<string>("login");

  // useEffect(() => {
  //   const searchTab = searchParams.get("tab");
  //   if (searchTab) {
  //     setTab(searchTab); // Sync query params to the state
  //   }
  // }, [searchParams]); // Runs on mount and whenever searchParams change

  // const handleTabChange = (newTab: string) => {
  //   setTab(newTab); // Update the state with the new tab
  //   router.push(`/auth?tab=${newTab}`); // Update the URL with the new query parameter
  // };

  return (
    <div className="flex items-center justify-center h-[80vh] mb-10 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            // onClick={() => handleTabChange("login")}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              true
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            Login
          </button>
          <button
            // onClick={() => handleTabChange("register")}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              true
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            Register
          </button>
        </div>

        {/* Conditional Rendering of Forms */}
        {'register' === "register" ? <RegisterForm /> : <LoginForm />}

        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="mx-2 text-sm text-gray-600 dark:text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social Login */}
        <SocialLogin isLogin={"register" !== "register"} />
      </div>
    </div>
  );
};

export default AuthPage;
