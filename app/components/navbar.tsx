"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Playfair_Display } from "next/font/google";
import AvatarSementara from "../../public/img/backgrounds/O2H_ImagesHero_2.jpg";
import O2HLogo from "../../public/img/logos/O2H_Logos_1.png";

const playfairDisplayRegular = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplayBold = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar shadow-sm fixed top-0 z-30 bg-yellow-400 text-black">
        <div className="navbar-start gap-0.5">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-full hover:bg-yellow-300 active:bg-yellow-500 focus:outline-none transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link href="/">
            <Image alt="" src={O2HLogo} width={48} height={48} priority />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex w-130 lg:w-160 xl:w-180">
            <input
              type="text"
              placeholder="Telusuri..."
              className=" input w-full rounded-l-full bg-yellow-100 border border-yellow-500/30 focus:border-yellow-600 focus:outline-none"
            />
            <button className=" px-5 rounded-r-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 border border-yellow-500/30 transition">
              <FaSearch size={20} />
            </button>
          </div>
        </div>

        <div className="navbar-end gap-0.5">
          <button className="p-2 rounded-full hover:bg-yellow-300 active:bg-yellow-500 focus:outline-none transition">
            <FaShoppingCart size={24} />
          </button>
          <button className="p-2 rounded-full hover:bg-yellow-300 active:bg-yellow-500 focus:outline-none transition">
            <IoIosNotifications size={28} />
          </button>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="p-2 rounded-full hover:bg-yellow-300 active:bg-yellow-500 focus:outline-none avatar transition"
            >
              <div className="w-8 rounded-full">
                <Image alt="Avatar Player" src={AvatarSementara} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content menu p-2 shadow bg-yellow-50 text-black rounded-tl-lg rounded-bl-lg rounded-br-lg w-40 mt-3 ${playfairDisplayRegular.className}`}
            >
              <li>
                <Link
                  href="#"
                  className="hover:bg-yellow-400 hover:text-black transition"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-yellow-400 hover:text-black transition"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-yellow-400 hover:text-black transition"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-yellow-50 text-black z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-yellow-400">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none transition text-lg font-bold"
          >
            ✕
          </button>
          <span className={`text-2xl ${playfairDisplayBold.className}`}>
            Menu
          </span>
        </div>
        <div className="p-4 lg:hidden">
          <div className="flex">
            <input
              type="text"
              placeholder="Telusuri"
              className="input w-full rounded-l-full bg-yellow-100 border border-yellow-400/40 focus:outline-none"
            />
            <button className="px-4 rounded-r-full bg-yellow-400 hover:bg-yellow-500">
              <FaSearch size={18} />
            </button>
          </div>
        </div>
        <ul
          className={`menu p-3 space-y-3 w-full text-base ${playfairDisplayRegular.className}`}
        >
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:bg-yellow-400 hover:text-black transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              onClick={() => setOpen(false)}
              className="hover:bg-yellow-400 hover:text-black transition"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/stores"
              onClick={() => setOpen(false)}
              className="hover:bg-yellow-400 hover:text-black transition"
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              href="/photobooks"
              onClick={() => setOpen(false)}
              className="hover:bg-yellow-400 hover:text-black transition"
            >
              Photobooks
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
