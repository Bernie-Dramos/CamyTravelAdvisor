"use client"

import { useState } from "react"
import Image from "next/image"
import { Filter, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"

export default function MemoriesPage() {
  const { t } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const memories = [
    {
      id: 1,
      title: "Retiro Corporativo em Inhambane, 2024",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      description: "Equipe da TechMoz durante atividades de team building nas praias de Inhambane",
    },
    {
      id: 2,
      title: "Lua de Mel no Bazaruto, 2024",
      category: "vacation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Casal celebrando lua de mel nas ilhas paradisíacas do Bazaruto",
    },
    {
      id: 3,
      title: "Casamento na Praia de Tofo, 2024",
      category: "event",
      image: "/placeholder.svg?height=400&width=600",
      description: "Cerimônia de casamento ao pôr do sol na praia de Tofo",
    },
    {
      id: 4,
      title: "Conferência Empresarial em Maputo, 2024",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      description: "Conferência anual da empresa realizada em hotel de luxo em Maputo",
    },
    {
      id: 5,
      title: "Férias Familiares em Vilanculos, 2024",
      category: "vacation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Família aproveitando as águas cristalinas de Vilanculos",
    },
    {
      id: 6,
      title: "Mergulho com Tubarões-Baleia, 2024",
      category: "vacation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Experiência única de mergulho com tubarões-baleia em Inhambane",
    },
    {
      id: 7,
      title: "Evento Cultural na Ilha de Moçambique, 2024",
      category: "event",
      image: "/placeholder.svg?height=400&width=600",
      description: "Celebração cultural na histórica Ilha de Moçambique",
    },
    {
      id: 8,
      title: "Retiro de Yoga em Pemba, 2024",
      category: "vacation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Retiro de yoga e wellness nas praias tranquilas de Pemba",
    },
    {
      id: 9,
      title: "Lançamento de Produto em Nacala, 2024",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      description: "Evento de lançamento de produto com vista para a baía de Nacala",
    },
    {
      id: 10,
      title: "Aniversário de Casamento no Bazaruto, 2024",
      category: "event",
      image: "/placeholder.svg?height=400&width=600",
      description: "Celebração de bodas de prata nas ilhas do Bazaruto",
    },
    {
      id: 11,
      title: "Safari Marinho em Tofo, 2024",
      category: "vacation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Aventura de safari marinho observando manta rays em Tofo",
    },
    {
      id: 12,
      title: "Workshop Corporativo em Inhambane, 2024",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      description: "Workshop de liderança para executivos em resort de Inhambane",
    },
    {
      id: 13,
      title: "Festa de Formatura na Praia, 2024",
      category: "event",
      image: "/placeholder.svg?height=400&width=600",
      description: "Celebração de formatura universitária na praia",
    },
    {
      id: 14,
      title: "Expedição Fotográfica, 2024",
      category: "vacation",
      image: "/placeholder.svg?height=400&width=600",
      description: "Expedição fotográfica capturando a beleza natural de Moçambique",
    },
    {
      id: 15,
      title: "Convenção de Vendas em Maputo, 2024",
      category: "business",
      image: "/placeholder.svg?height=400&width=600",
      description: "Convenção anual de vendas com equipes de todo o país",
    },
  ]

  const filters = [
    { id: "all", label: t("allMemories") },
    { id: "business", label: t("businessRetreat") },
    { id: "vacation", label: t("vacation") },
    { id: "event", label: t("event") },
  ]

  const filteredMemories =
    selectedFilter === "all" ? memories : memories.filter((memory) => memory.category === selectedFilter)

  const openLightbox = (memory: any, index: number) => {
    setSelectedImage(memory)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredMemories.length
    setSelectedImage(filteredMemories[nextIndex])
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredMemories.length - 1 : currentImageIndex - 1
    setSelectedImage(filteredMemories[prevIndex])
    setCurrentImageIndex(prevIndex)
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
          <h1 className="text-5xl font-bold mb-6">{t("memoriesTitle")}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t("memoriesSubtitle")}</p>
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
                <Filter className="w-4 h-4" />
                <span>{filter.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMemories.map((memory, index) => (
              <div
                key={memory.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => openLightbox(memory, index)}
              >
                <Image
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2">
                    <Badge
                      className={`text-xs ${
                        memory.category === "business"
                          ? "bg-blue-600"
                          : memory.category === "vacation"
                            ? "bg-green-600"
                            : "bg-purple-600"
                      }`}
                    >
                      {memory.category === "business"
                        ? t("businessRetreat")
                        : memory.category === "vacation"
                          ? t("vacation")
                          : t("event")}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{memory.title}</h3>
                  <p className="text-xs text-gray-200 line-clamp-2">{memory.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-black/95">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>

            {selectedImage && (
              <>
                <Button
                  onClick={prevImage}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <div className="relative w-full h-[70vh] mx-16">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <Button
                  onClick={nextImage}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-2">
                      <Badge
                        className={`${
                          selectedImage.category === "business"
                            ? "bg-blue-600"
                            : selectedImage.category === "vacation"
                              ? "bg-green-600"
                              : "bg-purple-600"
                        }`}
                      >
                        {selectedImage.category === "business"
                          ? t("businessRetreat")
                          : selectedImage.category === "vacation"
                            ? t("vacation")
                            : t("event")}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                    <p className="text-gray-200">{selectedImage.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#01a090] to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("createMemories")}</h2>
          <p className="text-xl mb-8">{t("createMemoriesText")}</p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-[#01a090] hover:bg-gray-100">
            <a href="/reservations">{t("startJourney")}</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
