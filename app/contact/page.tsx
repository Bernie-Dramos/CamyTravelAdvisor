"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageSquare, User, CheckCircle, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would normally send the data to your server
    console.log("Contact form data:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t("phone"),
      details: ["+258 84 123 4567", "+258 21 987 6543"],
      action: "tel:+25884123456",
    },
    {
      icon: Mail,
      title: t("email"),
      details: ["info@camytravel.co.mz", "reservas@camytravel.co.mz"],
      action: "mailto:info@camytravel.co.mz",
    },
    {
      icon: MapPin,
      title: t("address"),
      details: ["Avenida Julius Nyerere, 123", "Maputo, Moçambique"],
      action: null,
    },
    {
      icon: Clock,
      title: t("workingHours"),
      details: [t("mondayFriday"), t("saturday")],
      action: null,
    },
  ]

  const faqs = [
    {
      question: t("responseTimeQ"),
      answer: t("responseTimeA"),
    },
    {
      question: t("inPersonConsultationQ"),
      answer: t("inPersonConsultationA"),
    },
    {
      question: t("consultationCostsQ"),
      answer: t("consultationCostsA"),
    },
    {
      question: t("paymentMethodsQ"),
      answer: t("paymentMethodsA"),
    },
    {
      question: t("groupDiscountsQ"),
      answer: t("groupDiscountsA"),
    },
    {
      question: t("travelInsuranceQ"),
      answer: t("travelInsuranceA"),
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("messageSentTitle")}</h2>
            <p className="text-gray-600 mb-6">{t("messageSent")}</p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-[#01a090] hover:bg-[#01a090]/90">
              {t("newMessage")}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800">
        <div className="absolute inset-0 bg-white/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("contactTitle")}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t("contactSubtitle")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#01a090]">{t("contactInfo")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#01a090]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#01a090]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {info.action && idx === 0 ? (
                              <a href={info.action} className="hover:text-[#01a090] transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#01a090]">{t("quickActions")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-[#01a090] hover:bg-[#01a090]/90 text-white">
                    <a href="tel:+25884123456" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{t("callNow")}</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#01a090] text-[#01a090] hover:bg-[#01a090] hover:text-white bg-transparent"
                  >
                    <a href="/reservations" className="flex items-center justify-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{t("makeReservation")}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#01a090]">{t("followUs")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#01a090]">{t("sendUsMessage")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{t("name")} *</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                          placeholder={t("nameCompletePlaceholder")}
                        />
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
                    </div>

                    <div>
                      <Label htmlFor="subject" className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{t("subject")} *</span>
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                        placeholder={t("subjectPlaceholder")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{t("message")} *</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1 focus:ring-[#01a090] focus:border-[#01a090]"
                        placeholder={t("contactMessagePlaceholder")}
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#01a090] hover:bg-[#01a090]/90 text-white py-3 text-lg font-semibold"
                    >
                      {t("sendMessage")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("faqContactTitle")}</h2>
            <p className="text-xl text-gray-600">{t("faqContactSubtitle")}</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-[#01a090]">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
