"use client"

import Image from "next/image"
import { MapPin, Award, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TeamPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      id: 1,
      name: "Carlos Mateus",
      role: t("carlosRole"),
      bio: t("carlosBio"),
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Gestão de Turismo", "Desenvolvimento de Negócios", "Relações Corporativas"],
      languages: ["Português", "Inglês", "Francês"],
      experience: "15+ anos",
    },
    {
      id: 2,
      name: "Ana Silva",
      role: t("anaRole"),
      bio: t("anaBio"),
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Viagens Personalizadas", "Destinos de Praia", "Experiências Culturais"],
      languages: ["Português", "Inglês", "Espanhol"],
      experience: "8+ anos",
    },
    {
      id: 3,
      name: "João Fernandes",
      role: t("joaoRole"),
      bio: t("joaoBio"),
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Eventos Corporativos", "Casamentos", "Conferências"],
      languages: ["Português", "Inglês"],
      experience: "10+ anos",
    },
    {
      id: 4,
      name: "Maria Santos",
      role: t("mariaRole"),
      bio: t("mariaBio"),
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Team Building", "Retiros Corporativos", "Desenvolvimento de Equipes"],
      languages: ["Português", "Inglês"],
      experience: "6+ anos",
    },
    {
      id: 5,
      name: "Pedro Machado",
      role: t("pedroRole"),
      bio: t("pedroBio"),
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Tours Culturais", "Ecoturismo", "História Local"],
      languages: ["Português", "Inglês", "Changana"],
      experience: "12+ anos",
    },
    {
      id: 6,
      name: "Luísa Costa",
      role: t("luisaRole"),
      bio: t("luisaBio"),
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Atendimento ao Cliente", "Reservas", "Suporte 24/7"],
      languages: ["Português", "Inglês"],
      experience: "4+ anos",
    },
  ]

  const companyStats = [
    { icon: Users, value: "500+", label: t("satisfiedClients") },
    { icon: Globe, value: "25+", label: t("destinationsCovered") },
    { icon: Award, value: "15+", label: t("yearsExperience") },
    { icon: MapPin, value: "100%", label: t("mozambique") },
  ]

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
          <h1 className="text-5xl font-bold mb-6">{t("teamTitle")}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t("teamSubtitle")}</p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#01a090]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#01a090]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("ourTeam")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("ourTeamDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#01a090] font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-1">{t("specialties")}:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{t("languages")}:</h4>
                          <p className="text-gray-600">{member.languages.join(", ")}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{t("experience")}:</h4>
                          <p className="text-gray-600">{member.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("ourValues")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("ourValuesDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#01a090]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#01a090]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("excellence")}</h3>
                <p className="text-gray-600">{t("excellenceDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#01a090]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#01a090]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("relationships")}</h3>
                <p className="text-gray-600">{t("relationshipsDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#01a090]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#01a090]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("sustainability")}</h3>
                <p className="text-gray-600">{t("sustainabilityDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01a090] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("readyToKnowMozambique")}</h2>
          <p className="text-xl mb-8">{t("readyToKnowMozambiqueText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#01a090] hover:bg-gray-100">
              <a href="/contact">{t("contactUs")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#01a090] bg-transparent"
            >
              <a href="/reservations">{t("makeReservation")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
