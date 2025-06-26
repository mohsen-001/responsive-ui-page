"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMode: () => void = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return;

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleMode}
      className="size-14"
    >
      {theme === "dark" ? (
        <Moon className="size-5" />
      ) : (
        <Sun className="size-5" />
      )}
    </Button>
  );
};

export default DarkModeBtn;
