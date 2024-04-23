/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MdWhatsapp, MdFacebook } from "react-icons/md";
const Footer: React.FC = () => {
  return (
    <div className="w-full h-auto mt-6 bg-violet-900">
      <div className="container mx-auto py-4 flex flex-col items-center">
        <div className="mx-auto w-5/6 flex flex-col  md:flex-row">
          <div className="mx-auto px-4 w-full md:w-3/5">
            <h6 className="text-lg font-nunito font-bold text-white ">About</h6>
            <p className="text-justify text-sm md:text-base font-nunito text-white">
              At Onestore, We're dedicated to providing you with quality products and
              exceptional service. With a wide selection of items across various categories,
              from fashion to electronics, We're here to meet all your needs. Shop with
              confidence at Onestore, where customer satisfaction is our top priority. Join us
              today and discover a better way to shop online.
            </p>
          </div>
          <div className="mx-auto w-full md:w-2/5 mt-4 flex flex-row items-center">
            <div className="w-1/2 mx-auto">
              <h6 className="text-lg font-roboto text-white ">Quick Links</h6>
              <ul className="mx-auto text-base font-nunito text-white">
                <li>
                  <a href="*">About Us</a>
                </li>
                <li>
                  <a href="*t/">Contact Us</a>
                </li>
                <li>
                  <a href="*y-policy/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mx-auto w-full md:w-4/5 md:px-12 py-2 ">
        <div className="mx-14 md:mx-5 flex flex-col-reverse  md:flex-row">
          <div className="py-2">
            <p className="text-xs md:text-sm font-nunito text-white ">
              Copyright &copy; 2024 All Rights Reserved by
              <a href="*"> OneStore</a>.
            </p>
          </div>

          <div className="m-auto">
            <ul className="mx-auto flex flex-row">
              <li className="px-2">
                <a href="#">
                  <MdWhatsapp size="32" className="text-green-600" />
                </a>
              </li>
              <li className="px-2">
                <a href="#">
                  <MdFacebook size="32" className="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mx-14 md:mx-5 py-2">
          <a
            href="https://theozonetechnology.com"
            className=" text-xs md:text-sm font-nunito text-white underline "
          >
            Developed by Drifting The Ozone Technology - theozonetechnology.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
