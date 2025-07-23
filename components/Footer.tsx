"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="CAMY Travel Advisor Logo" fill className="object-contain" />
              </div>
              <div className="text-gray-800">
                <div className="font-bold text-xl">CAMY Travel Advisor</div>
                <div className="text-sm text-gray-600">Mozambique</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">{t("companyMotto")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#01a090] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#01a090] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#01a090] transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-600 hover:text-[#01a090] transition-colors">
                  {t("destinations")}
                </Link>
              </li>
              <li>
                <Link href="/memories" className="text-gray-600 hover:text-[#01a090] transition-colors">
                  {t("memories")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#01a090] transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("contact")}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+258 84 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@camytravel.co.mz</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Maputo, Moçambique</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 CAMY Travel Advisor. {t("allRightsReserved")}.</p>
        </div>
      </div>
    </footer>
  )
}
