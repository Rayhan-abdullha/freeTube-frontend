"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunDim, SunMoon } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-fit hover:text-[#b499e9] hover:scale-110 active:scale-100 duration-200`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <SunMoon className="w-8 h-8" />
      ) : (
        <SunDim className="w-[35px] h-[35px]" />
      )}
    </button>
  );
};
