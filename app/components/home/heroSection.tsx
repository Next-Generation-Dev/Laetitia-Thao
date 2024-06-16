"use client";
import React from "react";
import { motion } from "framer-motion";
import img from "@/assets/img1.png";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(70vh-64px)] w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div
          className="border border-divider h-[300px] w-[90vw] ph:h-[300px] ph:w-[500px] md:h-[400px] md:w-[600px] rounded-lg flex flex-col items-center justify-center bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
          <h1 className=" px-3 py-1 bg-white text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 ">
            CHEZ Laetitia Thao
          </h1>
          <p className=" px-3 py-1 bg-white text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-gray-800 mt-4 italic">
            Assistante Maternelle Agréée
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
