import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const cardData = [
  // Your card data objects
  {
    title: "Legal Expertise",
    content:
      "Our attorneys are experts in their respective fields of law, possessing in-depth knowledge and experience.",
  },
  {
    title: "Strategic Advocacy",
    content:
      "Our attorneys are skilled in developing innovative legal strategies tailored to each case, ensuring the best possible outcome for our clients",
  },
  {
    title: "Proven Results",
    content:
      "With a consistent track record of successful legal resolutions, our attorneys have earned a reputation for excellence and reliability in the legal field.",
  },
];

const PeopleLayout = () => {
  return (
    <>
      <div className="px-12 font-inter">
        <Header />
        {/* Main Content */}
        <div className="mt-6 bg-gray flex items-center h-h90">
          <div className="flex pl-24">
            <h1 className="font-bold text-5xl leading-aboutBanner">
              Only Qualified Attorney’s
            </h1>
          </div>
        </div>

        {/* Values */}
        <div className="">
          <h1 className="mt-20 text-center text-5xl font-bold ">
            Why our Attorney’s Stand out?
          </h1>
          <div className="pl-8 lg:pl-36 mt-20 flex flex-wrap justify-between gap-4 ">
            {cardData.map((card, index) => (
              <div className="flex flex-col w-52 ">
                <div className="w-24 h-20 bg-gray"></div>
                <div className=" flex flex-col  gap-2">
                  <h1 className="text-2xl font-extrabold">{card.title}</h1>
                  <p className="text-lg font-normal leading-5">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>

      <div className="mt-32 bg-lightGray px-48">
        <h1 className="pt-28 pb-32 text-left text-5xl font-bold ">
          Meet the Attorney’s
        </h1>

        <div className="flex flex-col lg:flex-row justify-between mb-20">
          <div className="lg:basis-2/5 bg-gray flex flex-col items-center justify-end relative">
            <h1 className="font-semibold text-2xl absolute top-1/2 ">image</h1>
            <div className="absolute w-4/5  px-12 py-4 bottom-0 transform translate-y-1/2 bg-white ">
              <h1 className="text-2xl  font-extrabold ">Ravi Vaswani</h1>
              <p className="text-lg font-normal pt-3 leading-5">
                Founding Partner, General Corporate Advisory
              </p>
            </div>
          </div>

          <div className="  lg:basis-2/5 lg:py-36">
            <p className="font-normal text-lg mt-6 leading-6">
              Ravi Vaswani, Founding Partner, is a seasoned legal expert with
              over 11 years of experience, specializing in high-stakes strategic
              and commercial matters across diverse industries.
            </p>
            <p className="text-lg font-bold">Know more</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mb-20">
          <div className="  lg:basis-2/5 lg:py-36">
            <p className="font-normal text-lg mt-6 leading-6">
              He brings over a decade of diverse legal expertise, specializing
              in pre-litigation strategy, commercial contracts, and
              transactional aspects of financial instruments.
            </p>
            <p className="text-lg font-bold">Know more</p>
          </div>
          <div className="lg:basis-2/5 bg-gray flex flex-col items-center justify-end relative">
            <h1 className="font-semibold text-2xl absolute top-1/2 ">image</h1>
            <div className="absolute w-4/5  px-12 py-4 bottom-0 transform translate-y-1/2 bg-white ">
              <h1 className="text-2xl  font-extrabold ">Ashish Mukhi</h1>
              <p className="text-lg font-normal pt-3 leading-5">
                Partner, Dispute Resolution
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mb-20">
          <div className="lg:basis-2/5 bg-gray flex flex-col items-center justify-end relative">
            <h1 className="font-semibold text-2xl absolute top-1/2 ">image</h1>
            <div className="absolute w-4/5  px-12 py-4 bottom-0 transform translate-y-1/2 bg-white ">
              <h1 className="text-2xl  font-extrabold ">Utkarsh Sharma</h1>
              <p className="text-lg font-normal pt-3 leading-5">
              Partner, Dispute Resolution
              </p>
            </div>
          </div>

          <div className="  lg:basis-2/5 lg:py-36">
            <p className="font-normal text-lg mt-6 leading-6">
              Utkarsh Sharma, Partner in Dispute Resolution, specializes in
              high-value commercial litigation, regulatory matters, and
              white-collar crimes, with extensive experience in representing
              clients before top Indian courts and advising on complex
              investigations.
            </p>
            <p className="text-lg font-bold">Know more</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pb-80 ">
          <div className="  lg:basis-2/5 lg:py-36">
            <p className="font-normal text-lg mt-6 leading-6">
            Rahul Agarwal, as the head of corporate secretarial practice at Zentrum Law, leverages over seven years of expertise in governance, compliances, and corporate affairs, providing strategic advice on cap tables, due diligence, fundraising, corporate governance, compliance, and liquidation, among other areas.
             </p>
            <p className="text-lg font-bold">Know more</p>
          </div>
          <div className="lg:basis-2/5 bg-gray flex flex-col items-center justify-end relative">
            <h1 className="font-semibold text-2xl absolute top-1/2 ">image</h1>
            <div className="absolute w-4/5  px-12 py-4 bottom-0 transform translate-y-1/2 bg-white ">
              <h1 className="text-2xl  font-extrabold ">Rahul Agarwal</h1>
              <p className="text-lg font-normal pt-3 leading-5">
              Partner, General Corporate Advisory
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
    <Footer/>
    </>
  );
};

export default PeopleLayout;
