"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

interface CardType {
  title: string;
  desc: string;
  img: string;
}

const Card = ({ title, desc, img }: CardType) => {
  const locale = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative w-full aspect-[16/9] rounded-4xl overflow-hidden mb-6">
        <Image
          src={img}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt=""
          className="group-hover:scale-110 transition-transform"
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold max-xl:text-xl">{title}</div>
          <div className="mt-1 text-foreground/50">{desc}</div>
        </div>
        <Button
          size="icon"
          className="bg-m-primary hover:bg-m-primary/80 text-white size-12"
        >
          <ChevronRightIcon className={`${locale === "fa" && "rotate-180"}`} />
        </Button>
      </div>
    </motion.div>
  );
};

export default Card;
