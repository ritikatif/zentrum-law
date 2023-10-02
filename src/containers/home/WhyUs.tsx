import React from "react";
const cardData = [
  // Your card data objects
  {
    title: "Expertise in Your Industry",
    content:
      " Targeted legal solutions tailored to your unique sector challenges.",
  },
  {
    title: "Proven Track Record of Success",
    content: " Favorable outcomes in landmark cases, protecting your interests",
  },
  {
    title: "Client-Centric Approach",
    content:
      "Partners in your success, aligning legal strategy with broader objectives",
  },
];
const WhyUs = () => {
  return (
    <div className=" mt-40 ">
      <h1 className="font-bold text-5xl leading-tight text-center">
        Why Choose us to Handle your case?
      </h1>

      <div className=" pl-28 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap--x-24  text-center">
        {cardData.map((card, index) => (
          <div className="w-80 mt-5">
            <div className="bg-gray h-64"></div>
            <h1 className="text-2xl font-extrabold p-1 pt-2">{card.title}</h1>
            <p className="font-medium  text-lg pt-2">{card.content}</p>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default WhyUs;
