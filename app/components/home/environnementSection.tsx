import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const ContactSection: React.FC = () => {
  const images = [
    { src: "/images/entree.jpg", alt: "Entrée" },
    { src: "/images/cuisine.jpg", alt: "Cuisine" },
    { src: "/images/chambre.jpg", alt: "Chambre à coucher" },
    { src: "/images/salle-de-bain.jpg", alt: "Salle de bain" },
    { src: "/images/espace-de-vie.jpg", alt: "Espace de vie" },
    { src: "/images/escalier.jpg", alt: "Escalier" },
    { src: "/images/jardin.jpg", alt: "Jardin" },
  ];

  return (
    <section
      className="py-20 min-w-[80vw] lg:min-w-[1024px]"
      id="environnement"
    >
      <h2 className="text-3xl font-bold mb-2">Environnement</h2>
      <p className="mb-6">
        Voici le lieu dans lequel j&apos;accueil les enfants dès leur plus jeune
        âge :
      </p>
      <div className="grid sm:grid-cols-2 w-full gap-4">
        {images.map((image, index) => (
          <div key={index} className="mb-6">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg font-medium">{image.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
