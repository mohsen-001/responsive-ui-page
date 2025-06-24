import Link from "next/link";
import { Button } from "../ui/button";

const _MENUS = ["About", "Tour", "Packages", "Contact"];

const Header = () => {
  return (
    <header>
      <div className="h-28 flex items-center justify-between w-full max-w-[1600px] mx-auto px-32">
        <div className="font-black text-3xl">LOGO</div>
        <div className="flex items-center gap-10">
          {_MENUS.map((menu, i) => (
            <Link href="#" key={i} className="uppercase">
              {menu}
            </Link>
          ))}
        </div>
        <Button>Book Trip</Button>
      </div>
    </header>
  );
};

export default Header;
