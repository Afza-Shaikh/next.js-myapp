import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { FaArrowCircleDown } from "react-icons/fa";


import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-600 via-pink-400 to-red-300">

      {/* Sidebar for Sofa Categories - Left Side with Custom Background Color */}
      <div className="w-[25%] p-8 rounded-lg shadow-lg space-y-6 text-white" style={{ backgroundColor: "FF6F91" }}>
        <h2 className="text-2xl font-semibold text-center text-b text-white"> Comfy-Sofa Categories</h2>
        <ul className="space-y-4">
          <li>

          
          <Link href="/wooden-sofa" className="text-lg text-white text-bold hover:text-yellow-300 transition duration-300"> Wooden-Sofa </Link>   
          </li>
          <FaArrowCircleDown className="text-white"/>


          <li>
            <Link href="/drawing-room-sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Arm-Chair</Link>
          </li>
          <FaArrowCircleDown className="text-white" />

          <li>
            <Link href="/sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Sofa-Set</Link>
          </li>
          <FaArrowCircleDown className="text-white" />

          <li>
            <Link href="/imported-sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Single-Sofa</Link>
          </li>
          <FaArrowCircleDown className="text-white" />

          <li>
            <Link href="/imported-sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Wing-Chair</Link>
          </li>
          <FaArrowCircleDown className="text-white" />

          <li>
            <Link href="/imported-sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Wooden-Chair</Link>
          </li>
          <FaArrowCircleDown className="text-white" />
          <li>
            <Link href="/imported-sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Leather-Sofa</Link>
          
          </li>
          <FaArrowCircleDown className="text-white" />

          <li>
            <Link href="/imported-sofa" className="text-lg text-white hover:text-yellow-300 transition duration-300">Floral-Wing-Sofa</Link>
          
          </li>

        </ul>
      </div>

      {/* Main section: Hero with Sofa image */}
      <div className="flex flex-col justify-center items-center bg-pink-500 bg-opacity-80 rounded-lg p-12 px-20 text-white w-[75%] space-y-8 shadow-2xl shadow-pink-500/50">

        <div className="flex items-center gap-4">
          <RiSofaFill className="sm:text-3xl md:text-5xl animate-bounce text-yellow-200" />
          <span className="sm:text-base md:text-lg lg:text-xl font-semibold text-yellow-100">
            New Sofa-Set With Best Offers!!!
          </span>
        </div>

        {/* Heading */}
        <h1 className="sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug text-center text-yellow-100 drop-shadow-lg">
          Up to 50% Off Voucher!!
        </h1>

        {/* Shop Now Section - Centered */}
        <div className="bg-pink-600 p-6 rounded-md text-center text-black shadow-lg shadow-pink-300 flex items-center justify-center mt-4">
          <Link 
            href={"products"}
            className="underline underline-offset-4 hover:font-semibold hover:text-yellow-300 flex items-center gap-2 justify-center transition-all duration-300"
          >
            Shop Now!
            <FaArrowRight className="animate-pulse text-yellow-200" />
          </Link>
        </div>

        {/* Sofa Image */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJwYJGAzWOPTdOqYofy3wqdSRyunqoXTM7A&s"
          alt="sofa set"
          className="mt-6 max-w-[600px] w-full object-cover rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
        />
        
      </div>

    </div>
  );
}


