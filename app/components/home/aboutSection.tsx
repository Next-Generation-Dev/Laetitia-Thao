"use client";

import React from "react";
import Image from "next/image";
import profil from "@/assets/img2.png";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20" id="about">
      <div className="max-w-5xl mx-auto bg-transparent shadow-lg rounded-lg overflow-hidden p-2 sm:p-4 md:p-8">
        <div className="md:flex gap-4">
          <div className="md:w-1/3">
            <Image
              src={profil}
              alt="Laetitia Thao"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3 p-2">
            <h2 className="text-3xl font-bold mb-4">À mon sujet</h2>
            <p className="text-lg mb-4">
              Bonjour, je suis <strong>Laetitia Thao</strong>, assistante
              maternelle agréée à Eaubonne. Avec plus de 20 ans
              d&apos;expérience, je suis passionnée par l&apos;éducation et le
              bien-être des enfants.
            </p>
            <p className="text-lg mb-4">
              Mon objectif est de fournir un environnement sûr, chaleureux et
              stimulant pour les enfants, où ils peuvent s&apos;épanouir et
              grandir en toute confiance. Je propose diverses activités
              éducatives et ludiques adaptées à chaque âge.
            </p>
            <p className="text-lg">
              N&apos;hésitez pas à me contacter pour plus d&apos;informations ou
              pour organiser une visite. Je serais ravie de vous rencontrer et
              de discuter de vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
