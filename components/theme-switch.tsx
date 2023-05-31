"use client";
import { useTheme } from "@wits/next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button aria-label="Switch Theme" type="button" onClick={() => toggle()}>
      {theme === "light" ? <BsMoon size={25} /> : <BsSun size={25} />}
    </button>
  );
};

export default ThemeSwitch;
