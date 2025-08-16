import { Megaphone } from "lucide-react";

const Alerts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 py-4 px-4 bg-blue-100 text-center md:text-left">
      {/* Announcement */}
      <p className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="flex items-center gap-2">
          <Megaphone className="w-5 h-5 shrink-0" />
          <span className="font-bold">Important Announcement:</span>
        </span>
        <span className="text-sm sm:text-base">
          Admission Round for BTech, BBA & Integrated MBA (After Class XII) 
          closing on <strong>May 31, 2024</strong>. Limited Seats Left.
        </span>
      </p>

      {/* Button */}
      <button className="bg-amber-800 rounded-full text-white px-4 py-2 text-sm md:text-base hover:bg-amber-700 transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default Alerts;
