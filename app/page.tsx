"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HomePage() {
  const { t, language } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Santos",
      text: t("testimonial1"),
      rating: 5,
    },
    {
      name: "João Silva",
      text: t("testimonial2"),
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: t("testimonial3"),
      rating: 5,
    },
  ]

  const featuredDestinations = [
    {
      name: "Maputo",
      description: t("maputoDesc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Inhambane",
      description: t("inhambaneDesc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Arquipélago do Bazaruto",
      description: t("bazarutoDesc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Pemba",
      description: "Portal para as ilhas Quirimbas e mergulho espetacular",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Typography */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
          {/* Floating Circles Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#01a090]/10 rounded-full animate-float"></div>
            <div
              className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-200/20 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-200/15 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#01a090]/15 rounded-full animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-cyan-300/10 rounded-full animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Wave Animation */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="fill-[#01a090]/20 animate-wave"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="fill-[#01a090]/30 animate-wave"
                style={{ animationDelay: "0.5s" }}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="fill-[#01a090]/40 animate-wave"
                style={{ animationDelay: "1s" }}
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative z-20 text-center text-gray-800 max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image src="/logo.png" alt="CAMY Travel Advisor Logo" fill className="object-contain animate-float" />
            </div>
          </div>

          {/* Enhanced Hero Text */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">{t("heroTitle")}</h1>

            <div className="text-4xl md:text-7xl font-bold leading-tight">
              <div className="text-gray-800 mb-2">
                {t("heroMainText")} <span className="text-[#01a090]">{t("heroHighlight1")}</span>
              </div>
              <div className="text-gray-800">
                {t("heroOr")} <span className="text-[#01a090]">{t("heroHighlight2")}</span>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-light italic">{t("heroSubtitle")}</p>

          <Button
            asChild
            size="lg"
            className="bg-[#01a090] hover:bg-[#01a090]/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/reservations">
              {t("planTrip")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <p className="mt-8 text-lg text-gray-600 italic font-medium">"{t("companyMotto")}"</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("aboutTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("aboutText")}</p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("featuredDestinations")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-sm text-gray-200">{destination.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#01a090] text-[#01a090] hover:bg-[#01a090] hover:text-white bg-transparent"
                    >
                      <Link href="/destinations">{t("viewDetails")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">{t("testimonialsTitle")}</h2>
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <p className="font-semibold text-[#01a090]">- {testimonials[currentTestimonial].name}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01a090]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{t("ctaTitle")}</h2>
          <p className="text-xl mb-8">{t("ctaText")}</p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[#01a090] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">
              {t("contactUs")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
