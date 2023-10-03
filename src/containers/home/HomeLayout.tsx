import Expertise from "./Expertise";
import Form from "./Form";
import Sectors from "./Sectors";
import WhyUs from "./WhyUs";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="px-12 py-8 font-inter">
        {/* Header */}
        <Header />
        {/* body */}
        <div className="mt-8 ">
          <div className="h-h90 bg-gray  flex  justify-center items-center ">
            <div className="w-3/5 text-center">
              <h1 className="text-3xl font-bold">Highlights</h1>
              <p className=" text-3xl  font-normal">
                This is the space for straightforward updates, noteworthy legal
                news, and valuable information.
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="  mt-24 px-28 flex justify-center flex-wrap font-bold text-xl gap-16 ">
          <div className="bg-gray w-box h-box flex justify-center items-center ">
            <h1 className="font-semibold text-lg ">Law firm image</h1>
          </div>
          <div className="w-text py-8">
            <div>
              <h1 className="font-bold text-5xl leading-tight">
                About Zentrum Law Partners
              </h1>
            </div>
            <div>
              <p className="font-medium text-base pt-2">
                Zentrum Law Partners, founded in 2021, is a dynamic law firm
                with offices across India. Specializing in corporate-commercial
                and dispute resolution, we serve a diverse clientele including
                tech startups and established corporations. Our global reach
                extends to clients in India, Singapore, South Korea, UAE, and
                the USA. With a client-centric approach, we provide innovative
                solutions to complex legal challenges. Our success is built on
                experience, knowledge, and a network of expertise.
              </p>
            </div>
            <div className="font-bold text-lg pt-2">View More</div>
          </div>
        </div>
        {/* Why Us */}
        <WhyUs />

        {/* Sectors */}
        <Sectors />

        <div className="py-14 flex flex-col items-center text-center">
          <h1 className="font-bold text-5xl leading-tight">
            Discover Our Expertise
          </h1>
          <p className="font-normal  text-xl pt-6 w-6/12">
            At Zentrum Law Partners, our seasoned team of lawyers brings a
            wealth of experience and deep industry knowledge to the table. We
            offer a wide range of legal services, focusing on the following key
            areas:
          </p>

          <p className="font-bold text-lg pt-3">View All</p>
        </div>

        <Expertise />
      </div>

      {/* form */}
      <Form />
      {/* footer */}
      <Footer />
    </>
  );
};
export default HomeLayout;
