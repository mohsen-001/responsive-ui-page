"use client";

import { Button } from "../ui/button";
import Menu from "../menu";
import DarkModeBtn from "../dark-mode-btn";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      transition={{ ease: "easeOut", duration: 1 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="h-28 flex items-center justify-between w-full max-w-[1600px] mx-auto px-32">
        <div className="font-black text-3xl">LOGO</div>
        <Menu />
        <div className="flex items-center gap-4">
          <DarkModeBtn />
          <Button>Book Trip</Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
