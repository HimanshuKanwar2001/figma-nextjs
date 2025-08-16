import CampusSection from "@/sections/CampusSection";
import Navbar from "@/sections/Header";
import Hero from "@/sections/Hero";
import OurStrength from "@/sections/OurStrength";
import PlacementHighlights from "@/sections/PlacementHighlights";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  mx-auto">
      <Navbar />
      <Hero/>
      <OurStrength/>
      <CampusSection/>
      <PlacementHighlights/>
    </div>
  );
}
