"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, MapPin, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ServicesPage() {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      title: t("businessRetreats"),
      description: t("businessRetreatDesc"),
      icon: Users,
      image: "/placeholder.svg?height=400&width=600",
      features: [
        t("teamBuildingActivities"),
        t("professionalMeetingSpaces"),
        t("luxuryAccommodations"),
        t("cateringServices"),
        t("transportationIncluded"),
        t("customItineraries"),
      ],
      detailedDescription: t("businessRetreatDetailed"),
      sampleItinerary: [t("day1Arrival"), t("day2TeamBuilding"), t("day3Cultural"), t("day4Departure")],
    },
    {
      title: t("personalVacations"),
      description: t("personalVacationDesc"),
      icon: MapPin,
      image: "/placeholder.svg?height=400&width=600",
      features: [
        t("customizedItineraries"),
        t("familyFriendlyActivities"),
        t("romanticGetaways"),
        t("adventureTours"),
        t("culturalExperiences"),
        t("support247"),
      ],
      detailedDescription: t("personalVacationDetailed"),
      sampleItinerary: [t("day12Maputo"), t("day35Inhambane"), t("day67Bazaruto"), t("day8Return")],
    },
    {
      title: t("eventOrganization"),
      description: t("eventOrganizationDesc"),
      icon: Calendar,
      image: "/placeholder.svg?height=400&width=600",
      features: [
        t("weddingPlanning"),
        t("corporateEvents"),
        t("culturalCelebrations"),
        t("venueSelection"),
        t("vendorCoordination"),
        t("fullEventManagement"),
      ],
      detailedDescription: t("eventOrganizationDetailed"),
      sampleItinerary: [
        t("initialPlanning"),
        t("vendorCoordination2"),
        t("logisticsManagement"),
        t("perfectExecution"),
      ],
    },
  ]

  const faqs = [
    {
      question: t("faqServiceQ1"),
      answer: t("faqServiceA1"),
    },
    {
      question: t("faqServiceQ2"),
      answer: t("faqServiceA2"),
    },
    {
      question: t("faqServiceQ3"),
      answer: t("faqServiceA3"),
    },
    {
      question: t("faqServiceQ4"),
      answer: t("faqServiceA4"),
    },
    {
      question: t("faqServiceQ5"),
      answer: t("faqServiceA5"),
    },
    {
      question: t("faqServiceQ6"),
      answer: t("faqServiceA6"),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("servicesPageTitle")}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t("servicesPageSubtitle")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-10 h-10 text-[#01a090]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#01a090]" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-[#01a090] hover:bg-[#01a090]/90 text-white"
                          onClick={() => setSelectedService(index)}
                        >
                          {t("learnMore")} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#01a090]">{service.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              width={400}
                              height={300}
                              className="rounded-lg object-cover w-full"
                            />
                          </div>
                          <div>
                            <p className="text-gray-600 mb-4">{service.detailedDescription}</p>
                            <h4 className="font-semibold text-lg mb-3">{t("featuresIncluded")}:</h4>
                            <div className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-[#01a090]" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <h4 className="font-semibold text-lg mb-3">{t("sampleItinerary")}:</h4>
                          <div className="space-y-2">
                            {service.sampleItinerary.map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <div className="w-6 h-6 bg-[#01a090] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                  {idx + 1}
                                </div>
                                <span className="text-sm text-gray-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("faqTitle")}</h2>
            <p className="text-xl text-gray-600">{t("faqSubtitle")}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01a090] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("readyToStart")}</h2>
          <p className="text-xl mb-8">{t("readyToStartText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#01a090] hover:bg-gray-100">
              <a href="/reservations">{t("makeReservation")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#01a090] bg-transparent"
            >
              <a href="/contact">{t("talkToUs")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
