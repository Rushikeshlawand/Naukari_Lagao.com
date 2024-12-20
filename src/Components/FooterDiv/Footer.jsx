import React from "react";

//Imported icons====>
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-[4rem] mb-4 bg-blueColor rounded-[10px] gap-15 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[.8rem]">
            <strong>Naukri</strong>-Lagao
          </h1>
        </div>
        <p className="text-white pb-[13px] text-[12px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employees find the best candidates.
        </p>
      </div>
      <div className="grid justify-center">
        <span className="divTitle text-[14px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            About us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">FAQ</li>
        </div>
      </div>

      <div className="grid justify-center">
        <span className="divTitle text-[14px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            Support center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            Contact us
          </li>
        </div>
      </div>

      <div className="grid justify-center">
        <span className="divTitle text-[14px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            Promotions
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] text-[12px]">Careers</li>
        </div>
      </div>

      <div className="grid justify-center pb-[2rem]">
        <span className="divTitle text-[14px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div className="text-[14px] text-white">
          <small>info@naukrilagao.com</small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="h-[20px] w-[20px] rounded-full icon" />
            <AiFillFacebook className="h-[20px] w-[20px] rounded-full icon" />
            <AiFillLinkedin className="h-[20px] w-[20px] rounded-full icon" />
            <AiFillTwitterSquare className="h-[20px] w-[20px] rounded-full icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
