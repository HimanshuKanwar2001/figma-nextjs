// components/PlacementHighlights.tsx
"use client";

import KeyRecruitersCarousel from "@/components/KeyRecruitersCarousel";
import { motion } from "framer-motion";
import { Briefcase, Building2, Award, DollarSign } from "lucide-react";

const highlights = [
  {
    value: "₹60.71 LPA",
    label: "Highest Package Offered by LinkedIn",
    icon: Briefcase,
    bg: "bg-[#9ADCE3]",
  },
  {
    value: "252",
    label: "Companies Visited In 2024",
    icon: Building2,
    bg: "bg-[#F6CAB5]",
  },
  {
    value: "1667",
    label: "Placements & Internship Offered - 2024 Batch",
    icon: Award,
    bg: "bg-[#FEE8BB]",
  },
  {
    value: "₹1.25 LPM",
    label: "Highest Internship Stipend Offered by Microsoft",
    icon: DollarSign,
    bg: "bg-[#BDEDF9]",
  },
];

const companies = [
  { name: "LinkedIn", logo: "/assets/linkedin.png" },
  { name: "Microsoft", logo: "/assets/microsoft.png" },
  { name: "Cisco", logo: "/assets/cisco.png" },
  { name: "Amazon", logo: "/assets/amazon.png" },
  { name: "Morgan Stanley", logo: "/assets/morgan.png" },
  { name: "PlaySimple", logo: "/assets/playsimple.png" },
  { name: "ZS", logo: "/assets/zs.png" },
];

export default function PlacementHighlights() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Description */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-20 mb-12">
          <div className="flex flex-col items-start flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-1">Placement</h2>
            <p className="text-base sm:text-lg">Highlights</p>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            With our excellent placement record, you can land your dream role.
            Top employers recruit from JIIT, offering top salary packages and
            establishing a lucrative career ahead.
          </p>
        </div>

        {/* Highlight Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-lg p-4 sm:p-6 ${item.bg} shadow-md`}
            >
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-start pb-1 font-bold">
                    {item.value}
                  </h3>
                  <p className="text-gray-900 text-sm sm:text-base">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Recruiters */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="lg:w-1/4 text-start flex-shrink-0">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
              Key Recruiters
            </h3>
            <p className="text-sm sm:text-base">Placement Companies</p>
          </div>
          <div className="flex-1">
            <KeyRecruitersCarousel data={companies} />
          </div>
        </div>
      </div>
    </section>
  );
}
