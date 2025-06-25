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
    <Button size="icon" variant="outline" onClick={handleMode}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default DarkModeBtn;
