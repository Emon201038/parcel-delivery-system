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
  { id: 9, name: "Brand I", color: "from-teal-500 to-teal-600" },
  { id: 10, name: "Brand J", color: "from-rose-500 to-rose-600" },
];

export default function BrandCarousel() {
  return (
    <div className="relative w-full overflow-hidden  py-6">
      <div className="flex max-w-full w-full h-24 overflow-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex animate-scroll">
          {brands.map((brand) => (
            <div
              className={`flex-[0_0_160px] h-24  flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 p-4 mx-8`}
            >
              <img
                src={`/images/brand-${brand.id}.png`}
                className={` font-bold h-full flex items-center justify-center`}
              />
            </div>
          ))}
        </div>
        <div aria-hidden className="group flex animate-scroll">
          {brands.map((brand) => (
            <div
              className={`flex-[0_0_160px] h-24  flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 p-4 mx-8`}
            >
              <img
                src={`/images/brand-${brand.id}.png`}
                className={` font-bold w-full h-full flex items-center justify-center`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
