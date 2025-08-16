import { ALargeSmall, Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Alerts from "@/components/Alerts";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-20 gap-4 py-4">
        {/* Logo & Title */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 flex-1 min-w-[250px]">
          <div className="flex-shrink-0">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="w-16 sm:w-20 h-auto"
            />
          </div>

          <div className="flex flex-col justify-center items-start text-[#2F3472] max-w-full">
            <h3 className="font-extrabold text-lg sm:text-xl leading-tight">
              JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA
            </h3>
            <h4 className="font-semibold text-sm sm:text-base">
              (Deemed to be a University under section 3 of UGC Act 1956)
            </h4>
          </div>
        </div>

        {/* Contact Info & Search */}
        <div className="flex flex-col items-end gap-3 flex-1 min-w-[250px]">
          {/* Contact */}
          <div className="flex flex-wrap justify-end gap-4 text-sm sm:text-base">
            <span className="flex gap-2 items-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> +91-120-2594300/400
            </span>
            <span className="flex gap-2 items-center">
              <Mail className="w-4 h-4" /> admission@jiit.ac.in
            </span>
            <span className="flex gap-2 items-center">
              <ALargeSmall className="w-4 h-4" />
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <input
              type="search"
              placeholder="Search"
              className="w-full border-none bg-gray-200 rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute bg-blue-900 text-white rounded-full h-6 w-6 p-1 right-2 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Alerts */}
      <Alerts />
    </header>
  );
};

export default Header;
