"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";

import Image from "next/image";
import Logo from "@/assets/img4.png";
import navLinks from "./nav-link";

const Header: React.FC = () => {
  return (
    <Navbar
      className="bg-[hsla(0,0%,100%,0.5)] px-4 backdrop-blur-[12px] ph:px-12"
      isBordered
      shouldHideOnScroll={false}
    >
      <NavbarBrand className="flex items-center">
        <Link href="/">
          <h1 className="text-lg xs:text-xl ph:text-2xl font-[500] text-black hover:text-gray-600 duration-300 flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="">Laetitia Thao</span>
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-8 lg:flex" justify="center">
        {navLinks.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className="cursor-pointer text-black hover:text-gray-600 duration-300"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href="#contact" rel="noopener">
          <Button
            className="bg-pink-500 p-3 font-[500] text-white hover:bg-pink-400 hover:text-black hover:!opacity-100"
            radius="sm"
          >
            Contacter
          </Button>
        </Link>
      </NavbarContent>

      <NavbarMenuToggle className="h-[56px] w-[50px] !text-black lg:hidden" />
      <NavbarMenu className="flex flex-col justify-between gap-5 py-8 pl-6 pr-4 lg:hidden bg-transparent">
        <div className="grid grid-cols-1">
          {navLinks.map((item) => (
            <NavbarItem key={item.name}>
              <Link
                href={item.href}
                className="py-2 text-[21px] text-black hover:text-gray-500"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-center text-default-300">
            Vous souhaitez plus de renseignements ?<br />
            Contactez-moi !
          </p>

          <Link href="mailto:inayathao@hotmail.fr" target="_blank">
            <Button
              className="lg:text-normal h-fit w-full whitespace-pre-wrap bg-white p-3 text-xs font-[500] text-black xs:w-[250px] ph:w-fit md:w-fit"
              radius="sm"
            >
              Contacter par mail
            </Button>
          </Link>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
