import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Container from "../Container/Container";
import Button from "../Button/Button";

const Navbar = ({ logoSize }) => {
  // Nav Links Data
  const navItems = [
    { title: "Evenementen", url: "/" },
    { title: "Ontdekken", url: "/" },
    { title: "Nieuws", url: "/" },
  ];

  return (
    <Container maxWidth="max-w-[1515px]">
      <div className="w-full flex items-center justify-between gap-3 ">
        {/* Logo  */}
        <Link href="/">
          <div
            className={`${logoSize} relative flex items-center justify-center `}
          >
            <Image
              src={`/images/logo.svg`}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </Link>
        {/* Nav Items  */}
        <div className="hidden lg:flex items-center justify-center gap-6 ">
          {navItems.map((item, index) => (
            <Link key={index} href={item.url}>
              <div className="font-bold text-white text-base cursor-pointer ">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
        {/* Button => Download app  */}
        <Link href={`/`}>
          <button
            className={`transition-all hidden lg:flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold  text-white cursor-pointer bg-azure hover:text-white`}
          >
            Download App
          </button>
        </Link>
        {/* Menu Button  */}
        <Bars3Icon className="w-[36px] h-[36px] font-bold text-white cursor-pointer inline-block lg:hidden" />
      </div>
    </Container>
  );
};

export default Navbar;