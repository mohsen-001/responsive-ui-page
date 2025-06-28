"use client";

import { useLocale, useTranslations } from "next-intl";
import Card from "./card";
import { motion } from "motion/react";

const popularDestinations = [
  {
    image: "/images/cities/paris.jpg",
    title_en: "Paris, France",
    title_fa: "پاریس، فرانسه",
    description_en: "Romantic city known for art and fashion.",
    description_fa: "شهری رمانتیک مشهور به هنر و مد.",
  },
  {
    image: "/images/cities/tokyo.jpg",
    title_en: "Tokyo, Japan",
    title_fa: "توکیو، ژاپن",
    description_en: "A blend of ultramodern and traditional.",
    description_fa: "ترکیبی از مدرنیته و سنت.",
  },
  {
    image: "/images/cities/ny.jpg",
    title_en: "New York City, USA",
    title_fa: "نیویورک، آمریکا",
    description_en: "The city that never sleeps.",
    description_fa: "شهری که هرگز نمی‌خوابد.",
  },
  {
    image: "/images/cities/rome.jpg",
    title_en: "Rome, Italy",
    title_fa: "رم، ایتالیا",
    description_en: "City of ancient ruins and pasta.",
    description_fa: "شهر ویرانه‌های باستانی و پاستا.",
  },
  {
    image: "/images/cities/bali.jpg",
    title_en: "Bali, Indonesia",
    title_fa: "بالی، اندونزی",
    description_en: "A tropical escape with serene views.",
    description_fa: "فراری گرمسیری با مناظری آرامش‌بخش.",
  },
  {
    image: "/images/cities/cape-town.jpg",
    title_en: "Cape Town, South Africa",
    title_fa: "کیپ‌تاون، آفریقای جنوبی",
    description_en: "Where mountains meet the ocean.",
    description_fa: "جایی که کوه‌ها به دریا می‌رسند.",
  },
];

const DestinationSection = () => {
  const locale = useLocale();
  const t = useTranslations("DestinationSection");
  return (
    <section className="px-20 max-xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-5xl font-bold max-xl:text-4xl">{t("title")}</div>
        <div className="mt-4 text-foreground/50">{t("sub-title")}</div>
      </motion.div>
      <div className="mt-6 grid grid-cols-3 gap-8 max-[1096px]:grid-cols-2 max-md:grid-cols-1">
        {popularDestinations.map((item, i) => (
          <Card
            title={locale === "fa" ? item.title_fa : item.title_en}
            desc={locale === "fa" ? item.description_fa : item.description_en}
            img={item.image}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
