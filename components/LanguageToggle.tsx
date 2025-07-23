"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <div className="relative">
      <button
        onClick={toggleLanguage}
        className="relative flex items-center w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#01a090] focus:ring-offset-2"
        aria-label="Toggle language"
      >
        {/* Background track */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>

        {/* Sliding ball */}
        <div
          className={`relative z-10 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            language === "en" ? "translate-x-8" : "translate-x-0"
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-sm"></div>
        </div>

        {/* PT label */}
        <span
          className={`absolute left-1.5 text-xs font-semibold transition-colors duration-300 ${
            language === "pt" ? "text-[#01a090]" : "text-gray-500"
          }`}
        >
          PT
        </span>

        {/* EN label */}
        <span
          className={`absolute right-1.5 text-xs font-semibold transition-colors duration-300 ${
            language === "en" ? "text-[#01a090]" : "text-gray-500"
          }`}
        >
          EN
        </span>
      </button>
    </div>
  )
}
