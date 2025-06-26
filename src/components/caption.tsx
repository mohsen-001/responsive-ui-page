"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

const Caption = () => {
  return (
    <div className="absolute top-2/4 start-24 -translate-y-2/4 text-black max-md:start-16 max-[520px]:!start-10 max-[400px]:!start-2/4 max-[400px]:!-translate-x-2/4 max-[400px]:!-translate-y-0 max-[400px]:!top-14">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        className="uppercase max-[400px]:text-center max-[400px]:text-xs"
      >
        Elevate Your Travel Journey
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ ease: "easeOut", delay: 0.2, duration: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        className="capitalize text-7xl leading-[1.2] font-bold mb-8 max-xl:text-6xl max-md:text-5xl max-[520px]:!text-4xl max-[400px]:text-center max-[400px]:!text-3xl"
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
