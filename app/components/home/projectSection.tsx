// import React from "react";
// import Image from "next/image";

// const ProjectSection: React.FC = () => {
//   return (
//     <>
//       <section
//         className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
//         id="projet-d-accueil"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Mon projet d&apos;accueil
//         </h2>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">MON AGREMENT</h3>
//           <p className="mb-1">
//             Agréée depuis Décembre 2008 par le Conseil Général de la Gironde.
//           </p>
//           <p className="mb-1">
//             Agrément pour 4 enfants, renouvelé tous les 5 ans par la PMI.
//           </p>
//           <p className="mb-1">
//             Formations régulières. 24 enfants accueillis à ce jour.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">MON ENVIRONNEMENT</h3>
//           <p className="mb-1">
//             Maison de plain-pied, non-fumeur, avec jardin clôturé dédié aux
//             enfants.
//           </p>
//           <Image
//             src="/images/jardin.jpg"
//             alt="Jardin"
//             width={600}
//             height={400}
//             className="mb-4 w-full h-auto"
//           />
//           <p className="mb-1">
//             2 chats et 1 chien, sans contact direct avec les enfants.
//           </p>
//           <p className="mb-1">
//             2 enfants adultes et un mari présents selon leurs horaires.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">LIEU D&apos;ACCUEIL</h3>
//           <p className="mb-1">Accueil dans la pièce principale avec :</p>
//           <ul className="list-disc list-inside mb-4">
//             <li>Tapis et module de motricité</li>
//             <li>2 cuisines</li>
//             <li>Rangements de jouets divers</li>
//             <li>Instruments de musique</li>
//             <li>Livres</li>
//           </ul>
//           <Image
//             src="/images/piece_accueil_1.jpg"
//             alt="Pièce d'accueil 1"
//             width={600}
//             height={400}
//             className="mb-4 w-full h-auto"
//           />
//           <Image
//             src="/images/piece_accueil_2.jpg"
//             alt="Pièce d'accueil 2"
//             width={600}
//             height={400}
//             className="mb-4 w-full h-auto"
//           />
//           <p className="mb-1">
//             Chambre pour 2 enfants, autres couchages dans deux chambres
//             séparées.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">PEDAGOGIE</h3>
//           <p className="mb-1">
//             Accueil bienveillant, respect de chacun. Activités proposées :
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>Sensori-motrices</li>
//             <li>Arts plastiques</li>
//             <li>Cuisine</li>
//             <li>Musique</li>
//             <li>Lecture d&apos;histoires</li>
//           </ul>
//           <p className="mb-1">
//             Jeu libre important. Motricité libre pratiquée.
//           </p>
//           <p className="mb-1">Promenade quotidienne si le temps le permet.</p>
//           <Image
//             src="/images/balade_1.jpg"
//             alt="Balade 1"
//             width={600}
//             height={400}
//             className="mb-4 w-full h-auto"
//           />
//           <Image
//             src="/images/balade_2.jpg"
//             alt="Balade 2"
//             width={600}
//             height={400}
//             className="mb-4 w-full h-auto"
//           />
//           <p className="mb-1">
//             Visite au RPE une fois par semaine. Pas de télévision pour les moins
//             de 3 ans.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">POUR LES REPAS</h3>
//           <p className="mb-1">
//             Purées dans un transat, chaise haute dès que l&apos;enfant tient
//             assis, table adaptée pour les autonomes.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">REGLES DE VIE</h3>
//           <p className="mb-1">
//             Ponctualité demandée. Accueil extérieur en raison de la crise
//             sanitaire.
//           </p>
//           <p className="mb-1">Les parents fournissent :</p>
//           <ul className="list-disc list-inside mb-4">
//             <li>Eau</li>
//             <li>Couches</li>
//             <li>Produits de soin</li>
//             <li>Vêtements de rechange</li>
//             <li>Vaccinations à jour</li>
//             <li>Ordonnance de Doliprane</li>
//           </ul>
//           <p className="mb-1">Je fournis :</p>
//           <ul className="list-disc list-inside mb-4">
//             <li>Gigoteuses</li>
//             <li>Carrés de tissus éponges</li>
//             <li>Cahier de vie</li>
//           </ul>
//           <p className="mb-1">
//             Compte Instagram pour partager les activités (mains, jambes, dos,
//             jamais de visages).
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">ENFANTS MALADES</h3>
//           <p className="mb-1">
//             Pas d&apos;accueil pour gastro-entérite, varicelle, conjonctivite,
//             bronchiolite.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">ADMINISTRATIF</h3>
//           <p className="mb-1">
//             Affiliée à la CAF : monenfant.fr. Déclaration à Pajemploi pour
//             toucher l&apos;aide de CMG.
//           </p>
//           <p className="mb-1">
//             Utilisation de Topassmat pour la gestion des contrats. Paiement par
//             virement.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-xl font-semibold mb-2">CONCLUSION</h3>
//           <p className="mb-1">
//             Mon métier d&apos;assistante maternelle est une véritable passion
//             que j&apos;aime partager avec les enfants et leurs familles.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProjectSection;
