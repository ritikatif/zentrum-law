import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";
const cardData = [
  // Your card data objects
  {
    title: "Expertise in Your Industry",
    content:
      "We prioritize unwavering integrity and ethical conduct in all our interactions, establishing trust at the core of our practice.",
  },
  {
    title: "Innovative Solutions",
    content:
      "We are committed to delivering creative and forward-thinking legal solutions, tailored to address each client's unique challenges.",
  },
  {
    title: "Client-Centric Approach",
    content:
      "Our clients are our focus, and we strive to understand and meet their specific needs, fostering collaborative, long-term relationships built on mutual respect.",
  },
];
const AboutLayout = () => {
  return (
    <>
      <div className="px-12 font-inter">
        <Header />
        {/* Main Content */}
        <div className="mt-10 flex-col md:flex-row flex flex-wrap h-h90">
          <div className="bg-gray  md:basis-1/2 flex pl-24 items-center">
            <h1 className="font-bold text-aboutBanner leading-aboutBanner">
              Driving Innovation, <br />
              Nurturing Relationships,
              <br /> Your Trustworthy Partner <br />
              for Legal Excellence.
            </h1>
          </div>
          <div className="bg-darkGray md:basis-1/2 flex justify-center items-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
        </div>

        {/* About */}
        <div>
          <h1 className="mt-40 text-center text-2xl font-semibold px-10  md:px-30 lg:px-60">
            At Zentrum Law Partners, we're more than just legal experts. Founded
            in 2021 by distinguished alumni of the National Law Institute
            University, our journey is rooted in a commitment to delivering
            unparalleled legal excellence.
          </h1>
        </div>

        {/* Mission */}
        <div className="mt-40 lg:mx-32 px-4 lg:px-36  xl:px-60 2xl:px-72  py-10 border-2 border-black">
          <div>
            <h1 className="text-5xl font-bold ">Our Mission</h1>
            <p className="font-normal text-lg mt-6 leading-6">
              We believe in empowering businesses with innovative,
              client-centered legal solutions. Our team's collective expertise
              spans a wide array of legal domains, enabling us to offer
              comprehensive services tailored to our clients' unique needs.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h1 className="mt-40 text-center text-5xl font-bold ">
            The Values we live by
          </h1>
          <div className="mt-20 flex flex-col gap-12 items-center">
            {cardData.map((card, index) => (
              <div className="flex flex-wrap gap-12 ">
                <div className="w-24 h-20 bg-gray"></div>
                <div className=" w-80 md:w-w556 flex flex-col  gap-2">
                  <h1 className="text-2xl font-extrabold">{card.title}</h1>
                  <p className="text-lg font-normal leading-5 ">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>

      <div className="mt-40">
        <div className="flex flex-col md:flex-row mb-20">
          <div className=" basis-full md:basis-1/2 lg:basis-2/3 px-16 lg:px-44 py-16 lg:py-36">
            <h1 className="text-5xl font-bold ">Global Reach</h1>
            <p className="font-normal text-lg mt-6 leading-6">
              With offices in New Delhi, Mumbai, Bengaluru, and Bhopal, we serve
              clients not only in India but also across the globe. Our
              international presence allows us to provide seamless legal support
              in diverse jurisdictions.
            </p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 bg-gray   flex items-center justify-center">
            <h1 className="font-semibold text-2xl ">image</h1>
            {/* <img src="" alt="" /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="basis-full md:basis-1/2 lg:basis-1/3 bg-gray  flex items-center justify-center">
            <h1 className="font-semibold text-2xl ">image</h1>
            {/* <img src="" alt="" /> */}
          </div>
          <div className=" basis-full md:basis-1/2 lg:basis-2/3 px-16 lg:px-44 py-16 lg:py-36">
            <h1 className="text-5xl font-bold ">
              Putting You First:
              <br /> Our Focus on Clients
            </h1>
            <p className="font-normal text-lg mt-6 leading-6">
              We prioritize understanding our clients' unique business needs,
              allowing us to deliver tailored legal solutions that drive
              success. Our commitment to fostering lasting relationships is what
              sets us apart.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className=" basis-full md:basis-1/2 lg:basis-2/3 px-16 lg:px-44 py-16 lg:py-36">
            <h1 className="text-5xl font-bold ">Industry Focus</h1>
            <p className="font-normal text-lg mt-6 leading-6">
              From Consumer Durables to Cryptocurrency, we have a deep
              understanding of various sectors. This specialized knowledge
              enables us to offer insightful legal advice that aligns with
              industry-specific challenges and opportunities.
            </p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-1/3 bg-gray  flex items-center justify-center">
            <h1 className="font-semibold text-2xl ">image</h1>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-20">
          <div className="basis-full md:basis-1/2 lg:basis-1/3 bg-gray  flex items-center justify-center">
            <h1 className="font-semibold text-2xl ">image</h1>
            {/* <img src="" alt="" /> */}
          </div>
          <div className=" basis-full md:basis-1/2 lg:basis-2/3 px-16 lg:px-44 py-16 lg:py-36">
            <h1 className="text-5xl font-bold ">Community Engagement</h1>
            <p className="font-normal text-lg mt-6 leading-6">
              Beyond legal expertise, we're dedicated to making a positive
              impact in the communities we serve. Our pro bono initiatives and
              community involvement reflect our commitment to social
              responsibility.
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default AboutLayout;
