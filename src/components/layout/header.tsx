"use client";

import { Button } from "../ui/button";
import Menu from "../menu";
import DarkModeBtn from "../dark-mode-btn";
import { motion } from "motion/react";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      transition={{ ease: "easeOut", duration: 1 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="h-28 flex items-center justify-between w-full max-w-[1600px] mx-auto px-32 max-xl:px-8">
        <div className="font-black text-3xl">LOGO</div>
        <Menu className="max-lg:hidden" />
        <div className="flex items-center gap-4">
          <DarkModeBtn />
          <Button className="max-[520px]:hidden">Book Trip</Button>
          <Button
            size="icon"
            variant="outline"
            className="size-14 hidden max-lg:flex"
          >
            <MenuIcon className="size-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
