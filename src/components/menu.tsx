"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [open, setopen] = useState(false);
  return (
    <div>
      <Image
        src="/menu_icos.svg"
        alt="img"
        width={40}
        height={40}
        className="cursor-pointer"
        onClick={() => setopen((p) => !p)}
      />
      
      {open && <div className=" absolute text-white bg-black left-0 top-14 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center text-2xl gap-4">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Loginot</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
        }


    </div>
  );
}
