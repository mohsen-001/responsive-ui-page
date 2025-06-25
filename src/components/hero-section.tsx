import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative w-full aspect-[16/9] rounded-[48px] overflow-hidden">
        <Image
          src="/images/hero-section-img.jpg"
          fill
          style={{ objectFit: "cover" }}
          priority
          alt=""
        />
      </div>
      <Image
        src="/images/airplane.png"
        priority
        alt=""
        width={800}
        height={800}
        className="absolute top-30 -end-40"
      />
      <div className="absolute bottom-0 end-0 h-fit w-fit group">
        <div className="relative">
          <div className="absolute top-[2px] -translate-y-full -end-[2px]">
            <svg
              width="70"
              height="70"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0906 34.3457H0.090642V34.2295C18.1516 32.8149 32.5605 18.4066 33.9754 0.345703H34.0906V34.3457Z"
                className="fill-background"
              />
            </svg>
          </div>
          <div className="absolute -bottom-[2px] -translate-x-full start-[2px]">
            <svg
              width="70"
              height="70"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0906 34.3457H0.090642V34.2295C18.1516 32.8149 32.5605 18.4066 33.9754 0.345703H34.0906V34.3457Z"
                className="fill-background"
              />
            </svg>
          </div>
          <div className="absolute top-[32px] start-[65px]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0906 34.3457H0.090642V34.2295C18.1516 32.8149 32.5605 18.4066 33.9754 0.345703H34.0906V34.3457Z"
                className="fill-background"
              />
            </svg>
          </div>
          <div className="absolute top-[61px] start-[91px] z-20">
            <svg
              width="40"
              height="40"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.6958 28.3477H0.695808C16.1598 28.3477 28.6958 15.8116 28.6958 0.347656V28.3477Z"
                className="fill-foreground/5 group-hover:fill-foreground transition-colors"
              />
            </svg>
          </div>
          <div className="ms-auto w-fit rounded-ss-[48px] pt-5 ps-5 bg-background relative z-10">
            <div className="flex items-center bg-foreground/5 justify-end gap-20 py-6 px-10 w-fit rounded-ss-[28px] rounded-se-[28px] group-hover:bg-foreground group-hover:text-background transition-colors">
              <div className="text-2xl font-bold">Learn More</div>
              <ArrowRight />
            </div>
          </div>
          <div className="rounded-ss-[48px] bg-background pt-5 ps-5 -mt-5">
            <div className="bg-foreground/5 flex items-center gap-4 p-4 rounded-ss-[28px] rounded-ee-[28px] rounded-es-[28px] group-hover:bg-foreground transition-colors">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar className="size-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="size-16">
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="size-16">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
              <div className="w-[200px] group-hover:text-background">
                <div className="font-bold">Awesome Places</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-2/4 start-24 -translate-y-2/4 text-black">
        <div className="uppercase">Elevate Your Travel Journey</div>
        <div className="capitalize text-7xl leading-[1.2] font-bold mb-8">
          Experience <br /> the magic of <br /> flight!
        </div>
        <Button className="py-8 px-14 bg-m-primary text-white hover:bg-m-primary/80">
          Book A Trip Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
