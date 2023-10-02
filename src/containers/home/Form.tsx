import React from "react";

const Form = () => {
  return (
    <div className="mt-20 px-40 flex flex-row flex-wrap  gap-12 text-left">
      <div className="w-fw">
        <h1 className="font-bold text-5xl leading-tight text-left">
          Seeking Legal Assistance? Contact Us
        </h1>
        <p className="font-normal text-xl pt-6">
          Have a legal inquiry or interested in learning more about our
          services? Our team is here to assist you. Reach out to us through the
          following channels:
        </p>

        <form className="">
          <div className="mb-4">
            <label
              className="block text-lg font-medium mt-2 mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input className="border border-bc rounded w-1/2 "></input>
            {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"> */}
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="Phone">
              Phone
            </label>
            {/* <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"> */}
            <input className="border border-bc rounded w-1/2 "></input>
          </div>
        </form>
        <h1 className="text-lg font-bold">Connect</h1>
      </div>
      <div className="bg-gray w-box h-box flex justify-center items-center ">
        <h1 className="font-semibold text-lg ">Law firm image</h1>
      </div>
    </div>
  );
};

export default Form;
