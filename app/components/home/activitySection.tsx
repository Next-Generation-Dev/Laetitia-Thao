"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface Activity {
  name: string;
  icon: string;
}

const activities: Activity[] = [
  { name: "Lego", icon: "mdi:lego" },
  { name: "Puzzle", icon: "mdi:puzzle" },
  { name: "Bac à sable", icon: "mdi:beach" },
  { name: "Sortie au parc", icon: "mdi:tree" },
  { name: "Coloriage", icon: "mdi:palette" },
  { name: "Peinture", icon: "mdi:brush" },
  { name: "Lecture", icon: "mdi:book" },
  { name: "Jeux de société", icon: "mdi:gamepad-variant" },
  { name: "Musique", icon: "mdi:music" },
  { name: "Danse", icon: "mdi:music-note" },
];

const ActivitySection: React.FC = () => {
  return (
    <section className="py-20 w-full lg:max-w-[1024px]" id="activites">
      <h2 className="text-3xl font-bold mb-6">Activités</h2>
      <p className="mb-4">
        Quelques unes des activités proposées aux enfants :
      </p>
      <ul className="list-none list-inside grid grid-cols-1 ph:grid-cols-2 gap-4">
        {activities.map((activity, index) => (
          <li key={index} className="mb-6 flex items-center">
            <Icon icon={activity.icon} className="text-4xl mr-4" />
            <h3 className="text-xl font-semibold">{activity.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivitySection;
