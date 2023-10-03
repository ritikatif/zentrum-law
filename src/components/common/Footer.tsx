import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="pt-32 flex justify-around">
        <div className="flex flex-col  items-start gap-4">
          <img className="" src="/images/headerLogo.png" alt="logo" />
          <p className="pl-4 text-sm font-medium">
            Empowering Excellence in Legal <br /> Services Since 2021.
          </p>
          <div className="pl-4 flex gap-4">
            <img className="" src="/images/linkedIn.png" alt="logo" />
            <img className="" src="/images/fb.png" alt="logo" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">QUICK LINKS</h1>
          <p className="text-sm font-medium">Privacy Policy</p>
          <p className="text-sm font-medium">Cookies Policy</p>
          <p className="text-sm font-medium">Disclaimer</p>
          <p className="text-sm font-medium">Sitemap</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">OFFICES</h1>
          <p className="text-sm font-medium">Delhi</p>
          <p className="text-sm font-medium">Banglore</p>
          <p className="text-sm font-medium">Mumbai</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-base font-bold">GET IN TOUCH</h1>
          <p className="text-sm font-medium">
            D - 774B, C.R.Park
            <br />
            New Delhi - 110019
          </p>
          <p className="text-sm font-medium">office@zentrumlaw.com</p>
        </div>
      </div>

      <div className="my-20 flex justify-between px-36 text-sm font-medium ">
        <h1>© 2023 Zentrum Law Partners. All Rights Reserved.</h1>
        <div className="flex gap-4">
          <p>Privacy Policy</p>
          <p>Terms of use</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
