import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./search-bar";
import NavbarIcons from "./navbar-icons";

export default function Navbar() {
  return (
    <div className="h-20 px-4   md:lg items-center   lg:px-16  xm:32px 2xl-62  relative  ">
      <div className=" h-full flex justify-between items-center md:hidden">
        <Link className="text-2xl tracking-wide" href={"/"}>
          LAMA
        </Link>
        <Menu />
      </div>
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src="/logo.png" alt=" logo img" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
        </div>
        <div className="w-2/3 flex justify-between items-center gap-8 ">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
}
