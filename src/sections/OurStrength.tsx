"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const strengths = [
  {
    icon: <Image src="/assets/book.png" width={100} height={100} alt="book" className="w-[81px] h-[65px]" />,
    number: "6719",
    title: "Publications",
    description: "Impactful research through JIIT's publications",
    bgColor: "bg-orange-600",
    textColor: "text-white",
  },
  {
    icon: <Image src="/assets/funding02.png" width={100} height={100} alt="funding" className="w-[65px] h-[65px]" />,
    number: "88",
    title: "Funded Projects",
    description: "Supporting innovation with funded projects",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: <Image src="/assets/startup03.png" width={100} height={100} alt="startup" className="w-[65px] h-[65px]" />,
    number: "16",
    title: "Startups",
    description: "Empowering ideas into startups at JIIT",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: <Image src="/assets/NAAC_LOGO.png" width={100} height={100} alt="naac" className="w-[88px] h-[88px]" />,
    title: "Accreditation",
    description: "Accredited by NAAC with ‘A’ grade in 2023",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: <Image src="/assets/All_India_council.png" width={100} height={100} alt="aicte" className="w-[80px] h-[80px]" />,
    title: "Approval",
    description: "AICTE approved Institution since 2018",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

// Duplicate for infinite loop
const loopedStrengths = [...strengths, ...strengths, ...strengths];

export default function OurStrength() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector(".card") as HTMLElement | null;
      if (firstCard) {
        const gap = parseInt(getComputedStyle(carouselRef.current).columnGap || "16");
        setCardWidth(firstCard.offsetWidth + gap);
      }
    }
  }, []);

  // Start from middle for infinite effect
  useEffect(() => {
    if (carouselRef.current && cardWidth) {
      carouselRef.current.scrollLeft = strengths.length * cardWidth;
    }
  }, [cardWidth]);

  // Infinite reset
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const maxScroll = strengths.length * 2 * cardWidth;
    if (carouselRef.current.scrollLeft <= 0) {
      carouselRef.current.scrollLeft = strengths.length * cardWidth;
    } else if (carouselRef.current.scrollLeft >= maxScroll) {
      carouselRef.current.scrollLeft = strengths.length * cardWidth;
    }
  };

  const scrollByAmount = (amount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!cardWidth) return;
    const interval = setInterval(() => {
      scrollByAmount(cardWidth);
    }, 5000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-20 mx-auto text-center relative">
        {/* Heading & Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left"
        >
          Our Strength
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-sm sm:text-base max-w-3xl mb-12 text-left"
        >
          Jaypee Institute of Information Technology (JIIT) is a premier institution for a reason...
        </motion.p>

        {/* Arrows */}
        <button
          onClick={() => scrollByAmount(-cardWidth)}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scrollByAmount(cardWidth)}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <ArrowRight size={20} />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {loopedStrengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: (index % strengths.length) * 0.15,
                duration: 0.5,
              }}
              className={`card flex-shrink-0 w-[70%] sm:w-[260px] rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-start ${item.bgColor}`}
            >
              <div className="mb-4">{item.icon}</div>
              {item.number && (
                <p className={`text-2xl sm:text-3xl font-bold ${item.textColor}`}>
                  {item.number}
                </p>
              )}
              <h3 className={`mt-2 font-semibold ${item.textColor}`}>
                {item.title}
              </h3>
              <p
                className={`mt-1 text-xs sm:text-sm text-start ${
                  item.textColor === "text-white"
                    ? "text-white/80"
                    : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
