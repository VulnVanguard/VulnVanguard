"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="backdrop-blur-xl top-0 fixed text-black dark:text-white w-screen z-50 lg:px-6 md:h-[80px] h-auto max-md:p-4 max-md:justify-center max-md:flex-col max-md:items-center lg:py-10 flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/logo.webp" alt="Innovate" width={80} height={80} />
        </Link>
        {!open ? (
          <GiHamburgerMenu
            onClick={() => {
              setOpen(!open);
            }}
            className="text-white text-3xl md:hidden"
          />
        ) : (
          <IoMdClose
            onClick={() => {
              setOpen(!open);
            }}
            className="text-white text-3xl md:hidden"
          />
        )}
      </div>
      <nav
        className={
          open
            ? "items-center md:ml-auto flex max-md:flex-col max-md:justify-center max-md:items-center max-md:h-auto md:flex gap-4 md:gap-6 "
            : " md:ml-auto flex max-md:flex-col max-md:justify-center max-md:items-center max-md:h-auto gap-4 md:gap-6 max-md:hidden"
        }
      >
        <Link
          className="text-lg p-2 font-bold hover:underline underline-offset-4"
          href="/#About"
        >
          About
        </Link>
        <Link
          className="text-lg p-2 font-bold hover:underline underline-offset-4"
          href="/team"
        >
          Team
        </Link>
        <Link
          className="text-lg p-2 font-bold hover:underline underline-offset-4"
          href="/#ProblemStatement"
        >
          Statements
        </Link>
        <Link
          className="text-lg p-2 font-bold hover:underline underline-offset-4"
          href="/#Prizes"
        >
          Prizes
        </Link>
        <Link
          className="text-lg p-2 font-bold hover:underline underline-offset-4"
          href="/#Sponsors"
        >
          Sponsors
        </Link>
        <Link
          className="text-lg p-2 font-bold hover:underline underline-offset-4"
          href="/communities"
        >
          Communities
        </Link>
      </nav>
    </header>
  );
}
