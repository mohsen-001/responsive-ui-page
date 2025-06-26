import Link from "next/link";

const _MENUS = ["About", "Tour", "Packages", "Contact"];
const Menu = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-12 max-sm:flex-col ${className}`}>
      {_MENUS.map((menu, i) => (
        <Link
          href="#"
          key={i}
          className="uppercase tracking-widest text-foreground/60 hover:text-foreground transition-all"
        >
          {menu}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
