"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const Menu = ({ className }: { className?: string }) => {
  const t = useTranslations("Header");
  const _MENUS = [t("about"), t("tour"), t("packages"), t("contact")];
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
