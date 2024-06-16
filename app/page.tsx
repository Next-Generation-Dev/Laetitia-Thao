import React from "react";

import Hero from "@/components/home/heroSection";
import About from "@/components/home/aboutSection";
import Environnement from "@/components/home/environnementSection";
// import Project from "@/components/home/projectSection";
import Activity from "@/components/home/activitySection";
// import Recommandation from "@/components/home/recommandationSection";
// import Information from "@/components/home/informationSection";
import Contact from "@/components/home/contactSection";

// https://cheznanoudianeassistantematernelle.fr/

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-12 lg:p-24">
      <Hero />
      <About />
      <Environnement />
      {/* <Project /> */}
      <Activity />
      {/* <Recommandation /> */}
      <Contact />
    </main>
  );
}
