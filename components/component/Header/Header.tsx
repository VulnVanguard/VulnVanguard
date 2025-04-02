"use client";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import NavigationLink from "./NavigationLink";
import localFont from "next/font/local";

const geistMono = localFont({
  src: "../../../public/fonts/GeistMonoVF.woff",
  weight: "800",
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useHoverAnimation();

  return (
    <header
      ref={headerRef}
      className={
        `fixed top-2 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl mx-auto z-50 ` +
        geistMono.className
      }
    >
      <div className=" backdrop-blur-lg rounded-xl text-white px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center h-full">
          <NavigationLink className="flex items-center h-full" href="/#">
            <div className="flex items-center h-full w-36 relative">
              <Image
                src="/logo.webp"
                alt="vuln-vanguard logo"
                width={100}
                height={100}
                className="object-contain absolute  "
              />
            </div>
          </NavigationLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {!open ? (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="text-white text-2xl cursor-pointer"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen(!open)}
              className="text-white text-2xl cursor-pointer"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationLink
            href="/#Prizes"
            className="text-white hover:text-green-400 text-sm transition-colors"
          >
            <span data-hover="Prizes">Prizes</span>
          </NavigationLink>
          <NavigationLink
            href="/#Roadmap"
            className="text-white hover:text-green-400 text-sm transition-colors"
          >
            <span data-hover="Roadmap">Roadmap</span>
          </NavigationLink>

          <NavigationLink
            href="/#Sponsors"
            className="text-white hover:text-green-400 text-sm transition-colors"
          >
            <span data-hover="Sponsors">Sponsors</span>
          </NavigationLink>
          <NavigationLink
            href="/#Judges"
            className="text-white hover:text-green-400 text-sm transition-colors"
          >
            <span data-hover="Judges">Judges</span>
          </NavigationLink>
          <Link
            href="/#Mentors"
            className="text-white hover:text-green-400 text-sm transition-colors"
          >
            <span data-hover="Mentors">Mentors</span>
          </Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            href="https://www.srmist-ncr-gfg.club/Registration"
            target="_blank"
            className="bg-green-700 hover:bg-green-600 text-white px-3 py-1.5 text-sm rounded-md transition-colors inline-block"
          >
            <span data-hover="Register Now !!!">Register Now !!!</span>
          </Link>
        </div>

        {/* Mobile Menu (Conditionally Rendered) */}
        {open && (
          <div className="md:hidden absolute top-full mt-2 left-0 right-0 backdrop-blur-md bg-zinc-900/90 rounded-xl p-4 flex flex-col gap-4">
            <Link
              href="/company"
              className="text-white hover:text-green-400 py-2 px-4 w-full"
            >
              <span data-hover="Company">Company</span>
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-green-400 py-2 px-4 w-full"
            >
              <span data-hover="Pricing">Pricing</span>
            </Link>
            <Link
              href="/solutions"
              className="text-white hover:text-green-400 py-2 px-4 w-full"
            >
              <span data-hover="Solutions">Solutions</span>
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-green-400 py-2 px-4 w-full"
            >
              <span data-hover="Products">Products</span>
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-green-400 py-2 px-4 w-full"
            >
              <span data-hover="Resources">Resources</span>
            </Link>
            <div className="hidden md:block">
              <Link
                href="https://www.srmist-ncr-gfg.club/Registration"
                target="_blank"
                className="bg-green-700 hover:bg-green-600 text-white px-3 py-1.5 text-sm rounded-md transition-colors inline-block"
              >
                <span data-hover="Register Now !!!">Register Now !!!</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
