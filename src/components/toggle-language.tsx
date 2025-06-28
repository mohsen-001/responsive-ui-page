"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const ToggleLanguage = () => {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <Select
      value={locale}
      onValueChange={(value) => handleToggle(value)}
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      <SelectTrigger className="w-[120px] bg-background">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("lang")}</SelectLabel>
          <SelectItem value="fa">فارسی</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ToggleLanguage;
