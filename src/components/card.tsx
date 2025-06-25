import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";

interface CardType {
  title: string;
  desc: string;
  img: string;
}

const Card = ({ title, desc, img }: CardType) => {
  return (
    <div className="p-4 group">
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
          <div className="text-2xl font-bold">{title}</div>
          <div className="mt-1 text-foreground/50">{desc}</div>
        </div>
        <Button
          size="icon"
          className="bg-m-primary hover:bg-m-primary/80 text-white size-12"
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default Card;
