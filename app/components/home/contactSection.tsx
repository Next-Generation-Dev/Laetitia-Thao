import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 w-full lg:max-w-[1024px]" id="contact">
      <h2 className="text-3xl font-bold mb-6">Me contacter</h2>
      <Card className="bg-white text-black shadow-lg ">
        <CardBody className="grid sm:grid-cols-2 items-start justify-start gap-4 p-2 xs:p-4 sm:p-8">
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Informations :</h3>
            <ul className="list-disc">
              <li className="mt-2">Laetitia Thao</li>
              <li className="mt-2">53 route de Saint-Leu</li>
              <li>95600, Eaubonne, Val D&apos;Oise</li>
              <li className="mt-2">
                <Link href="tel:+33651504667">Tél. : 06 51 50 46 67</Link>
              </li>
              <li>
                <Link href="mailto:inayathao@hotmail.fr">
                  inayathao@hotmail.fr
                </Link>
              </li>
            </ul>
          </div>
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Disponibilités :</h3>
            <ul className="list-disc">
              <li className="mt-2">
                Jours : Lundi | Mardi | Mercredi | Jeudi | Vendredi
              </li>
              <li className="mt-2">Horaires : 7h-20h</li>
              <li className="mt-2">1 place disponible pour Septembre 2024</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default ContactSection;
