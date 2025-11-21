export interface SolutionSectorDefinition {
  slug: string
  titleKey: string
  taglineKey: string
  summaryKey: string
  highlightKeys: string[]
  businessKeys: string[]
  useCaseKeys: string[]
  image?: string
  preziEnvKey?: string
  specLink?: string
}

export const SOLUTION_SECTORS: SolutionSectorDefinition[] = [
  {
    slug: "cultivation",
    titleKey: "solutions.sectors.cultivation.title",
    taglineKey: "solutions.sectors.cultivation.tagline",
    summaryKey: "solutions.sectors.cultivation.summary",
    image: "/seeds-cover.jpg",
    highlightKeys: [
      "solutions.sectors.cultivation.highlights.0",
      "solutions.sectors.cultivation.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.cultivation.business.0",
      "solutions.sectors.cultivation.business.1",
      "solutions.sectors.cultivation.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.cultivation.useCases.0",
      "solutions.sectors.cultivation.useCases.1",
      "solutions.sectors.cultivation.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_CULTIVATION",
  },
  {
    slug: "construction",
    titleKey: "solutions.sectors.construction.title",
    taglineKey: "solutions.sectors.construction.tagline",
    summaryKey: "solutions.sectors.construction.summary",
    image: "/hemp-blocks-01-443x300.jpg",
    highlightKeys: [
      "solutions.sectors.construction.highlights.0",
      "solutions.sectors.construction.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.construction.business.0",
      "solutions.sectors.construction.business.1",
      "solutions.sectors.construction.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.construction.useCases.0",
      "solutions.sectors.construction.useCases.1",
      "solutions.sectors.construction.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_CONSTRUCTION",
  },
  {
    slug: "textiles",
    titleKey: "solutions.sectors.textiles.title",
    taglineKey: "solutions.sectors.textiles.tagline",
    summaryKey: "solutions.sectors.textiles.summary",
    image: "/fiber-cover.jpg",
    highlightKeys: [
      "solutions.sectors.textiles.highlights.0",
      "solutions.sectors.textiles.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.textiles.business.0",
      "solutions.sectors.textiles.business.1",
      "solutions.sectors.textiles.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.textiles.useCases.0",
      "solutions.sectors.textiles.useCases.1",
      "solutions.sectors.textiles.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_TEXTILES",
  },
  {
    slug: "energy",
    titleKey: "solutions.sectors.energy.title",
    taglineKey: "solutions.sectors.energy.tagline",
    summaryKey: "solutions.sectors.energy.summary",
    image: "/hurd-cover.jpg",
    highlightKeys: [
      "solutions.sectors.energy.highlights.0",
      "solutions.sectors.energy.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.energy.business.0",
      "solutions.sectors.energy.business.1",
      "solutions.sectors.energy.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.energy.useCases.0",
      "solutions.sectors.energy.useCases.1",
      "solutions.sectors.energy.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_ENERGY",
  },
  {
    slug: "biocomposites",
    titleKey: "solutions.sectors.biocomposites.title",
    taglineKey: "solutions.sectors.biocomposites.tagline",
    summaryKey: "solutions.sectors.biocomposites.summary",
    image: "/fiber-pack.png",
    highlightKeys: [
      "solutions.sectors.biocomposites.highlights.0",
      "solutions.sectors.biocomposites.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.biocomposites.business.0",
      "solutions.sectors.biocomposites.business.1",
      "solutions.sectors.biocomposites.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.biocomposites.useCases.0",
      "solutions.sectors.biocomposites.useCases.1",
      "solutions.sectors.biocomposites.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_BIOCOMPOSITES",
  },
  {
    slug: "waste",
    titleKey: "solutions.sectors.waste.title",
    taglineKey: "solutions.sectors.waste.tagline",
    summaryKey: "solutions.sectors.waste.summary",
    image: "/diagram-1.png",
    highlightKeys: [
      "solutions.sectors.waste.highlights.0",
      "solutions.sectors.waste.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.waste.business.0",
      "solutions.sectors.waste.business.1",
      "solutions.sectors.waste.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.waste.useCases.0",
      "solutions.sectors.waste.useCases.1",
      "solutions.sectors.waste.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_WASTE",
  },
  {
    slug: "agriculture",
    titleKey: "solutions.sectors.agriculture.title",
    taglineKey: "solutions.sectors.agriculture.tagline",
    summaryKey: "solutions.sectors.agriculture.summary",
    image: "/seeds-cover.jpg",
    highlightKeys: [
      "solutions.sectors.agriculture.highlights.0",
      "solutions.sectors.agriculture.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.agriculture.business.0",
      "solutions.sectors.agriculture.business.1",
      "solutions.sectors.agriculture.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.agriculture.useCases.0",
      "solutions.sectors.agriculture.useCases.1",
      "solutions.sectors.agriculture.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_AGRICULTURE",
  },
  {
    slug: "animal-care",
    titleKey: "solutions.sectors.animalCare.title",
    taglineKey: "solutions.sectors.animalCare.tagline",
    summaryKey: "solutions.sectors.animalCare.summary",
    image: "/hemp_hurds_mulch-443x300.png",
    highlightKeys: [
      "solutions.sectors.animalCare.highlights.0",
      "solutions.sectors.animalCare.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.animalCare.business.0",
      "solutions.sectors.animalCare.business.1",
      "solutions.sectors.animalCare.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.animalCare.useCases.0",
      "solutions.sectors.animalCare.useCases.1",
      "solutions.sectors.animalCare.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_ANIMAL",
  },
  {
    slug: "cosmetics",
    titleKey: "solutions.sectors.cosmetics.title",
    taglineKey: "solutions.sectors.cosmetics.tagline",
    summaryKey: "solutions.sectors.cosmetics.summary",
    image: "/seeds.png",
    highlightKeys: [
      "solutions.sectors.cosmetics.highlights.0",
      "solutions.sectors.cosmetics.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.cosmetics.business.0",
      "solutions.sectors.cosmetics.business.1",
      "solutions.sectors.cosmetics.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.cosmetics.useCases.0",
      "solutions.sectors.cosmetics.useCases.1",
      "solutions.sectors.cosmetics.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_COSMETICS",
  },
  {
    slug: "food",
    titleKey: "solutions.sectors.food.title",
    taglineKey: "solutions.sectors.food.tagline",
    summaryKey: "solutions.sectors.food.summary",
    image: "/hemp_seeds_AdobeStock-443x300.jpeg",
    highlightKeys: [
      "solutions.sectors.food.highlights.0",
      "solutions.sectors.food.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.food.business.0",
      "solutions.sectors.food.business.1",
      "solutions.sectors.food.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.food.useCases.0",
      "solutions.sectors.food.useCases.1",
      "solutions.sectors.food.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_FOOD",
  },
  {
    slug: "pharma",
    titleKey: "solutions.sectors.pharma.title",
    taglineKey: "solutions.sectors.pharma.tagline",
    summaryKey: "solutions.sectors.pharma.summary",
    image: "/bast-fiber.png",
    highlightKeys: [
      "solutions.sectors.pharma.highlights.0",
      "solutions.sectors.pharma.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.pharma.business.0",
      "solutions.sectors.pharma.business.1",
      "solutions.sectors.pharma.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.pharma.useCases.0",
      "solutions.sectors.pharma.useCases.1",
      "solutions.sectors.pharma.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_PHARMA",
  },
  {
    slug: "services",
    titleKey: "solutions.sectors.services.title",
    taglineKey: "solutions.sectors.services.tagline",
    summaryKey: "solutions.sectors.services.summary",
    image: "/download.png",
    highlightKeys: [
      "solutions.sectors.services.highlights.0",
      "solutions.sectors.services.highlights.1",
    ],
    businessKeys: [
      "solutions.sectors.services.business.0",
      "solutions.sectors.services.business.1",
      "solutions.sectors.services.business.2",
    ],
    useCaseKeys: [
      "solutions.sectors.services.useCases.0",
      "solutions.sectors.services.useCases.1",
      "solutions.sectors.services.useCases.2",
    ],
    preziEnvKey: "NEXT_PUBLIC_PREZI_SERVICES",
  },
]

export function getSolutionBySlug(slug: string) {
  return SOLUTION_SECTORS.find((solution) => solution.slug === slug)
}
