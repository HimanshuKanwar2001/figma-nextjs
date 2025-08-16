"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/Banner.jpg", // ✅ make sure this file exists in /public/assets
    heading: "Explore Life-Changing Opportunities",
    subHeading: "Providing the best of everything for overall growth",
    stats: [
      { value: "712", label: "Placement", subLabel: "(Till Date)" },
      { value: "88", label: "Funded Projects" },
      { value: "30", label: "Patents" },
      { value: "6719", label: "Publications" },
    ],
  },
  {
    id: 2,
    image: "/assets/Banner.jpg", // ✅ add another banner in /public/assets
    heading: "Innovating for a Better Future",
    subHeading: "Empowering ideas with resources and mentorship",
    stats: [
      { value: "500+", label: "Startups" },
      { value: "120", label: "Research Labs" },
      { value: "45", label: "Awards" },
      { value: "3000+", label: "Students" },
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<null | number>(null);

  const changeSlide = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(
        () => changeSlide(1),
        5000
      ) as unknown as number;
    }
    return () => clearInterval(timerRef.current as unknown as number);
  }, [paused]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl px-10 my-8 h-[550px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 px-6"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt="Hero Image"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-2xl flex flex-col justify-center px-10">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white text-4xl font-bold leading-snug"
              >
                {slides[current].heading}
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/90 mt-2 text-lg"
              >
                {slides[current].subHeading}
              </motion.p>

              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center w-fit gap-2 bg-orange-600 rounded-full text-white py-2 px-5 mt-4 hover:bg-orange-700 transition"
              >
                Know More About the JIIT <ArrowRight size={18} />
              </motion.button>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex gap-8 mt-8 text-white"
              >
                {slides[current].stats.map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="text-sm mt-2">{stat.label}</p>
                    {stat.subLabel && (
                      <p className="text-xs text-white/70">{stat.subLabel}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute right-9 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2   rounded-full transition ${
              index === current ? "bg-orange-500 h-8" : "bg-white/70 h-4"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
