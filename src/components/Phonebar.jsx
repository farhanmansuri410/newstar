
import React from "react";
const Phonebar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#271A70] text-white text-center py-3 z-50 shadow-lg">
      <a
        href="tel:+916367820171" // 🔁 Yahan client ka number dijiye
        className="text-lg font-semibold hover:underline transition"
        aria-label="Call our client"
      >
        📞 Call Us Now: +91 63678 20171
      </a>
    </div>
  );
};

export default Phonebar;
