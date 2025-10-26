import Image from "next/image"
import { getAssetPath } from "@/lib/assets"

interface Partner {
  name: string
  logo: string
  url: string
}

const partners: Partner[] = [
  {
    name: "Oasis Energy Partners",
    logo: "/partners/oasis-energy.svg",
    url: "https://example.com/oasis-energy",
  },
  {
    name: "Desert Labs",
    logo: "/partners/desert-labs.svg",
    url: "https://example.com/desert-labs",
  },
  {
    name: "Green Horizon",
    logo: "/partners/green-horizon.svg",
    url: "https://example.com/green-horizon",
  },
  {
    name: "Sahara Foundation",
    logo: "/partners/sahara-foundation.svg",
    url: "https://example.com/sahara-foundation",
  },
]

export const PartnersCarousel = () => {
  return (
    <div className="relative mb-20">
      <div className="z-20 absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="z-20 absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent" />

      <div
        className="flex items-center overflow-hidden carousel-wrapper"
      // style={{ border: '2px solid blue' }}
      >
        {[0, 1].map((loopIndex) => (
          <div
            key={`partners-group-${loopIndex}`}
            className="flex items-center justify-center min-w-full carousel-track"
            aria-hidden={loopIndex === 1}
          // style={{ border: '2px solid red' }}
          >
            {partners.map((partner) => (
              <a
                key={`${partner.name}-${loopIndex}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex grow-0 shrink-0 w-1/4 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label={partner.name}
              // style={{ border: '2px solid orange' }}
              >
                <Image
                  src={getAssetPath(partner.logo)}
                  // src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className="h-16 w-40 object-contain grayscale opacity-70 transition duration-300 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        ))}
      </div>


      <style jsx>{`
        @keyframes partner-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .carousel-track {
          animation: partner-scroll 22s linear infinite;
          will-change: transform;
        }
        .carousel-wrapper:hover .carousel-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
