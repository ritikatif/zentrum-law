import React from "react";
const sectorData = [
  // Your card data objects
  {
    title: "Consumer Durables",
  },
  {
    title: "Healthcare",
  },
  {
    title: "Construction",
  },
  {
    title: "Banking",
  },
  {
    title: "Cryptocurrency",
  },
  {
    title: "FinTech",
  },
  {
    title: "EdTech",
  },
  {
    title: "AgriTech",
  },
];
const Sectors = () => {
  return (
    <div className=" mt-20 ">
      <h1 className="font-bold text-5xl leading-tight text-center">Sectors</h1>
      <div className="px-40 py-12 font-bold text-lg flex justify-center flex-wrap gap-x-32 gap-y-12">
        {/* flex ka direction badal denge agar tab justify content y pr kaam krega or allin items x par kaam krega */}
        {sectorData.map((card, index) => (
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray rounded-full "></div>
            <h1>{card.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
