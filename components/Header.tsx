"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageToggle from "@/components/LanguageToggle"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("memories"), href: "/memories" },
    { name: t("contact"), href: "/contact" },
  ]

  const servicesDropdown = [
    { name: t("services"), href: "/services" },
    { name: t("reservations"), href: "/reservations" },
    { name: t("destinations"), href: "/destinations" },
    { name: t("team"), href: "/team" },
  ]

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const handleClick = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image src="/logo.png" alt="CAMY Travel Advisor Logo" fill className="object-contain" priority />
            </div>
            <div className="text-gray-800">
              <div className="font-bold text-[#01a090]">CAMY</div>
              <div className="text-sm text-[#01a090]">Travel Advisor</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-[#01a090] transition-colors duration-200 ${
                  pathname === item.href ? "text-[#01a090] font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                onClick={handleClick}
                className={`flex items-center space-x-1 text-gray-700 hover:text-[#01a090] transition-colors duration-200 ${
                  servicesDropdown.some((item) => pathname === item.href) ? "text-[#01a090] font-semibold" : ""
                }`}
              >
                <span>{t("services")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#01a090] transition-colors duration-200 ${
                        pathname === item.href ? "text-[#01a090] bg-gray-50 font-semibold" : ""
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />

            {/* Mobile menu button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-700 hover:text-[#01a090] hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-[#01a090] transition-colors duration-200 py-2 px-4 rounded ${
                    pathname === item.href ? "text-[#01a090] bg-blue-50" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {t("services")}
                </div>
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-700 hover:text-[#01a090] transition-colors duration-200 py-2 px-6 rounded block ${
                      pathname === item.href ? "text-[#01a090] bg-blue-50" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
