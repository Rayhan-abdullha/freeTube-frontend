import React from "react";

const SocialLogin = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <button
      type="button"
      className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        alt="Google Logo"
        className="w-5 h-5 mr-2"
      />
      {isLogin ? "Login with Google" : "Register with Google"}
    </button>
  );
};

export default SocialLogin;
