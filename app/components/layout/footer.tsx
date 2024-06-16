"use client";

import type { IconProps } from "@iconify/react";
import React from "react";
import { Spacer, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import ThemeSwitch from "@/components/theme-switch";
import NextGeneration from "@/components/next-generation";
import { MailIcon } from "./socials";

import navLinks from "./nav-link";

type SocialIconProps = Omit<IconProps, "icon">;

const socialItems = [
  {
    name: "Mail",
    href: "mailto:inayathao@hotmail.fr",
    icon: (props: SocialIconProps) => <MailIcon {...props} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thaolaetitia/",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:instagram" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col border-t border-divider">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-4 flex w-full flex-col items-center justify-center md:order-1 md:mt-0">
          <div className="flex items-center justify-center">
            <span className="text-text font-text">
              Laetitia Thao | Assistante Maternelle Agréée depuis 2006
            </span>
          </div>
          <Spacer y={4} />
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                className="text-default-700 hover:text-gray-700 duration-300"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Spacer y={6} />

          <div className="flex items-center justify-center gap-x-2">
            {socialItems.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <item.icon
                  aria-hidden="true"
                  className="w-5 text-default-700 hover:text-gray-700 duration-300"
                />
              </Link>
            ))}
          </div>
          <Spacer y={4} />
          <p className="text-default-40 mt-1 text-center text-small">
            &copy; 2024 Next Generation. Tous droits réservés.
          </p>
          <Spacer y={4} />
          <NextGeneration />
        </div>
      </div>
    </footer>
  );
}
