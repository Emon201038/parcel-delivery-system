"use client";

interface Brand {
  id: number;
  name: string;
  color: string;
}

const brands: Brand[] = [
  { id: 1, name: "Brand A", color: "from-blue-500 to-blue-600" },
  { id: 2, name: "Brand B", color: "from-purple-500 to-purple-600" },
  { id: 3, name: "Brand C", color: "from-pink-500 to-pink-600" },
  { id: 4, name: "Brand D", color: "from-green-500 to-green-600" },
  { id: 5, name: "Brand E", color: "from-orange-500 to-orange-600" },
  { id: 6, name: "Brand F", color: "from-red-500 to-red-600" },
  { id: 7, name: "Brand G", color: "from-indigo-500 to-indigo-600" },
  { id: 8, name: "Brand H", color: "from-cyan-500 to-cyan-600" },
];

export default function BrandCarousel() {
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex gap-6 w-fit">
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${brands.length * 160}px));
            }
          }

          .carousel-scroll {
            animation: scroll-left 20s linear infinite;
            animation-play-state: running;
            animation-fill-mode: none;
            animation-timeline: auto;
            animation-iteration-count: infinite;
            animation-direction: normal;
            animation-range-start: normal;
            animation-range-end: normal;
            display: flex;
            gap: 24px;
            width: fit-content;
          }
        `}</style>

        <div className="carousel-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className={`flex-shrink-0 w-40 h-32 rounded-lg bg-gradient-to-br ${brand.color} shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <span className="text-white font-bold text-center px-4">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
