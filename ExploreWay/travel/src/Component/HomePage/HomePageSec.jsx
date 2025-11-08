import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import vdo1 from "../../assets/vdo1.mp4";
import vdo2 from "../../assets/vdo2.mp4";
import vdo3 from "../../assets/vdo3.mp4";
import vdo4 from "../../assets/vdo4.mp4";

const videoList = [vdo1, vdo2, vdo3, vdo4];

const HomePageSec = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videoList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video */}
      <video
        key={videoList[currentIndex]}
        src={videoList[currentIndex]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition duration-500"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white px-2 sm:px-4 bg-black/40">
        <div className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl flex flex-col items-center text-center gap-4 sm:gap-6">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug
                         bg-gradient-to-r from-white via-blue to-yellow-600 bg-clip-text text-transparent">
            Discover. Travel. Live
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-xl">
            Discover the world's most adventurous nature, life is too short for a trip.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="flex items-center justify-center h-10 sm:h-12 w-32 sm:w-44 md:w-48 bg-yellow-300 text-black hover:text-black-600 hover:bg-yellow-400 rounded-3xl px-4 transition text-sm sm:text-base"
          >
            Get Started <MdPlayArrow size={20} className="ml-1" />
          </button>
        </div>
        {/* Slider Arrows */}
      <div className="absolute bottom-4 sm:bottom-10 left-0 right-0 flex justify-between px-2 sm:px-6 pointer-events-none">
  <button
    onClick={handlePrev}
    className="pointer-events-auto text-white bg-black/40 p-1 sm:p-2 rounded-full hover:bg-black/60 transition"
    aria-label="Previous Video"
  >
    <FaArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
  </button>
  <button
    onClick={handleNext}
    className="pointer-events-auto text-white bg-black/40 p-1 sm:p-2 rounded-full hover:bg-black/60 transition"
    aria-label="Next Video"
  >
    <FaArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
  </button>
</div>

      </div>
    </div>
  );
};

export default HomePageSec;
