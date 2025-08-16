"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "LinkedIn", logo: "/assets/linkedin.png" },
  { name: "Microsoft", logo: "/assets/microsoft.png" },
  { name: "Cisco", logo: "/assets/cisco.png" },
  { name: "Amazon", logo: "/assets/amazon.png" },
  { name: "Morgan Stanley", logo: "/assets/morgan.png" },
  { name: "PlaySimple", logo: "/assets/playsimple.png" },
  { name: "ZS", logo: "/assets/zs.png" },
];

export default function KeyRecruitersCarousel({ data = companies }) {
  return (
    <div className="mb-12 overflow-hidden w-full">
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 15, // speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...data, ...data].map((company, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 border rounded-lg shadow-sm bg-white flex items-center justify-center"
            style={{
              width: "clamp(80px, 12vw, 140px)",
              height: "clamp(50px, 8vw, 80px)",
            }}
          >
            <Image
              src={company.logo}
              width={140}
              height={80}
              className="object-contain w-full h-full p-2"
              alt={`${company.name}-logo`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
