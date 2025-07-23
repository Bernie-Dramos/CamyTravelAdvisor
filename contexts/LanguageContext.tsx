"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    home: "Página Inicial",
    services: "Serviços",
    reservations: "Reservas",
    destinations: "Destinos",
    memories: "Memórias",
    team: "Nossa Equipe",
    contact: "Contato",

    // Home page
    heroTitle: "Somos o parceiro ideal",
    heroMainText: "PARA A SUA VIAGEM DE",
    heroHighlight1: "NEGÓCIOS",
    heroOr: "OU",
    heroHighlight2: "LAZER",
    heroSubtitle: "Anytime, Anywhere",
    planTrip: "Planeje Sua Viagem",
    companyMotto: "A nossa maior satisfação é o cliente",
    aboutTitle: "Sobre a CAMY Travel Advisor",
    aboutText:
      "Especialistas em criar experiências de viagem excepcionais em Moçambique, oferecendo serviços personalizados para retiros corporativos, férias pessoais e organização de eventos.",
    featuredServices: "Serviços em Destaque",
    featuredDestinations: "Destinos em Destaque",
    contactUs: "Entre em Contato",
    testimonialsTitle: "O que nossos clientes dizem",
    ctaTitle: "Pronto para sua próxima aventura?",
    ctaText: "Entre em contato conosco e comece a planejar sua viagem dos sonhos em Moçambique.",
    testimonial1: "Experiência incrível! A CAMY organizou nosso retiro corporativo perfeitamente.",
    testimonial2: "Férias inesquecíveis em Inhambane. Serviço excepcional!",
    testimonial3: "Organização impecável do nosso casamento na praia. Recomendo!",

    // Services
    businessRetreats: "Retiros de Negócios",
    personalVacations: "Férias Pessoais",
    eventOrganization: "Organização de Eventos",
    businessRetreatDesc: "Experiências corporativas personalizadas e atividades de team-building em destinos únicos.",
    personalVacationDesc: "Pacotes de férias customizados para indivíduos e famílias explorarem Moçambique.",
    eventOrganizationDesc: "Planejamento completo para casamentos, conferências e eventos culturais.",
    learnMore: "Saiba Mais",
    servicesPageTitle: "Nossos Serviços",
    servicesPageSubtitle:
      "Descubra nossos serviços especializados para criar experiências de viagem inesquecíveis em Moçambique",
    faqTitle: "Perguntas Frequentes",
    faqSubtitle: "Respostas para as dúvidas mais comuns sobre nossos serviços",
    readyToStart: "Pronto para começar sua jornada?",
    readyToStartText: "Entre em contato conosco hoje e deixe-nos criar a experiência perfeita para você.",
    makeReservation: "Fazer Reserva",
    talkToUs: "Falar Conosco",

    // Services detailed content
    businessRetreatDetailed:
      "Nossos retiros corporativos são projetados para fortalecer equipes e inspirar inovação em ambientes únicos de Moçambique. Oferecemos pacotes completos que incluem acomodações de luxo, atividades de team building, espaços para reuniões e experiências culturais autênticas.",
    personalVacationDetailed:
      "Criamos experiências de férias personalizadas que capturam a essência de Moçambique. Desde escapadas românticas até aventuras familiares, cada viagem é cuidadosamente planejada para criar memórias inesquecíveis.",
    eventOrganizationDetailed:
      "Especializamo-nos na organização de eventos memoráveis em cenários deslumbrantes de Moçambique. Desde casamentos na praia até conferências corporativas, cuidamos de cada detalhe para garantir o sucesso do seu evento.",

    // Services features
    teamBuildingActivities: "Atividades de team building",
    professionalMeetingSpaces: "Espaços profissionais para reuniões",
    luxuryAccommodations: "Acomodações de luxo",
    cateringServices: "Serviços de catering",
    transportationIncluded: "Transporte incluído",
    customItineraries: "Itinerários personalizados",
    customizedItineraries: "Itinerários customizados",
    familyFriendlyActivities: "Atividades para toda a família",
    romanticGetaways: "Escapadas românticas",
    adventureTours: "Tours de aventura",
    culturalExperiences: "Experiências culturais",
    support247: "Suporte 24/7",
    weddingPlanning: "Planejamento de casamentos",
    corporateEvents: "Eventos corporativos",
    culturalCelebrations: "Celebrações culturais",
    venueSelection: "Seleção de locais",
    vendorCoordination: "Coordenação com fornecedores",
    fullEventManagement: "Gestão completa de eventos",

    // Services itineraries
    day1Arrival: "Dia 1: Chegada e welcome dinner na praia",
    day2TeamBuilding: "Dia 2: Atividades de team building e workshop",
    day3Cultural: "Dia 3: Excursão cultural e networking",
    day4Departure: "Dia 4: Reuniões estratégicas e departure",
    day12Maputo: "Dia 1-2: Maputo - Exploração da capital",
    day35Inhambane: "Dia 3-5: Inhambane - Praias e mergulho",
    day67Bazaruto: "Dia 6-7: Bazaruto - Ilhas paradisíacas",
    day8Return: "Dia 8: Retorno com memórias incríveis",
    initialPlanning: "Planejamento inicial e seleção de local",
    vendorCoordination2: "Coordenação com fornecedores locais",
    logisticsManagement: "Gestão de logística e cronograma",
    perfectExecution: "Execução perfeita do evento",
    featuresIncluded: "Características incluídas",
    sampleItinerary: "Itinerário de exemplo",

    // Services FAQ
    faqServiceQ1: "Como reservo uma viagem?",
    faqServiceA1:
      "Você pode fazer uma reserva através do nosso formulário online ou entrando em contato diretamente conosco. Nossa equipe irá ajudá-lo a personalizar sua experiência.",
    faqServiceQ2: "Quais destinos vocês cobrem?",
    faqServiceA2:
      "Cobrimos todo o território de Moçambique, desde Maputo até as ilhas do norte, incluindo destinos populares como Inhambane, Bazaruto, Pemba e muito mais.",
    faqServiceQ3: "Vocês oferecem seguro de viagem?",
    faqServiceA3:
      "Sim, podemos ajudar a organizar seguro de viagem abrangente para garantir sua tranquilidade durante a viagem.",
    faqServiceQ4: "Qual é a política de cancelamento?",
    faqServiceA4:
      "Nossa política de cancelamento varia dependendo do tipo de serviço e timing. Entre em contato conosco para detalhes específicos.",
    faqServiceQ5: "Vocês oferecem pacotes personalizados?",
    faqServiceA5:
      "Sim! Todos os nossos serviços são personalizáveis. Trabalhamos com você para criar a experiência perfeita baseada nas suas necessidades e orçamento.",
    faqServiceQ6: "Qual é o tamanho mínimo de grupo para retiros corporativos?",
    faqServiceA6:
      "Não há tamanho mínimo específico. Organizamos retiros para grupos pequenos de 5 pessoas até grandes corporações com centenas de participantes.",

    // Reservations
    reservationTitle: "Faça Sua Reserva",
    reservationSubtitle:
      "Preencha o formulário abaixo e nossa equipe entrará em contato para personalizar sua experiência de viagem",
    fullName: "Nome Completo",
    phone: "Telefone",
    email: "Email",
    departureDate: "Data de Partida",
    returnDate: "Data de Retorno",
    departurePlace: "Local de Partida",
    destination: "Destino",
    message: "Mensagem Adicional",
    submitReservation: "Enviar Reserva",
    reservationSent: "Reserva enviada! Entraremos em contato em breve.",
    secureReservation: "Reserva Segura",
    dataProtected: "Dados Protegidos",
    dataProtectedDesc: "Suas informações são mantidas seguras",
    quickResponse: "Resposta Rápida",
    quickResponseDesc: "Retornamos em até 24 horas",
    noCommitment: "Sem Compromisso",
    noCommitmentDesc: "Orçamento gratuito e sem obrigação",
    support247: "Suporte 24/7",
    support247Desc: "Assistência durante toda a viagem",
    reservationForm: "Formulário de Reserva",
    reservationSentTitle: "Reserva Enviada!",
    newReservation: "Nova Reserva",

    // Form placeholders
    fullNamePlaceholder: "Seu nome completo",
    phonePlaceholder: "+258 84 123 4567",
    emailPlaceholder: "seu@email.com",
    departurePlacePlaceholder: "Cidade de partida",
    destinationPlaceholder: "Selecione o destino",
    messagePlaceholder: "Conte-nos mais sobre sua viagem ideal, número de pessoas, preferências especiais, etc.",

    // Destinations
    destinationsTitle: "Destinos",
    destinationsSubtitle:
      "Descubra os destinos mais espetaculares de Moçambique, desde praias paradisíacas até cidades históricas",
    viewDetails: "Ver Detalhes",
    allDestinations: "Todos os Destinos",
    beach: "Praia",
    city: "Cidade",
    cultural: "Cultural",
    highlights: "Destaques",
    aboutDestination: "Sobre o destino",
    activities: "Atividades",
    bestTime: "Melhor época",
    accommodation: "Acomodação",
    bookNow: "Reservar Agora",
    moreInfo: "Mais Informações",
    destinationNotFound: "Não encontrou o destino ideal?",
    destinationNotFoundText: "Entre em contato conosco e criaremos um itinerário personalizado para você.",
    talkToSpecialist: "Falar com Especialista",

    // Destination details
    maputoDesc: "Capital vibrante com rica cultura e arquitetura colonial",
    maputoDetailed:
      "Maputo, a capital de Moçambique, é uma cidade vibrante que combina perfeitamente a herança colonial portuguesa com a cultura africana moderna. A cidade oferece uma rica experiência cultural com seus mercados coloridos, arquitetura histórica e uma cena gastronômica em crescimento.",
    inhambaneDesc: "Praias paradisíacas e mergulho com tubarões-baleia",
    inhambaneDetailed:
      "Inhambane é famosa por suas águas cristalinas e pela oportunidade única de nadar com tubarões-baleia. A região oferece algumas das melhores experiências de mergulho do mundo, combinadas com praias de areia branca e uma rica cultura local.",
    bazarutoDesc: "Ilhas tropicais com águas cristalinas e dunas de areia",
    bazarutoDetailed:
      "O Arquipélago do Bazaruto é considerado uma das joias de Moçambique. Composto por seis ilhas principais, oferece praias intocadas, dunas de areia espetaculares e uma vida marinha diversificada, incluindo dugongos e tartarugas marinhas.",

    // Memories
    memoriesTitle: "Nossas Memórias",
    memoriesSubtitle:
      "Reviva os momentos especiais que criamos juntos. Cada imagem conta uma história de experiências inesquecíveis em Moçambique.",
    allMemories: "Todas as Memórias",
    businessRetreat: "Retiro Corporativo",
    vacation: "Férias",
    event: "Evento",
    createMemories: "Crie suas próprias memórias",
    createMemoriesText:
      "Deixe-nos ajudar você a criar experiências inesquecíveis que se tornarão suas memórias mais preciosas.",
    startJourney: "Comece Sua Jornada",

    // Team
    teamTitle: "Nossa Equipe",
    teamSubtitle:
      "Conheça os especialistas apaixonados que tornam suas viagens dos sonhos uma realidade. Nossa equipe combina experiência local com excelência no atendimento.",
    satisfiedClients: "Clientes Satisfeitos",
    destinationsCovered: "Destinos Cobertos",
    yearsExperience: "Anos de Experiência",
    mozambique: "Moçambique",
    ourTeam: "Nossa Equipe",
    ourTeamDesc:
      "Profissionais dedicados com paixão genuína por Moçambique e compromisso com a excelência no atendimento.",
    specialties: "Especialidades",
    languages: "Idiomas",
    experience: "Experiência",
    ourValues: "Nossos Valores",
    ourValuesDesc: "Os princípios que guiam nosso trabalho e definem nossa cultura empresarial.",
    excellence: "Excelência",
    excellenceDesc: "Comprometemo-nos com os mais altos padrões de qualidade em todos os aspectos dos nossos serviços.",
    relationships: "Relacionamentos",
    relationshipsDesc: "Construímos relacionamentos duradouros baseados na confiança, transparência e respeito mútuo.",
    sustainability: "Sustentabilidade",
    sustainabilityDesc:
      "Promovemos o turismo responsável que beneficia as comunidades locais e preserva nosso ambiente.",
    readyToKnowMozambique: "Pronto para conhecer Moçambique?",
    readyToKnowMozambiqueText:
      "Nossa equipe está pronta para criar a experiência de viagem perfeita para você. Entre em contato conosco hoje!",

    // Team members
    carlosRole: "Diretor Geral",
    carlosBio:
      "Com mais de 15 anos de experiência no turismo moçambicano, Carlos lidera nossa equipe com paixão pela excelência e conhecimento profundo dos destinos únicos de Moçambique.",
    anaRole: "Especialista em Viagens",
    anaBio:
      "Apaixonada por criar experiências inesquecíveis, Ana especializa-se em viagens personalizadas e tem conhecimento íntimo de todos os destinos moçambicanos.",
    joaoRole: "Coordenador de Eventos",
    joaoBio:
      "Especialista em organização de eventos corporativos e sociais, João garante que cada detalhe seja perfeito para criar momentos memoráveis.",
    mariaRole: "Consultora de Retiros Corporativos",
    mariaBio:
      "Com formação em recursos humanos e turismo, Maria desenvolve programas de retiros corporativos que fortalecem equipes e inspiram inovação.",
    pedroRole: "Guia Especializado",
    pedroBio:
      "Nascido e criado em Moçambique, Pedro conhece cada canto do país e compartilha sua paixão pela cultura e natureza locais com nossos clientes.",
    luisaRole: "Atendimento ao Cliente",
    luisaBio:
      "Responsável por garantir que cada cliente receba o melhor atendimento, Luísa é o primeiro ponto de contato e cuida de todos os detalhes da jornada.",

    // Contact
    contactTitle: "Entre em Contato",
    contactSubtitle:
      "Estamos aqui para ajudar você a planejar a viagem perfeita. Entre em contato conosco e comece sua jornada dos sonhos em Moçambique.",
    contactInfo: "Informações de Contato",
    quickActions: "Ações Rápidas",
    sendMessage: "Enviar Mensagem",
    name: "Nome",
    subject: "Assunto",
    messageSent: "Mensagem enviada! Responderemos em breve.",
    callNow: "Ligar Agora",
    address: "Endereço",
    workingHours: "Horário de Funcionamento",
    mondayFriday: "Segunda - Sexta: 8:00 - 18:00",
    saturday: "Sábado: 9:00 - 13:00",
    sendUsMessage: "Envie-nos uma Mensagem",
    faqContactTitle: "Perguntas Frequentes",
    faqContactSubtitle: "Respostas rápidas para as dúvidas mais comuns",
    messageSentTitle: "Mensagem Enviada!",
    newMessage: "Nova Mensagem",

    // Contact form placeholders
    nameCompletePlaceholder: "Seu nome completo",
    subjectPlaceholder: "Assunto da sua mensagem",
    contactMessagePlaceholder: "Como podemos ajudá-lo? Conte-nos sobre seus planos de viagem, dúvidas ou sugestões.",

    // Contact FAQ
    responseTimeQ: "Qual é o tempo de resposta para consultas?",
    responseTimeA:
      "Respondemos a todas as consultas dentro de 24 horas durante dias úteis. Para urgências, recomendamos entrar em contato por telefone.",
    inPersonConsultationQ: "Vocês oferecem consultas presenciais?",
    inPersonConsultationA:
      "Sim! Oferecemos consultas presenciais em nosso escritório em Maputo. Agende uma reunião para discutir seus planos de viagem em detalhes.",
    consultationCostsQ: "Há custos para consultas iniciais?",
    consultationCostsA:
      "Não! Todas as consultas iniciais e orçamentos são completamente gratuitos. Só cobramos quando você decide prosseguir com nossos serviços.",
    paymentMethodsQ: "Quais métodos de pagamento vocês aceitam?",
    paymentMethodsA:
      "Aceitamos transferências bancárias, cartões de crédito/débito, e pagamentos móveis (M-Pesa, e-Mola). Oferecemos também planos de pagamento flexíveis.",
    groupDiscountsQ: "Vocês oferecem descontos para grupos?",
    groupDiscountsA:
      "Sim! Oferecemos descontos especiais para grupos de 10 ou mais pessoas. Entre em contato para conhecer nossas tarifas especiais.",
    travelInsuranceQ: "O seguro de viagem está incluído?",
    travelInsuranceA:
      "O seguro de viagem não está incluído automaticamente, mas podemos ajudar a organizar cobertura abrangente através dos nossos parceiros seguradoras.",

    // Footer
    followUs: "Siga-nos",
    allRightsReserved: "Todos os direitos reservados",
    quickLinks: "Links Rápidos",

    // Common
    phone: "Telefone",
    email: "Email",
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    close: "Fechar",
    next: "Próximo",
    previous: "Anterior",
    save: "Salvar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    yes: "Sim",
    no: "Não",
    required: "Obrigatório",
    optional: "Opcional",
  },
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    reservations: "Reservations",
    destinations: "Destinations",
    memories: "Memories",
    team: "Our Team",
    contact: "Contact",

    // Home page
    heroTitle: "We are the ideal partner",
    heroMainText: "FOR YOUR",
    heroHighlight1: "BUSINESS",
    heroOr: "OR",
    heroHighlight2: "LEISURE",
    heroSubtitle: "Anytime, Anywhere",
    planTrip: "Plan Your Trip",
    companyMotto: "Our greatest satisfaction is the customer",
    aboutTitle: "About CAMY Travel Advisor",
    aboutText:
      "Specialists in creating exceptional travel experiences in Mozambique, offering personalized services for corporate retreats, personal vacations, and event organization.",
    featuredServices: "Featured Services",
    featuredDestinations: "Featured Destinations",
    contactUs: "Contact Us",
    testimonialsTitle: "What our clients say",
    ctaTitle: "Ready for your next adventure?",
    ctaText: "Contact us and start planning your dream trip to Mozambique.",
    testimonial1: "Amazing experience! CAMY organized our corporate retreat perfectly.",
    testimonial2: "Unforgettable vacation in Inhambane. Exceptional service!",
    testimonial3: "Impeccable organization of our beach wedding. Highly recommend!",

    // Services
    businessRetreats: "Business Retreats",
    personalVacations: "Personal Vacations",
    eventOrganization: "Event Organization",
    businessRetreatDesc: "Tailored corporate travel and team-building experiences in unique destinations.",
    personalVacationDesc: "Customized vacation packages for individuals and families to explore Mozambique.",
    eventOrganizationDesc: "Complete planning for weddings, conferences, and cultural events.",
    learnMore: "Learn More",
    servicesPageTitle: "Our Services",
    servicesPageSubtitle: "Discover our specialized services to create unforgettable travel experiences in Mozambique",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to the most common questions about our services",
    readyToStart: "Ready to start your journey?",
    readyToStartText: "Contact us today and let us create the perfect experience for you.",
    makeReservation: "Make Reservation",
    talkToUs: "Talk to Us",

    // Services detailed content
    businessRetreatDetailed:
      "Our corporate retreats are designed to strengthen teams and inspire innovation in Mozambique's unique environments. We offer complete packages including luxury accommodations, team building activities, meeting spaces, and authentic cultural experiences.",
    personalVacationDetailed:
      "We create personalized vacation experiences that capture the essence of Mozambique. From romantic getaways to family adventures, each trip is carefully planned to create unforgettable memories.",
    eventOrganizationDetailed:
      "We specialize in organizing memorable events in Mozambique's stunning settings. From beach weddings to corporate conferences, we take care of every detail to ensure your event's success.",

    // Services features
    teamBuildingActivities: "Team building activities",
    professionalMeetingSpaces: "Professional meeting spaces",
    luxuryAccommodations: "Luxury accommodations",
    cateringServices: "Catering services",
    transportationIncluded: "Transportation included",
    customItineraries: "Custom itineraries",
    customizedItineraries: "Customized itineraries",
    familyFriendlyActivities: "Family-friendly activities",
    romanticGetaways: "Romantic getaways",
    adventureTours: "Adventure tours",
    culturalExperiences: "Cultural experiences",
    support247: "24/7 support",
    weddingPlanning: "Wedding planning",
    corporateEvents: "Corporate events",
    culturalCelebrations: "Cultural celebrations",
    venueSelection: "Venue selection",
    vendorCoordination: "Vendor coordination",
    fullEventManagement: "Full event management",

    // Services itineraries
    day1Arrival: "Day 1: Arrival and welcome dinner on the beach",
    day2TeamBuilding: "Day 2: Team building activities and workshop",
    day3Cultural: "Day 3: Cultural excursion and networking",
    day4Departure: "Day 4: Strategic meetings and departure",
    day12Maputo: "Day 1-2: Maputo - Capital exploration",
    day35Inhambane: "Day 3-5: Inhambane - Beaches and diving",
    day67Bazaruto: "Day 6-7: Bazaruto - Paradise islands",
    day8Return: "Day 8: Return with incredible memories",
    initialPlanning: "Initial planning and venue selection",
    vendorCoordination2: "Coordination with local vendors",
    logisticsManagement: "Logistics and schedule management",
    perfectExecution: "Perfect event execution",
    featuresIncluded: "Features included",
    sampleItinerary: "Sample itinerary",

    // Services FAQ
    faqServiceQ1: "How do I book a trip?",
    faqServiceA1:
      "You can make a reservation through our online form or by contacting us directly. Our team will help you customize your experience.",
    faqServiceQ2: "Which destinations do you cover?",
    faqServiceA2:
      "We cover all of Mozambique's territory, from Maputo to the northern islands, including popular destinations like Inhambane, Bazaruto, Pemba, and much more.",
    faqServiceQ3: "Do you offer travel insurance?",
    faqServiceA3:
      "Yes, we can help arrange comprehensive travel insurance to ensure your peace of mind during the trip.",
    faqServiceQ4: "What is your cancellation policy?",
    faqServiceA4:
      "Our cancellation policy varies depending on the type of service and timing. Contact us for specific details.",
    faqServiceQ5: "Do you offer customized packages?",
    faqServiceA5:
      "Yes! All our services are customizable. We work with you to create the perfect experience based on your needs and budget.",
    faqServiceQ6: "What is the minimum group size for corporate retreats?",
    faqServiceA6:
      "There is no specific minimum size. We organize retreats for small groups of 5 people to large corporations with hundreds of participants.",

    // Reservations
    reservationTitle: "Make Your Reservation",
    reservationSubtitle: "Fill out the form below and our team will contact you to customize your travel experience",
    fullName: "Full Name",
    phone: "Phone",
    email: "Email",
    departureDate: "Departure Date",
    returnDate: "Return Date",
    departurePlace: "Departure Place",
    destination: "Destination",
    message: "Additional Message",
    submitReservation: "Submit Reservation",
    reservationSent: "Reservation sent! We'll contact you soon.",
    secureReservation: "Secure Reservation",
    dataProtected: "Data Protected",
    dataProtectedDesc: "Your information is kept secure",
    quickResponse: "Quick Response",
    quickResponseDesc: "We respond within 24 hours",
    noCommitment: "No Commitment",
    noCommitmentDesc: "Free quote with no obligation",
    support247: "24/7 Support",
    support247Desc: "Assistance throughout your trip",
    reservationForm: "Reservation Form",
    reservationSentTitle: "Reservation Sent!",
    newReservation: "New Reservation",

    // Form placeholders
    fullNamePlaceholder: "Your full name",
    phonePlaceholder: "+258 84 123 4567",
    emailPlaceholder: "your@email.com",
    departurePlacePlaceholder: "Departure city",
    destinationPlaceholder: "Select destination",
    messagePlaceholder: "Tell us more about your ideal trip, number of people, special preferences, etc.",

    // Destinations
    destinationsTitle: "Destinations",
    destinationsSubtitle:
      "Discover Mozambique's most spectacular destinations, from paradisiacal beaches to historic cities",
    viewDetails: "View Details",
    allDestinations: "All Destinations",
    beach: "Beach",
    city: "City",
    cultural: "Cultural",
    highlights: "Highlights",
    aboutDestination: "About the destination",
    activities: "Activities",
    bestTime: "Best time",
    accommodation: "Accommodation",
    bookNow: "Book Now",
    moreInfo: "More Information",
    destinationNotFound: "Didn't find the ideal destination?",
    destinationNotFoundText: "Contact us and we'll create a personalized itinerary for you.",
    talkToSpecialist: "Talk to Specialist",

    // Destination details
    maputoDesc: "Vibrant capital with rich culture and colonial architecture",
    maputoDetailed:
      "Maputo, Mozambique's capital, is a vibrant city that perfectly combines Portuguese colonial heritage with modern African culture. The city offers a rich cultural experience with its colorful markets, historic architecture, and growing gastronomic scene.",
    inhambaneDesc: "Paradisiacal beaches and whale shark diving",
    inhambaneDetailed:
      "Inhambane is famous for its crystal-clear waters and the unique opportunity to swim with whale sharks. The region offers some of the world's best diving experiences, combined with white sand beaches and rich local culture.",
    bazarutoDesc: "Tropical islands with crystal waters and sand dunes",
    bazarutoDetailed:
      "The Bazaruto Archipelago is considered one of Mozambique's jewels. Composed of six main islands, it offers pristine beaches, spectacular sand dunes, and diverse marine life, including dugongs and sea turtles.",

    // Memories
    memoriesTitle: "Our Memories",
    memoriesSubtitle:
      "Relive the special moments we created together. Each image tells a story of unforgettable experiences in Mozambique.",
    allMemories: "All Memories",
    businessRetreat: "Corporate Retreat",
    vacation: "Vacation",
    event: "Event",
    createMemories: "Create your own memories",
    createMemoriesText:
      "Let us help you create unforgettable experiences that will become your most precious memories.",
    startJourney: "Start Your Journey",

    // Team
    teamTitle: "Our Team",
    teamSubtitle:
      "Meet the passionate specialists who make your dream trips a reality. Our team combines local experience with excellence in service.",
    satisfiedClients: "Satisfied Clients",
    destinationsCovered: "Destinations Covered",
    yearsExperience: "Years of Experience",
    mozambique: "Mozambique",
    ourTeam: "Our Team",
    ourTeamDesc: "Dedicated professionals with genuine passion for Mozambique and commitment to service excellence.",
    specialties: "Specialties",
    languages: "Languages",
    experience: "Experience",
    ourValues: "Our Values",
    ourValuesDesc: "The principles that guide our work and define our corporate culture.",
    excellence: "Excellence",
    excellenceDesc: "We are committed to the highest quality standards in all aspects of our services.",
    relationships: "Relationships",
    relationshipsDesc: "We build lasting relationships based on trust, transparency, and mutual respect.",
    sustainability: "Sustainability",
    sustainabilityDesc: "We promote responsible tourism that benefits local communities and preserves our environment.",
    readyToKnowMozambique: "Ready to discover Mozambique?",
    readyToKnowMozambiqueText: "Our team is ready to create the perfect travel experience for you. Contact us today!",

    // Team members
    carlosRole: "General Director",
    carlosBio:
      "With over 15 years of experience in Mozambican tourism, Carlos leads our team with passion for excellence and deep knowledge of Mozambique's unique destinations.",
    anaRole: "Travel Specialist",
    anaBio:
      "Passionate about creating unforgettable experiences, Ana specializes in personalized travel and has intimate knowledge of all Mozambican destinations.",
    joaoRole: "Events Coordinator",
    joaoBio:
      "Specialist in organizing corporate and social events, João ensures every detail is perfect to create memorable moments.",
    mariaRole: "Corporate Retreats Consultant",
    mariaBio:
      "With background in human resources and tourism, Maria develops corporate retreat programs that strengthen teams and inspire innovation.",
    pedroRole: "Specialized Guide",
    pedroBio:
      "Born and raised in Mozambique, Pedro knows every corner of the country and shares his passion for local culture and nature with our clients.",
    luisaRole: "Customer Service",
    luisaBio:
      "Responsible for ensuring every client receives the best service, Luísa is the first point of contact and takes care of all journey details.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle:
      "We're here to help you plan the perfect trip. Contact us and start your dream journey to Mozambique.",
    contactInfo: "Contact Information",
    quickActions: "Quick Actions",
    sendMessage: "Send Message",
    name: "Name",
    subject: "Subject",
    messageSent: "Message sent! We'll respond soon.",
    callNow: "Call Now",
    address: "Address",
    workingHours: "Working Hours",
    mondayFriday: "Monday - Friday: 8:00 - 18:00",
    saturday: "Saturday: 9:00 - 13:00",
    sendUsMessage: "Send Us a Message",
    faqContactTitle: "Frequently Asked Questions",
    faqContactSubtitle: "Quick answers to the most common questions",
    messageSentTitle: "Message Sent!",
    newMessage: "New Message",

    // Contact form placeholders
    nameCompletePlaceholder: "Your full name",
    subjectPlaceholder: "Subject of your message",
    contactMessagePlaceholder: "How can we help you? Tell us about your travel plans, questions, or suggestions.",

    // Contact FAQ
    responseTimeQ: "What is the response time for inquiries?",
    responseTimeA:
      "We respond to all inquiries within 24 hours during business days. For urgent matters, we recommend contacting us by phone.",
    inPersonConsultationQ: "Do you offer in-person consultations?",
    inPersonConsultationA:
      "Yes! We offer in-person consultations at our office in Maputo. Schedule a meeting to discuss your travel plans in detail.",
    consultationCostsQ: "Are there costs for initial consultations?",
    consultationCostsA:
      "No! All initial consultations and quotes are completely free. We only charge when you decide to proceed with our services.",
    paymentMethodsQ: "What payment methods do you accept?",
    paymentMethodsA:
      "We accept bank transfers, credit/debit cards, and mobile payments (M-Pesa, e-Mola). We also offer flexible payment plans.",
    groupDiscountsQ: "Do you offer group discounts?",
    groupDiscountsA:
      "Yes! We offer special discounts for groups of 10 or more people. Contact us to learn about our special rates.",
    travelInsuranceQ: "Is travel insurance included?",
    travelInsuranceA:
      "Travel insurance is not automatically included, but we can help arrange comprehensive coverage through our insurance partners.",

    // Footer
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    quickLinks: "Quick Links",

    // Common
    phone: "Phone",
    email: "Email",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    close: "Close",
    next: "Next",
    previous: "Previous",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    required: "Required",
    optional: "Optional",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["pt"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
