"use client";

import { useTranslations } from "next-intl";
import Menu from "../menu";
import ToggleLanguage from "../toggle-language";
import { Separator } from "../ui/separator";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t bg-foreground/5">
      <div className="w-full max-w-[1600px] mx-auto px-32 py-12 flex flex-col items-center justify-center gap-12 max-md:px-8">
        <div className="font-black text-3xl">{t("logo")}</div>
        <Menu />
        <Separator />
        <div className="flex items-center justify-between w-full max-[520px]:flex-col max-[520px]:gap-6">
          <p className="text-center text-sm text-foreground/60">
            {t("copyright")}
          </p>
          <ToggleLanguage />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
