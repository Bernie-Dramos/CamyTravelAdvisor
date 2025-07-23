"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Star, Camera, Waves, Mountain, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"

export default function DestinationsPage() {
  const { t } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedDestination, setSelectedDestination] = useState<any>(null)

  const destinations = [
    {
      id: 1,
      name: "Maputo",
      description: "Capital vibrante com rica cultura e arquitetura colonial",
      type: "city",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      highlights: ["Arquitetura colonial", "Vida noturna", "Mercados locais", "Museus"],
      detailedDescription:
        "Maputo, a capital de Moçambique, é uma cidade vibrante que combina perfeitamente a herança colonial portuguesa com a cultura africana moderna. A cidade oferece uma rica experiência cultural com seus mercados coloridos, arquitetura histórica e uma cena gastronômica em crescimento.",
      activities: ["City tours", "Visitas a museus", "Compras no mercado", "Vida noturna"],
      bestTime: "Abril a Setembro",
      accommodation: "Hotéis de luxo e pousadas boutique",
    },
    {
      id: 2,
      name: "Inhambane",
      description: "Praias paradisíacas e mergulho com tubarões-baleia",
      type: "beach",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      highlights: ["Tubarões-baleia", "Praias pristinas", "Mergulho", "Cultura local"],
      detailedDescription:
        "Inhambane é famosa por suas águas cristalinas e pela oportunidade única de nadar com tubarões-baleia. A região oferece algumas das melhores experiências de mergulho do mundo, combinadas com praias de areia branca e uma rica cultura local.",
      activities: ["Mergulho com tubarões-baleia", "Snorkeling", "Pesca desportiva", "Passeios culturais"],
      bestTime: "Maio a Novembro",
      accommodation: "Resorts de praia e lodges eco-friendly",
    },
    {
      id: 3,
      name: "Arquipélago do Bazaruto",
      description: "Ilhas tropicais com águas cristalinas e dunas de areia",
      type: "beach",
      image: "/placeholder.svg?height=400&width=600",
      rating: 5.0,
      highlights: ["Ilhas paradisíacas", "Dunas de areia", "Vida marinha", "Exclusividade"],
      detailedDescription:
        "O Arquipélago do Bazaruto é considerado uma das joias de Moçambique. Composto por seis ilhas principais, oferece praias intocadas, dunas de areia espetaculares e uma vida marinha diversificada, incluindo dugongos e tartarugas marinhas.",
      activities: ["Island hopping", "Mergulho", "Pesca", "Observação de vida selvagem"],
      bestTime: "Abril a Outubro",
      accommodation: "Resorts de luxo exclusivos",
    },
    {
      id: 4,
      name: "Pemba",
      description: "Portal para as ilhas Quirimbas e mergulho espetacular",
      type: "beach",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      highlights: ["Ilhas Quirimbas", "Mergulho", "Praias isoladas", "Cultura Swahili"],
      detailedDescription:
        "Pemba serve como porta de entrada para as deslumbrantes Ilhas Quirimbas. A região é conhecida por seus recifes de coral pristinos, praias isoladas e rica herança cultural Swahili.",
      activities: ["Mergulho em recifes", "Visitas às Quirimbas", "Pesca", "Tours culturais"],
      bestTime: "Maio a Novembro",
      accommodation: "Lodges de praia e resorts boutique",
    },
    {
      id: 5,
      name: "Ilha de Moçambique",
      description: "Património Mundial da UNESCO com história fascinante",
      type: "cultural",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.6,
      highlights: ["UNESCO", "História", "Arquitetura", "Cultura"],
      detailedDescription:
        "A Ilha de Moçambique é um Patrimônio Mundial da UNESCO que preserva séculos de história. A ilha oferece uma janela única para o passado colonial e árabe da região, com sua arquitetura de pedra e coral bem preservada.",
      activities: ["Tours históricos", "Museus", "Arquitetura colonial", "Artesanato local"],
      bestTime: "Abril a Outubro",
      accommodation: "Pousadas históricas e guesthouses",
    },
    {
      id: 6,
      name: "Tofo",
      description: "Paraíso dos surfistas com vida marinha incrível",
      type: "beach",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      highlights: ["Surf", "Manta rays", "Vida noturna", "Backpacker friendly"],
      detailedDescription:
        "Tofo é o destino perfeito para surfistas e amantes da vida marinha. Conhecida por suas ondas consistentes e pela presença de manta rays e tubarões-baleia, oferece uma atmosfera descontraída e vibrante.",
      activities: ["Surf", "Mergulho com manta rays", "Vida noturna", "Yoga na praia"],
      bestTime: "Março a Novembro",
      accommodation: "Hostels, pousadas e resorts de surf",
    },
    {
      id: 7,
      name: "Vilanculos",
      description: "Gateway para Bazaruto com praias deslumbrantes",
      type: "beach",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      highlights: ["Praias", "Dhow trips", "Pesca", "Relaxamento"],
      detailedDescription:
        "Vilanculos é a porta de entrada para o Arquipélago do Bazaruto e oferece suas próprias atrações. Com praias de areia branca e águas turquesa, é perfeita para relaxar e desfrutar de atividades aquáticas.",
      activities: ["Dhow sailing", "Pesca desportiva", "Mergulho", "Passeios de barco"],
      bestTime: "Abril a Outubro",
      accommodation: "Resorts de praia e lodges",
    },
    {
      id: 8,
      name: "Nacala",
      description: "Uma das baías mais bonitas do mundo",
      type: "city",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.5,
      highlights: ["Baía natural", "Porto histórico", "Praias urbanas", "Cultura local"],
      detailedDescription:
        "Nacala possui uma das baías naturais mais bonitas do mundo. Esta cidade portuária combina beleza natural com importância histórica, oferecendo praias urbanas e uma rica cultura local.",
      activities: ["Tours pela baía", "Visitas ao porto", "Praias urbanas", "Mercados locais"],
      bestTime: "Maio a Setembro",
      accommodation: "Hotéis urbanos e pousadas",
    },
  ]

  const filters = [
    { id: "all", label: t("allDestinations"), icon: MapPin },
    { id: "beach", label: t("beach"), icon: Waves },
    { id: "city", label: t("city"), icon: Building },
    { id: "cultural", label: t("cultural"), icon: Mountain },
  ]

  const filteredDestinations =
    selectedFilter === "all" ? destinations : destinations.filter((dest) => dest.type === selectedFilter)

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
          <h1 className="text-5xl font-bold mb-6">{t("destinationsTitle")}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t("destinationsSubtitle")}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  selectedFilter === filter.id
                    ? "bg-[#01a090] hover:bg-[#01a090]/90 text-white"
                    : "border-[#01a090] text-[#01a090] hover:bg-[#01a090] hover:text-white"
                }`}
              >
                <filter.icon className="w-4 h-4" />
                <span>{filter.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-900">
                        <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                        {destination.rating}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm text-gray-200">{destination.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-[#01a090] hover:bg-[#01a090]/90 text-white"
                          onClick={() => setSelectedDestination(destination)}
                        >
                          {t("viewDetails")}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#01a090] flex items-center space-x-2">
                            <MapPin className="w-6 h-6" />
                            <span>{destination.name}</span>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Image
                              src={destination.image || "/placeholder.svg"}
                              alt={destination.name}
                              width={400}
                              height={300}
                              className="rounded-lg object-cover w-full"
                            />
                            <div className="mt-4">
                              <h4 className="font-semibold text-lg mb-2">{t("highlights")}:</h4>
                              <div className="flex flex-wrap gap-2">
                                {destination.highlights.map((highlight, idx) => (
                                  <Badge key={idx} variant="outline" className="border-[#01a090] text-[#01a090]">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-lg mb-2">{t("aboutDestination")}:</h4>
                              <p className="text-gray-600">{destination.detailedDescription}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg mb-2">{t("activities")}:</h4>
                              <ul className="space-y-1">
                                {destination.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-center space-x-2">
                                    <Camera className="w-4 h-4 text-[#01a090]" />
                                    <span className="text-sm text-gray-600">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-1">{t("bestTime")}:</h4>
                                <p className="text-sm text-gray-600">{destination.bestTime}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">{t("accommodation")}:</h4>
                                <p className="text-sm text-gray-600">{destination.accommodation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                          <Button asChild className="flex-1 bg-[#01a090] hover:bg-[#01a090]/90">
                            <a href="/reservations">{t("bookNow")}</a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-[#01a090] text-[#01a090] hover:bg-[#01a090] hover:text-white bg-transparent"
                          >
                            <a href="/contact">{t("moreInfo")}</a>
                          </Button>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01a090] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("destinationNotFound")}</h2>
          <p className="text-xl mb-8">{t("destinationNotFoundText")}</p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#01a090] hover:bg-gray-100">
            <a href="/contact">{t("talkToSpecialist")}</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
