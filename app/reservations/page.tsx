"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, MapPin, Phone, Mail, User, MessageSquare, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ReservationsPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    departureDate: "",
    returnDate: "",
    departurePlace: "",
    destination: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const destinations = [
    "Maputo",
    "Inhambane",
    "Bazaruto",
    "Pemba",
    "Ilha de Moçambique",
    "Tofo",
    "Vilanculos",
    "Nacala",
    "Outro destino",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would normally send the data to your server
    console.log("Reservation data:", formData)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("reservationSentTitle")}</h2>
            <p className="text-gray-600 mb-6">{t("reservationSent")}</p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-[#01a090] hover:bg-[#01a090]/90">
              {t("newReservation")}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("reservationTitle")}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t("reservationSubtitle")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trust Indicators */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-[#01a090]" />
                    <span>{t("secureReservation")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{t("dataProtected")}</p>
                      <p className="text-xs text-gray-600">{t("dataProtectedDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{t("quickResponse")}</p>
                      <p className="text-xs text-gray-600">{t("quickResponseDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{t("noCommitment")}</p>
                      <p className="text-xs text-gray-600">{t("noCommitmentDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{t("support247")}</p>
                      <p className="text-xs text-gray-600">{t("support247Desc")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#01a090]">{t("reservationForm")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{t("fullName")} *</span>
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                          placeholder={t("fullNamePlaceholder")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{t("phone")} *</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                          placeholder={t("phonePlaceholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{t("email")} *</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="departureDate" className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{t("departureDate")} *</span>
                        </Label>
                        <Input
                          id="departureDate"
                          type="date"
                          required
                          value={formData.departureDate}
                          onChange={(e) => handleInputChange("departureDate", e.target.value)}
                          className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="returnDate" className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{t("returnDate")} *</span>
                        </Label>
                        <Input
                          id="returnDate"
                          type="date"
                          required
                          value={formData.returnDate}
                          onChange={(e) => handleInputChange("returnDate", e.target.value)}
                          className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="departurePlace" className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{t("departurePlace")} *</span>
                        </Label>
                        <Input
                          id="departurePlace"
                          type="text"
                          required
                          value={formData.departurePlace}
                          onChange={(e) => handleInputChange("departurePlace", e.target.value)}
                          className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                          placeholder={t("departurePlacePlaceholder")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination" className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{t("destination")} *</span>
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("destination", value)}>
                          <SelectTrigger className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]">
                            <SelectValue placeholder={t("destinationPlaceholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            {destinations.map((dest) => (
                              <SelectItem key={dest} value={dest}>
                                {dest}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{t("message")}</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                        placeholder={t("messagePlaceholder")}
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#01a090] hover:bg-[#01a090]/90 text-white py-3 text-lg font-semibold"
                    >
                      {t("submitReservation")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
