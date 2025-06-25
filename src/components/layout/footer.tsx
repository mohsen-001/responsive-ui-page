import Menu from "../menu";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-foreground/5">
      <div className="w-full max-w-[1600px] mx-auto px-32 py-12 flex flex-col items-center justify-center gap-12">
        <div className="font-black text-3xl">LOGO</div>
        <Menu />
        <Separator />
        <p className="text-center text-sm text-gray-500">
          © 2025 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
