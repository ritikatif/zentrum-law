import React from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const cardData = [
  // Your card data objects
  {
    title: "Disputes",
    content:
      "Our seasoned litigation team excels in resolving complex legal conflicts, representing clients in top legal forums. Specializing in insolvency, transnational arbitration, white-collar crimes, and civil-commercial litigation, we deliver effective solutions.",
  },
  {
    title: "Corporate Advisory",
    content:
      "Our seasoned litigation team excels in resolving complex legal conflicts, representing clients in top legal forums. Specializing in insolvency, transnational arbitration, white-collar crimes, and civil-commercial litigation, we deliver effective solutions.",
  },
  {
    title: "Corporate Advisory",
    content:
      "Our seasoned litigation team excels in resolving complex legal conflicts, representing clients in top legal forums. Specializing in insolvency, transnational arbitration, white-collar crimes, and civil-commercial litigation, we deliver effective solutions.",
  },
  {
    title: "How To Grill Corn",
    content:
      "Our seasoned litigation team excels in resolving complex legal conflicts, representing clients in top legal forums. Specializing in insolvency, transnational arbitration, white-collar crimes, and civil-commercial litigation, we deliver effective solutions.",
  },
  {
    title: "Crunchwrap Supreme",
    content:
      "Our seasoned litigation team excels in resolving complex legal conflicts, representing clients in top legal forums. Specializing in insolvency, transnational arbitration, white-collar crimes, and civil-commercial litigation, we deliver effective solutions.",
  },
  {
    title: "Broccoli Cheese Soup",
    content:
      "Our seasoned litigation team excels in resolving complex legal conflicts, representing clients in top legal forums. Specializing in insolvency, transnational arbitration, white-collar crimes, and civil-commercial litigation, we deliver effective solutions.",
  },
];
const Expertise = () => {
  const CardsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * CardsPerPage;
  const visibleCards = cardData.slice(startIndex, startIndex + CardsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <div className="px-28 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11  text-center">
        {visibleCards.map((card, index) => (
          <div className="border-2 border-bc rounded-lg p-6">
            <div className="bg-gray  h-64 rounded-lg "></div>
            <h1 className="font-extrabold  text-2xl pt-2">{card.title}</h1>
            <p className="font-medium  text-lg pt-2">{card.content}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <div onClick={() => handlePageChange(1)}>
          <AiOutlineArrowLeft />
        </div>
        <div onClick={() => handlePageChange(2)}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
