"use client";

import KeyRecruitersCarousel from "@/components/KeyRecruitersCarousel";
import { motion } from "framer-motion";
import { Key, MapPinHouse } from "lucide-react";
import Image from "next/image";

export default function CampusSection() {
  const campuses = [
    { title: "Main Campus", img: "/assets/main_campus.png" },
    { title: "Wish Town Campus", img: "/assets/wish_town_campus.png" },
    { title: "Vidya Vihar", img: "/assets/vidya_vihar.png" },
  ];

  const logos = [
    { name: "LinkedIn", logo: "/assets/linkedin.png" },
    { name: "Microsoft", logo: "/assets/microsoft.png" },
    { name: "Cisco", logo: "/assets/cisco.png" },
    { name: "Amazon", logo: "/assets/amazon.png" },
    { name: "Morgan Stanley", logo: "/assets/morgan.png" },
    { name: "PlaySimple", logo: "/assets/playsimple.png" },
    { name: "ZS", logo: "/assets/zs.png" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 mx-auto max-w-7xl">
      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center lg:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        JIIT Campus
      </motion.h2>

      {/* Campuses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {campuses.map((campus, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={campus.img}
              alt={campus.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="bg-[#1E2A5E] text-white py-3 px-4 flex items-center justify-between">
              <span className="font-semibold text-sm sm:text-base">
                {campus.title}
              </span>
              <MapPinHouse className="w-5 h-5" />
            </div>
          </motion.div>
        ))}

        {/* Acre Info Box */}
        <motion.div
          className="relative bg-[#F8F5EE] min-h-[180px] sm:min-h-[220px] rounded-xl py-6 px-6 sm:px-10 flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-[#1E2A5E] text-sm sm:text-lg font-medium">
            Jaypee Institute of Information Technology has a campus{" "}
            <strong>spanning</strong>
          </p>
          <div className="mt-4 sm:mt-0">
            <p className="text-orange-500 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              18.25
            </p>
            <p className="text-[#1E2A5E] text-xl sm:text-3xl font-semibold">
              acres
            </p>
          </div>
        </motion.div>
      </div>

      {/* Logos */}
      <motion.div
        className=" sm:gap-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <KeyRecruitersCarousel data={logos} />
      </motion.div>
    </section>
  );
}
