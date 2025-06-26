"use client";

import Card from "./card";
import { motion } from "motion/react";

const popularDestinations = [
  {
    image: "/images/cities/paris.jpg",
    title: "Paris, France",
    description: "Romantic city known for art and fashion.",
  },
  {
    image: "/images/cities/tokyo.jpg",
    title: "Tokyo, Japan",
    description: "A blend of ultramodern and traditional.",
  },
  {
    image: "/images/cities/ny.jpg",
    title: "New York City, USA",
    description: "The city that never sleeps.",
  },
  {
    image: "/images/cities/rome.jpg",
    title: "Rome, Italy",
    description: "City of ancient ruins and pasta.",
  },
  {
    image: "/images/cities/bali.jpg",
    title: "Bali, Indonesia",
    description: "A tropical escape with serene views.",
  },
  {
    image: "/images/cities/cape-town.jpg",
    title: "Cape Town, South Africa",
    description: "Where mountains meet the ocean.",
  },
];

const DestinationSection = () => {
  return (
    <section className="px-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-5xl font-bold">Popular Destination</div>
        <div className="mt-4 text-foreground/50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </motion.div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {popularDestinations.map((item, i) => (
          <Card
            title={item.title}
            desc={item.description}
            img={item.image}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
