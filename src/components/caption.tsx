"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

const Caption = () => {
  return (
    <div className="absolute top-2/4 start-24 -translate-y-2/4 text-black">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        className="uppercase"
      >
        Elevate Your Travel Journey
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", delay: 0.2, duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        className="capitalize text-7xl leading-[1.2] font-bold mb-8"
      >
        Experience <br /> the magic of <br /> flight!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", delay: 0.4, duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button className="py-8 px-14 bg-m-primary text-white hover:bg-m-primary/80">
          Book A Trip Now
        </Button>
      </motion.div>
    </div>
  );
};

export default Caption;
